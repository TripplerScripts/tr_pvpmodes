declare global {
  var lastCoords: number[];
  var camHandle: number;
  function RegisterNuiCallback(event: string, callback: (data: any[], callback: (response: any) => void) => void): void;
}

export {}