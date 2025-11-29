import Button from '../../../components/button'

Button({
  parent: 'player-details',
  content: `<i class="fas fa-users"></i> 2`,
  type: 'secondary',
  onClick: () => {
    const panel = document.getElementById('friends-panel')
    panel.classList.toggle('right-[-69%]')
    panel.classList.toggle('-right-0')
  },
})