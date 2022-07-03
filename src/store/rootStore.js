import { makeAutoObservable, observable } from 'mobx'
import { createStandaloneToast } from '@chakra-ui/react'
import { createContext, useContext } from 'react'
import { apiUrl, url } from '../constants/url'
import axios from 'axios'
import { darkTheme } from '../theme/darkTheme'
import { lightTheme } from '../theme/lightTheme'
import { UIStore } from './uiStore'
import { User } from './classes/User'

export class RootStore {
  token = ''
  /**
   * @type {UIStore}
   */
  uiStore = null
  toast = null
  constructor() {
    makeAutoObservable(this)
    this.uiStore = new UIStore(this)
  }

  /**
   * @type {User}
   */
  user = null

  showToast = (
    title,
    description = '',
    status = 'info',
    duration = 5000,
    isClosable = true
  ) => {
    this.toast?.({
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
    console.error(err.response)

    this.showToast(
      err?.response?.data || 'Something went wrong, please try again.',
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
