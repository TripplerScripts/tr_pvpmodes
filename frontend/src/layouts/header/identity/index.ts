import createElement from '../../../modules/createElement'

createElement({
  parent: 'server-identity',
  id: 'server-logo',
})

const logo = document.getElementById('server-logo')
logo.innerHTML = `<img id='server-logo-image' src='https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/trippler.png'>`

createElement({
  parent: 'server-identity',
  id: 'server-name',
})

const name = document.getElementById('server-name')
name.innerHTML = 'Trippler Scripts'