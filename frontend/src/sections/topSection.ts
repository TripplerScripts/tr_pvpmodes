import { User } from '../types';
import { createHeader } from '../components/topLeft/header';
import { createTasksContainer } from '../components/tasks';
import { createFriendsContainer } from '../components/friends';

export function createTopSection(user: User): HTMLDivElement {
  const topBody = document.createElement('div');
  topBody.className = 'flex flex-row justify-between';

  const leftSection = document.createElement('div');
  leftSection.className = 'left-section w-3/4';
  leftSection.appendChild(createHeader(user));
  leftSection.appendChild(createTasksContainer());

  const rightSection = document.createElement('div');
  rightSection.className = 'right-section w-1/4 justify-items-end';
  rightSection.appendChild(createFriendsContainer());

  topBody.appendChild(leftSection);
  topBody.appendChild(rightSection);

  return topBody;
}