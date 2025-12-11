import getUserProfile from '../APIs/getUserProfile'

export default class {
  private name: string
  private avatar: string

  public async refresh(identity: number) {
    const user = await getUserProfile(identity)
    this.name = user.name
    this.avatar = user.avatar
    return true
  }

  public getUserDetails() {
    return { name: this.name, avatar: this.avatar}
  }
}