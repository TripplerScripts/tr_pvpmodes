import createElement from '../../../modules/createElement'

createElement({
  parent: 'right-sidebar',
  id: 'friends-panel',
})

createElement({
  parent: 'friends-panel',
  id: 'friend-item'
})

createElement({
  parent: 'friend-item',
  id: 'friend-item-avatar'
})

createElement({
  parent: 'friend-item',
  id: 'friend-item-name'
})

const friendItemAvatar = document.getElementById('friend-item-avatar')
friendItemAvatar.innerHTML = `
<img id="friend-avatar" src="https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png">
<div id="friend-status">🟢</div>
`

const friendItemName = document.getElementById('friend-item-name')
friendItemName.innerHTML = 'Lenix'