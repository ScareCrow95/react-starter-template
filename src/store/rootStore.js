import { makeAutoObservable, observable } from 'mobx'
import { createStandaloneToast } from '@chakra-ui/react'
import { createContext, useContext } from 'react'
import { apiUrl, url } from '../constants/url'
import axios from 'axios'
import { darkTheme } from '../theme/darkTheme'
import { lightTheme } from '../theme/lightTheme'
import { UIStore } from './uiStore'

export class RootStore {
  token = ''
  /**
   * @type {UIStore}
   */
  uiStore = null
  constructor() {
    makeAutoObservable(this)
    this.uiStore = new UIStore(this)
  }

  showToast = (
    title,
    description = '',
    status = 'info',
    duration = 5000,
    isClosable = true
  ) => {
    let toast = createStandaloneToast({
      theme: this.uiStore.theme === 'light' ? lightTheme : darkTheme,
    })
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
    })
  }

  /* #region  HTTP Methods */
  HTTP = async (endpoint, data = {}, post = true) => {
    const config = this._getHeaders()
    if (!config) return
    let response = {}
    try {
      if (post) response = await axios.post(apiUrl + endpoint, data, config)
      else response = await axios.get(apiUrl + endpoint, config)
      return response?.data
    } catch (err) {
      this._handleError(err)
      return null
    }
  }

  POST_NO_AUTH = async (endpoint, data) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await axios
      .post(url + endpoint, data, config)
      .catch(this._handleError)
    return response?.data
  }

  _handleError = (err) => {
    console.log(err.response)
    if (err.response?.status === 500) {
      // console.log(err.response)

      console.error(err.response?.data)
    } else {
      console.error(err)
    }

    this.showToast(
      'Something went wrong, please try again.',
      null,
      'error',
      7000,
      true
    )
  }

  _getHeaders = () => {
    if (!this.isLoggedIn) return null
    return {
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    }
  }
  /* #endregion */
}

export const RootStoreInstance = new RootStore()

const RootStoreContext = createContext(RootStoreInstance)

export const useStores = () => useContext(RootStoreContext)
