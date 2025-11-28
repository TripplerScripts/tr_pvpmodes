import createElement from '../../../../modules/createElement'

createElement({
  parent: 'identity',
  id: 'server-name',
})

const nameElement = document.getElementById('server-name')
nameElement.innerHTML = 'Trippler'