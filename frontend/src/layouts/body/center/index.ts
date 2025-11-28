import createElement from '../../../modules/createElement'
import Button from '../../../components/button'

createElement({
  parent: 'center-content',
  id: 'lobby-container',
})

createElement({
  parent: 'lobby-container',
  id: 'left-invite-box',
})

createElement({
  parent: 'lobby-container',
  id: 'right-invite-box',
})

for (let i = 0; i < 2; i++) {
  Button({
    parent: 'left-invite-box',
    id: 'left-invite-button',
    content: '<i class="fas fa-plus"></i>',
    type: 'secondary',
  })
}

for (let i = 0; i < 2; i++) {
  Button({
    parent: 'right-invite-box',
    id: 'right-invite-button',
    content: '<i class="fas fa-plus"></i>',
    type: 'secondary',
  })
}