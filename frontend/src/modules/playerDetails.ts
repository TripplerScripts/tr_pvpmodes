import getUserProfile from '../APIs/getUserProfile'
import updatePlayerCard from '../elements/header/player/card'

export default class playerDetails {
  private name: string
  private avatar: string
  private id: number

  public async getUserDetails(identity: number, self?: boolean) {
    const user = await getUserProfile(identity)
    this.id = identity
    this.name = user.name
    this.avatar = user.avatar

    if (self) {
      updatePlayerCard(identity)
    }

    return { name: this.name, avatar: this.avatar , id: this.id }
  }
}