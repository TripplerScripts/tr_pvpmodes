import { Button, createElement, sendCallback } from '@lenixdev/ui_components'

const selectGameMode = async (mode: string) => {
  const response = await sendCallback<boolean>('startPlay', mode)
  if (response) {
    closeDashboard()
  }
}

const closeDashboard = () => {
  document.getElementById('root')?.remove()
}

export default () => {
  createElement({
    parent: "body",
    id: "root"
  })

  createElement({
    parent: "root",
    id: "dashboard",
    className: "w-[100vw] h-[100vh] flex items-end justify-center py-52 bg-stone-900/20 bg-[url(./src/assets/bg.jpg)] bg-cover bg-center"
  })

  createElement({
    parent: "dashboard",
    id: "dashboard-content",
    className: "flex flex-col items-center gap-5"    
  })

  Button({
    parent: "dashboard-content",
    id: "dashboard-button",
    content: "Competitive",
    size: "5xl",
    type: "primary",
    onClick: () => selectGameMode('competitive')
  })

  Button({
    parent: "dashboard-content",
    id: "dashboard-button",
    content: "Freeroam",
    size: "5xl",
    type: "soft",
    onClick: () => selectGameMode('freeroam')
  })
}