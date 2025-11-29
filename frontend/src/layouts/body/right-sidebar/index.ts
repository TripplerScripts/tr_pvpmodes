import createElement from '../../../components/createElement'
import { bodyStyles } from '../../../styles/body/index'
import Button from '../../../components/button'

let friendsCount = 0

createElement({
  parent: 'right-sidebar',
  className: bodyStyles['friends-panel'],
  id: 'friends-panel'
})

const createFriendElement = (avatar: string, name: string) => {
  createElement({
    parent: 'friends-panel',
    className: `friend-item-${friendsCount} ${bodyStyles['friend-item']}`
  })

  createElement({
    parent: `friend-item-${friendsCount}`,
    className: `${bodyStyles['friend-avatar']}`,
    content: `<img class="friend-avatar" src="${avatar}">`
  })

  createElement({
    parent: `friend-item-${friendsCount}`,
    content: name
  })
  friendsCount++
}

setTimeout(() => {
  Button({
    parent: 'player-details',
    content: '<i class="fas fa-users"></i> 0',
    id: 'friends-button',
    type: 'secondary',
    onClick: () => {
      const panel = document.getElementById('friends-panel')
      panel.classList.toggle('right-[-69%]')
      panel.classList.toggle('-right-0')
    },
  })
  createFriendElement('https://i.pravatar.cc/300', 'John Doe')
  setInterval(() => {
    createFriendElement('https://i.pravatar.cc/300', 'John Doe')
    const item = document.getElementById('friends-button')
    item.innerHTML = '<i class="fas fa-users"></i> ' + friendsCount
  }, 5000)
}, 1000)