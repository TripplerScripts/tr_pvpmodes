import { rankedModes, privateModes } from '../data/constants';
import { createGameModes } from '../components/gameModes';

export function createBottomSection(): HTMLDivElement {
  const bottomBody = document.createElement('div');
  bottomBody.className = 'h-60 w-60 bg-blue-500';

  const rankedBottom = createGameModes(rankedModes, 'ranked');
  const privateDiv = createGameModes(privateModes, 'private');

  bottomBody.appendChild(rankedBottom);
  bottomBody.appendChild(privateDiv);

  return bottomBody;
}