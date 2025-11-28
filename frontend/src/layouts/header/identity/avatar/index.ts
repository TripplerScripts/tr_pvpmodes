import createElement from '../../../../modules/createElement'

createElement({
  parent: 'identity',
  id: 'server-avatar',
})

const avatar = document.getElementById('server-avatar')
avatar.innerHTML = `
 <img id='server-image' src='https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/trippler.png'>
`