import { makeAutoObservable } from 'mobx'
// eslint-disable-next-line no-unused-vars
import { RootStore } from './rootStore'

export class UIStore {
  theme = 'dark'
  /**
   * @type {RootStore}
   */
  root = null
  /**
   * @type {{firstName:string,}}
   */
  userData = {}
  /**
   * @type {('register'|'register-done'|'login'|'admin'|'user')}
   */
  screen = 'register'
  constructor(root) {
    makeAutoObservable(this)
    this.root = root
  }
}
