declare global {
  function RegisterNuiCallback(event: string, callback: (data: unknown[], callback: (response: unknown) => void) => void): void;
}

export interface ServerProfile {
  name: string;
  avatar: string;
}

export {}