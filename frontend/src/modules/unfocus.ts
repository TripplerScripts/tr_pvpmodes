export default function unfocus (resourceName: string) {
  fetch(`https://${resourceName}/unfocus`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
  const root = document.getElementById('root')
  if (root) {
    root.classList.add('hidden')
  }
}