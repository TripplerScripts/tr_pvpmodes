import Button from '../../../components/button'

Button({
  parent: 'player-stats',
  content: `<i class="fas fa-users text-white"></i> 2`,
  id: 'friends-button',
  type: 'secondary',
  onClick: () => {
    console.log('Friends button clicked')
  },
  onHover: () => {
    console.log('Friends button hovered')
  },
})