export default function createElement(parent: string, id?: string | null) {
  const element = document.createElement('div')
  if (id !== undefined && id !== null) {
    element.id = id
  }

  const parentElement = document.getElementById(parent)
  parentElement.appendChild(element);
  return element;
}