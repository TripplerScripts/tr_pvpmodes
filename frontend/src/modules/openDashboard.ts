import { createElement } from '@lenixdev/ui_components'

export default () => {
  createElement({
    parent: 'root',
    className: 'flex items-center justify-center',
    content: '<div class="w-[50%] h-[50%] bg-white rounded-md flex items-center justify-center">Dashboard</div>'
  })
}