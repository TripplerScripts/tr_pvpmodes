import getUserProfile from '../APIs/getUserProfile'

export default class {
  private name: string
  private avatar: string
  private selfUserId: number

  public async getUserDetails(identity?: number) {
    const targetId = identity ?? this.selfUserId
    if (!targetId) throw new Error('No cached identity found')

    const user = await getUserProfile(targetId)
    this.name = user.name
    this.avatar = user.avatar

    this.selfUserId ??= targetId

    return { name: this.name, avatar: this.avatar }
  }
}