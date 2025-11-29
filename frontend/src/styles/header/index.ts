const headerStyles = {
  'header': 'bg-[#2a2a2a] select-none w-full h-[8vh] flex flex-row items-center justify-between px-4',
  
  'server-identity': 'flex items-center gap-3',
    'server-logo': 'w-10 h-10',
      'server-logo-image': 'w-full h-full object-contain rounded-md',
    'server-name': 'text-white text-2xl font-semibold italic letter-spacing-[0.1rem] cursor-default',

  'player-details': 'flex items-center gap-4 text-white',
  
}

Object.entries(headerStyles).forEach(([id, className]) => {
  const element = document.getElementById(id)
  if (element) element.className = className
})