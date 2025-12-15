declare global {
  function RegisterNuiCallback(event: string, callback: (data: any[], callback: (response: unknown) => void) => void): void;
}
export {}