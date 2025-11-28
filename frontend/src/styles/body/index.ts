const bodyStyles = {
  'body': 'flex-1 w-full flex flex-row bg-[#3a3a3a]',
  
  'left-sidebar': 'w-[230px] bg-[#2a2a2a] flex flex-col gap-2 p-2',
  'quests-panel': 'bg-[#d4d4d4] h-[250px] rounded-md flex items-center justify-center',
  'quests-title': 'text-2xl font-semibold text-black',
  'menu-panel': 'bg-[#d4d4d4] flex-1 rounded-md p-4 flex flex-col gap-1',
  
  'center-content': 'flex-1 flex items-center justify-center',
  'character-display': 'flex items-center justify-center gap-8',
  'customize-left': 'w-12 h-12 bg-[#555] rounded-md flex items-center justify-center text-white text-2xl cursor-pointer hover:bg-[#666] transition-all',
  'customize-right': 'w-12 h-12 bg-[#555] rounded-md flex items-center justify-center text-white text-2xl cursor-pointer hover:bg-[#666] transition-all',
  'character-avatar': 'flex flex-col items-center gap-4',
  'avatar-head': 'w-24 h-24 bg-[#555] rounded-full border-4 border-[#666]',
  'avatar-body': 'w-32 h-40 bg-[#555] rounded-full',
  
  'right-sidebar': 'w-[230px] bg-[#2a2a2a] p-2',
  'friends-panel': 'bg-[#3a3a3a] h-full rounded-md flex items-end justify-center p-4',
  'friends-title': 'text-2xl font-semibold text-white',
}

Object.entries(bodyStyles).forEach(([id, className]) => {
  const element = document.getElementById(id)
  if (element) element.className = className
})

const menuItems = document.querySelectorAll('.menu-item')
menuItems.forEach((item) => {
  ;(item as HTMLElement).className = 'text-lg text-black italic hover:font-bold cursor-pointer transition-all'
})