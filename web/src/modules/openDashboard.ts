import { Button, createElement, sendCallback } from '@lenixdev/ui_components'

const selectGameMode = async (mode: string) => {
  const response = await sendCallback<boolean>('selectGameMode', mode)
  if (response) {
    closeStartingMenu()
  }
}

const closeStartingMenu = () => {
  document.getElementById('startingMenu')?.classList.add('hidden')
}

document.body.id = 'body'
createElement({
  parent: "body",
  id: "root"
})

createElement({
  parent: "root",
  id: "startingMenu",
  className: "w-[100vw] h-[100vh] flex items-end justify-center py-52 bg-stone-900/20 bg-[url(./src/assets/bg.jpg)] bg-cover bg-center"
})

createElement({
  parent: "startingMenu",
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

export default () => {
  document.getElementById('startingMenu')?.classList.remove('hidden')
}