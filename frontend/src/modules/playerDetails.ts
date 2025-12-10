import getUserProfile from '../APIs/getUserProfile'

export default class {
  private static instance: any = null
  
  name: string
  avatar: string
  incomingAvatar: string
  outgoingAvatar: string
  friendAvatar: string

  private constructor() {}

  static async getUserDetails(identity: number) {
    if (!this.instance) {
      this.instance = new this()
      this.instance.name = await getUserProfile(identity).then(response => response.name)
    }
    return this.instance
  }

  async refresh(identity: number) {
    this.name = await getUserProfile(identity)
  }
}