declare global {
  var lastCoords: number[];
  var camHandle: number;
  function RegisterNuiCallback(event: string, callback: (data: unknown[], callback: (response: unknown) => void) => void): void;
}

export interface ServerProfile {
  name: string;
  avatar: string;
}

export {}