export default function createElement({parent, id, className, content}: {parent: string, id?: string | null, className?: string | null, content?: string | null}) {
  const element = document.createElement('div')
  if (id !== undefined && id !== null) {
    element.id = id
  }

  const parentElement = document.getElementById(parent)
  if (!parentElement) {
    console.error(`Parent element with id '${parent}' not found`)
    return
  }

  if (content !== undefined && content !== null) {
    element.innerHTML = content
  }
  
  if (className !== undefined && className !== null) {
    element.className = className
  }

  parentElement.appendChild(element);
  return element;
}