export const bodyStyles = {
  'body': 'flex-1 w-full flex flex-row bg-[#3a3a3a]',
  
  'left-sidebar': 'w-[15%] flex flex-col gap-2 p-2',
  'menu-panel': 'flex-1 rounded-md p-4 flex flex-col gap-1 justify-end pl-[5rem] pb-[2rem]',

  'center-content': 'w-[70%] flex items-center justify-center',
  'lobby-container': 'flex items-center justify-between gap-64',
  'left-invite-box': 'flex items-center justify-between gap-24',
  'right-invite-box': 'flex items-center justify-between gap-24',

  'right-sidebar': 'flex w-[15%] bg-[#2a2a2a] border-white justify-end',
  'friends-panel': 'bg-[#4a4a4a] w-[3rem] h-full flex items-start justify-center p-4 transition-all',
  'friend-item': 'w-[10rem] h-[3rem] bg-[#555] rounded-md flex items-center justify-start text-white text-lg cursor-pointer hover:bg-[#666] pl-2 gap-2 transition-all',
  'friend-avatar': 'w-8 h-8 object-contain rounded-md',
}

Object.entries(bodyStyles).forEach(([id, className]) => {
  const element = document.getElementById(id)
  if (element) element.className = className
})

const menuItems = document.querySelectorAll('.menu-item')
menuItems.forEach((item) => {
  ;(item as HTMLElement).className = 'text-3xl text-white italic hover:font-bold cursor-pointer transition-all'
})