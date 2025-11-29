import createElement from '../../../modules/createElement'
import { friendsItems } from '../../../modules/playerFriends'

createElement({
  parent: 'right-sidebar',
  className: 'friends-panel',
  id: 'friends-panel'
})

const initFriends = () => {
  for (let i = 0; i < friendsItems.length; i++) {

    createElement({
      parent: 'friends-panel',
      className: 'friend-item'
    })

    createElement({
      parent: 'friend-item',
      className: 'friend-item-avatar',
      content: `<img className="friend-avatar" src="${friendsItems[i].avatar}">`
    })

    createElement({
      parent: 'friend-item',
      className: 'friend-item-name',
      content: `${friendsItems[i].name}`
    })
  }
}
initFriends()