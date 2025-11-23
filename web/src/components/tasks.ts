export function createTasksContainer(): HTMLDivElement {
  const tasksContainer = document.createElement('div');
  tasksContainer.className = 'h-80 w-80 bg-red-500';
  return tasksContainer;
}