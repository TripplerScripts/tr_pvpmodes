const headerStyles = {
  'header': 'bg-[#2a2a2a] select-none w-full h-[15vh] flex flex-row items-center justify-between px-4',
  
  'server-identity': 'flex items-center gap-3',
  'server-logo': 'w-10 h-10',
  'server-logo-image': 'w-full h-full object-contain rounded-md',
  'server-name': 'text-white text-2xl font-semibold italic letter-spacing-[0.1rem] cursor-default',

  'player-details': 'flex p-2 h-full items-center justify-center gap-4 text-white',
  'player-card': 'w-[310px] h-[60px] bg-[#9ca3af] flex items-center rounded-[6px] overflow-hidden px-[6px] gap-[6px]',
  'player-left-side': 'w-[50px] h-[50px] bg-white flex items-center justify-center rounded-[4px] flex-shrink-0',
  'player-avatar': 'w-[35px] h-[35px] object-contain',
  'player-right-side': 'flex-1 flex flex-col gap-[4px]',
  'player-info': 'flex items-center gap-[6px]',
  'player-level': 'text-white text-2xl font-bold',
  'player-divider': 'w-[1px] h-6 bg-white rounded-full',
  'player-name': 'text-white text-2xl font-semibold',
  'player-level-bar': 'w-full h-[12px] bg-[#d1d5db] rounded-full overflow-hidden',
  'player-level-bar-fill': 'w-[45%] h-full bg-[#00ff88] rounded-full',
}

Object.entries(headerStyles).forEach(([className, styles]) => {
  const elements = document.querySelectorAll(`.${className}`)
  elements.forEach((element) => {
    (element as HTMLElement).className = styles
  })
})