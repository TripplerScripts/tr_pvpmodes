import getUserProfile from '../APIs/getUserProfile'

export default class {
  private static instance: any = null
  
  avatar: string = 'https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png'
  level: number = 7
  name: string = ''
  incomingAvatar: string = 'https://i.pravatar.cc/300'
  outgoingAvatar: string = 'https://i.pravatar.cc/300'
  friendAvatar: string = 'https://i.pravatar.cc/300'

  public constructor() {}

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