import { makeAutoObservable, observable } from 'mobx'
// eslint-disable-next-line no-unused-vars
import { RootStore } from '../rootStore'

export class Note {
  _id = ''
  title = ''
  desc = ''
  constructor(data) {
    makeAutoObservable(this)
    this._id = data._id
    this.title = data.title
    this.desc = data.desc
  }
}

export class EventItem {
  _id = ''
  duration = ''
  timeToStart = ''
  description = ''
  /**
   * @type {Map<string,Note>}
   */
  notes = new observable.map()
  source = ''
  assets = ''
  videoAsset = ''
  audioSource = ''
  active = false
  /**
   * @type {RootStore}
   */
  root = null
  constructor(data, root) {
    makeAutoObservable(this)
    this.root = root
    this._id = data?._id
    this.duration = data.duration
    this.timeToStart = data.timeToStart
    this.source = data.source
    this.assets = data.assets
    this.videoAsset = data.videoAsset
    this.audioSource = data.audioSource
    this.active = data.active
    data?.notes?.forEach((x) => this.notes.set(x._id, x))
  }
}
