export default function createElement({parent, id, className, content}: {parent: string, id?: string, className?: string, content?: string}) {
  const element = document.createElement('div')
  
  if (id) element.id = id
  if (className) element.className = className
  if (content) element.innerHTML = content

  const parentElement = document.getElementById(parent) || document.querySelector(`.${parent}`)

  if (!parentElement) {
    console.error(`Parent '${parent}' not found`)
    return element
  }

  parentElement.appendChild(element)
  return element
}