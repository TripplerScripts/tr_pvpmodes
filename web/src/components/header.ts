import { User } from '../types';

export function createHeader(user: User): HTMLDivElement {
  const upperBlock = document.createElement('div');
  upperBlock.className = 'flex flex-row justify-between';

  const idContainer = document.createElement('div');
  idContainer.className = 'flex flex-row justify-between';
  
  const nameDiv = document.createElement('div');
  nameDiv.className = 'name';
  nameDiv.textContent = user.name;
  
  const imageDiv = document.createElement('div');
  imageDiv.className = 'image';
  
  const img = document.createElement('img');
  img.src = user.image;
  img.alt = '';
  img.className = 'max-h-20';
  
  imageDiv.appendChild(img);
  idContainer.appendChild(nameDiv);
  idContainer.appendChild(imageDiv);

  const modeContainer = document.createElement('div');
  modeContainer.className = 'flex flex-row justify-between';
  
  const rankedDiv = document.createElement('div');
  rankedDiv.className = 'ranked';
  rankedDiv.textContent = 'Ranked';
  
  const casualDiv = document.createElement('div');
  casualDiv.className = 'casual';
  casualDiv.textContent = 'Casual';
  
  const settingsDiv = document.createElement('div');
  settingsDiv.className = 'settings';
  
  const settingsIcon = document.createElement('i');
  settingsIcon.className = 'fa-solid fa-gear';
  
  settingsDiv.appendChild(settingsIcon);
  modeContainer.appendChild(rankedDiv);
  modeContainer.appendChild(casualDiv);
  modeContainer.appendChild(settingsDiv);

  upperBlock.appendChild(idContainer);
  upperBlock.appendChild(modeContainer);

  return upperBlock;
}