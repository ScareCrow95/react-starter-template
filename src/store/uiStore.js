import { makeAutoObservable } from 'mobx'
import { RootStore } from './rootStore'

export class UIStore {
  theme = 'dark'
  /**
   * @type {RootStore}
   */
  root = null
  constructor(root) {
    makeAutoObservable(this)
    this.root = root
  }
}
