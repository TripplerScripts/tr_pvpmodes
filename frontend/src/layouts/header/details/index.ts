import createElement from '../../../modules/createElement'
import Button from '../../../components/button'

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
  content: '<i class="fas fa-users"></i> 0',
  id: 'friends-counts',
  type: 'secondary',
  onClick: () => {
    const panel = document.getElementById('friends-panel')
    panel.classList.toggle('right-[-69%]')
    panel.classList.toggle('-right-0')
  },
})