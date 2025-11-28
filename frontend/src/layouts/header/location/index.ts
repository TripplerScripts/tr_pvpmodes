import createElement from '../../../modules/createElement'

createElement({
  parent: 'location',
  id: 'location-text',
})

const locationText = document.getElementById('location-text')
locationText.innerHTML = 'The Bunker'