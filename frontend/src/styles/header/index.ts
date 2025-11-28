const headerStyles = {
  'header': 'bg-[#2a2a2a] w-full h-[8vh] flex flex-row items-center justify-between px-4',
  
  'server-identity': 'flex items-center gap-3',
  'server-logo': 'w-10 h-10',
  'server-logo-image': 'w-full h-full object-contain',
  'server-name': 'text-white text-lg font-semibold',
  
  'player-stats': 'flex items-center gap-4',
  
  'level-badge': 'bg-[#3a3a3a] rounded-md px-3 py-1 flex items-center gap-2',
  'level-icon': 'text-yellow-400 text-sm',
  'level-info': 'flex items-center gap-2 text-white text-sm',
  'level-number': 'font-bold',
  'level-divider': 'text-gray-500',
  'player-name': '',
  'level-progress': 'bottom-0 left-0 h-1 bg-green-500 w-[60px]',
  
  'stars-container': 'bg-[#3a3a3a] rounded-md px-3 py-1 flex items-center gap-2',
  'star-icon': 'text-sm',
  'star-count': 'text-white text-sm font-semibold',
  
  'money-container': 'bg-[#3a3a3a] rounded-md px-3 py-1 flex items-center gap-2',
  'money-icon': 'text-sm',
  'money-amount': 'text-white text-sm font-semibold',
  
  'friends-container': 'bg-[#3a3a3a] rounded-md px-3 py-1 flex items-center gap-2',
  'friends-icon': 'text-sm',
  'friends-count': 'text-white text-sm font-semibold',
  
  'location': 'flex items-center',
  'location-text': 'text-white text-lg font-semibold',
}

Object.entries(headerStyles).forEach(([id, className]) => {
  const element = document.getElementById(id)
  if (element) element.className = className
})