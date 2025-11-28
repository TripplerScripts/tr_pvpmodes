import Button from '../../../components/button'

Button({
  parent: 'player-stats',
  content: `<i class="fas fa-users text-white"></i> 2`,
  id: 'friends-button',
  type: 'secondary',
  onClick: () => {
    const panel = document.getElementById('friends-panel')
    panel.classList.toggle('w-[3rem]')
    panel.classList.toggle('w-[15rem]')
  },
})