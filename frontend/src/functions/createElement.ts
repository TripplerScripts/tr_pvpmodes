export default function createElement({parent, id, className}: {parent: string, id?: string | null, className?: string | null}) {
  const element = document.createElement('div')
  if (id !== undefined && id !== null) {
    element.id = id
  }
  if (className !== undefined && className !== null) {
    element.className = className
  }

  const parentElement = document.getElementById(parent)
  if (!parentElement) {
    console.error(`Parent element with id '${parent}' not found`)
  }
  parentElement.appendChild(element);
  return element;
}