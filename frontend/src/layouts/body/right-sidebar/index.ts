import createElement from '../../../modules/createElement'

createElement({
  parent: 'right-sidebar',
  id: 'friends-panel',
})

createElement({
  parent: 'friends-panel',
  id: 'friends-title',
})
const friendsTitle = document.getElementById('friends-title')
friendsTitle.innerHTML = 'Friends'