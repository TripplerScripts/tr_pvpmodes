export type SQLValue = string | number | boolean | null

export interface Library {
  callback: {
    register: <T extends (source: string, ...args: any) => ReturnType<T>>(identity: string, Function: T) => boolean
    await: <T = any>(identity: string, timeout?: number, ...args: any[]) => Promise<T>
  }
}