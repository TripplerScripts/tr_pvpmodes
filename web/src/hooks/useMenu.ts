export default (state: boolean) => {
  const menu = document.getElementById('main-menu')?.classList
  state ? menu?.remove('hidden') : menu?.add('hidden')
}