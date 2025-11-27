const content = `
  flex-1 bg-gray-800 w-full h-[10vh] flex flex-row
`
document.getElementById('identity').setAttribute('class', `flex items-center`)
document.getElementById('avatar').setAttribute('class', `h-full flex items-center`)
document.getElementById('avatar-image').setAttribute('class', `h-full w-auto object-contain`)
document.getElementById('name').setAttribute('class', `text-white`)

export default content