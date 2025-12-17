import { Button, createElement } from '@lenixdev/ui_components'
import useSelectMode from '../hooks/useSelectMode'

document.body.id = 'body'
createElement({
  parent: "body",
  id: "root"
})

createElement({
  parent: "root",
  id: "main-intrance",
  className: "w-[100vw] h-[100vh] flex items-end justify-center py-52 bg-stone-900/20 bg-[url(./src/assets/bg.jpg)] bg-cover bg-center"
})

createElement({
  parent: "main-intrance",
  id: "dashboard-content",
  className: "flex flex-col items-center gap-5"    
})

Button({
  parent: "dashboard-content",
  id: "dashboard-button",
  content: "Competitive",
  size: "5xl",
  type: "primary",
  onClick: () => useSelectMode('competitive')
})

Button({
  parent: "dashboard-content",
  id: "dashboard-button",
  content: "Freeroam",
  size: "5xl",
  type: "soft",
  onClick: () => useSelectMode('freeroam')
})
