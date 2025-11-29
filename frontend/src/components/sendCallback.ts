export default function sendCallback (resourceName: string, callback: string) {
  fetch(`https://${resourceName}/${callback}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({}),
  })
}