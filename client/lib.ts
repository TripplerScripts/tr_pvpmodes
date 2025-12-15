interface Library {
  callback: {
    register: <T extends (...args: any) => ReturnType<T>>(identity: string, Function: T) => boolean
    await: <T = Promise<unknown>>(identity: string, timeout?: number, ...args: any[]) => T
  }
}

export default exports.tr_lib.init() as Library