import createElement from '../../../components/createElement'
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