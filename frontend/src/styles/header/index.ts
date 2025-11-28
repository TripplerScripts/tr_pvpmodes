const headerStyles = {
  'header': 'flex-1 bg-gray-800 w-full h-[10vh] flex flex-row justify-between',
  'identity': 'flex items-center justify-between',
  'server-avatar': 'h-full',
  'server-image': 'h-full',
  'server-name': 'text-white',
  'control': 'flex items-center justify-between',
  'player-informations': 'h-full w-[7rem]',
  'player-details': 'flex h-[85%] items-center gap-2 px-[0.5rem] text-white text-md',
  'player-avatar': 'h-full p-[0.5rem] bg-black rounded-md',
  'player-image': 'h-full rounded-sm',
  'bar-level': 'flex bg-white h-[15%]',
  'filled-bar': 'bg-sky-500 w-[1rem]',
}

Object.entries(headerStyles).forEach(([id, className]) => {
  const element = document.getElementById(id)
  if (element) element.className = className
})