export default function createUser(resourceName: string, name: string) {
  fetch(`https://${resourceName}/createUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ name }),
  })
}