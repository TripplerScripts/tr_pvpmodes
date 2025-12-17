export default (state: boolean) => {
  const intrance = document.getElementById('main-intrance')?.classList
  state ? intrance?.remove('hidden') : intrance?.add('hidden')
}