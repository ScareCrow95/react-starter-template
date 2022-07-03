import { makeAutoObservable } from 'mobx'
// eslint-disable-next-line no-unused-vars
import { RootStore } from '../rootStore'

export class User {
  _id = ''
  firstName = ''
  lastName = ''
  pubgName = ''
  pubgMobileID = ''
  discordID = ''
  dob = ''
  email = ''
  createdAt = ''
  /**
   * @type {RootStore}
   */
  root = null
  constructor(data, root) {
    makeAutoObservable(this)
    this.root = root
    this._id = data?._id
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.pubgName = data.pubgName
    this.pubgMobileID = data.pubgMobileID
    this.discordID = data.discordID
    this.dob = data.dob
    this.email = data.email
    this.createdAt = new Date(data?.createdAt)
  }
}
