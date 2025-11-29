import createElement from '../../../components/createElement'
import Button from '../../../components/button'

createElement({
  parent: 'center-content',
  className: 'lobby-container',
})

createElement({
  parent: 'lobby-container',
  className: 'left-invite-box',
})

createElement({
  parent: 'lobby-container',
  className: 'right-invite-box',
})

for (let i = 0; i < 2; i++) {
  Button({
    parent: 'left-invite-box',
    className: 'left-invite-button',
    content: '<i class="fas fa-plus"></i>',
    type: 'secondary',
  })
}

for (let i = 0; i < 2; i++) {
  Button({
    parent: 'right-invite-box',
    className: 'right-invite-button',
    content: '<i class="fas fa-plus"></i>',
    type: 'secondary',
  })
}