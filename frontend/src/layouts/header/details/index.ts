import createElement from '../../../modules/createElement'
import Button from '../../../components/button'
import { friendsItems } from '../../../modules/playerFriends'

createElement({
  parent: 'player-details',
  className: 'player-card'
})

Button({
  parent: 'player-details',
  content: '🌟 150',
  type: 'primary',
})

Button({
  parent: 'player-details',
  content: '⭐ 3000/4500',
  type: 'soft',
})

Button({
  parent: 'player-details',
  content: `<i class="fas fa-users"></i> ${friendsItems.length}`,
  type: 'secondary',
  onClick: () => {
    const panel = document.getElementById('friends-panel')
    panel.style.right = panel.style.right === '0px' ? '-69%' : '0'
  },
})