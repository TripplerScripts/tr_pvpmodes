import { User } from '../types';
import { createHeader } from '../components/header';
import { createTasksContainer } from '../components/tasks';
import { createFriendsContainer } from '../components/friends';

export function createTopSection(user: User): HTMLDivElement {
  const topBody = document.createElement('div');
  topBody.className = 'flex flex-row justify-between';

  const leftSection = document.createElement('div');
  leftSection.className = 'left-section';
  leftSection.appendChild(createHeader(user));
  leftSection.appendChild(createTasksContainer());

  const rightSection = document.createElement('div');
  rightSection.className = 'right-section';
  rightSection.appendChild(createFriendsContainer());

  topBody.appendChild(leftSection);
  topBody.appendChild(rightSection);

  return topBody;
}