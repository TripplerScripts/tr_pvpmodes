export default function createElement({parent, id, content}: {parent: string, id?: string | null, content?: string | null}) {
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
  parentElement.appendChild(element);
  return element;
}