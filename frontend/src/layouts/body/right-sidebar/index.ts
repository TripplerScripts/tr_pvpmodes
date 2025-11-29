import createElement from '../../../modules/createElement'
import { bodyStyles } from '../../../styles/body/index'

let friendsCount = 0

createElement({
  parent: 'right-sidebar',
  className: 'friends-panel',
  id: 'friends-panel'
})

const showFriendElement = (avatar: string, name: string) => {
  createElement({
    parent: 'friends-panel',
    className: `friend-item ${bodyStyles['friend-item']}`
  })

  createElement({
    parent: `friend-item`,
    className: `friend-item ${bodyStyles['friend-item-avatar']}`,
    content: `<img class="friend-avatar" src="${avatar}">`
  })

  createElement({
    parent: `friend-item`,
    className: `${bodyStyles['friend-item-name']}`,
    content: name
  })
}

export default showFriendElement