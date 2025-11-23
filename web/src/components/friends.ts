export function createFriendsContainer(): HTMLDivElement {
  const friendsContainer = document.createElement('div');
  friendsContainer.className = 'h-[30rem] w-8 bg-red-500';
  
  const listDiv = document.createElement('div');
  listDiv.className = 'list';
  
  const inviteDiv = document.createElement('div');
  inviteDiv.className = 'invite';
  
  const requestedDiv = document.createElement('div');
  requestedDiv.className = 'requested';
  
  friendsContainer.appendChild(listDiv);
  friendsContainer.appendChild(inviteDiv);
  friendsContainer.appendChild(requestedDiv);

  return friendsContainer;
}