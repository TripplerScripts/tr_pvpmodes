const headerStyles = {
  'header': 'bg-[#2a2a2a] w-full h-[8vh] flex flex-row items-center justify-between px-4',
  
  'server-identity': 'flex items-center gap-3',
    'server-logo': 'w-10 h-10',
      'server-logo-image': 'w-full h-full object-contain rounded-md',
    'server-name': 'text-white text-lg font-semibold italic letter-spacing-[0.1rem]',

  'player-stats': 'flex items-center gap-4',
    'friends-container': 'bg-[#3a3a3a] rounded-md px-3 py-1 flex items-center gap-2',
    'friends-icon': 'text-sm',
    'friends-count': 'text-white text-sm font-semibold',
  
}

Object.entries(headerStyles).forEach(([id, className]) => {
  const element = document.getElementById(id)
  if (element) element.className = className
})