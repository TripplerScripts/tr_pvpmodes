const bodyStyles = {
  'body': 'flex-4 bg-gray-600 w-full h-full',
}

Object.entries(bodyStyles).forEach(([id, className]) => {
  const element = document.getElementById(id)
  if (element) element.className = className
})