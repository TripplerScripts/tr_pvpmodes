import { useDiv, useButton } from '@trippler/tr_kit/web'
import useSelectMode from '../hooks/useSelectMode'

document.body.id = 'body'
useDiv({
  parent: "body",
  id: "root"
})

useDiv({
  parent: "root",
  id: "main-intrance",
  className: "w-[100vw] h-[100vh] flex items-end justify-center py-52 bg-stone-900/20 bg-[url(./images/bg.jpg)] bg-cover bg-center"
})

useDiv({
  parent: "main-intrance",
  id: "dashboard-content",
  className: "flex flex-col items-center gap-5"    
})

useButton({
  parent: "dashboard-content",
  id: "dashboard-button",
  content: "Competitive",
  size: "5xl",
  type: "primary",
  onClick: () => useSelectMode('competitive')
})

useButton({
  parent: "dashboard-content",
  id: "dashboard-button",
  content: "Freeroam",
  size: "5xl",
  type: "soft",
  onClick: () => useSelectMode('freeroam')
})
