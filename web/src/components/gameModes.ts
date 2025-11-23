export function createGameModes(modes: string[], className: string): HTMLDivElement {
  const container = document.createElement('div');
  container.className = className;
  
  modes.forEach(mode => {
    const modeDiv = document.createElement('div');
    modeDiv.className = mode;
    container.appendChild(modeDiv);
  });

  return container;
}