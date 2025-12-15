import DOMContentLoaded from '../../index'

export default () => {
  RegisterNuiCallback('DOMContentLoaded', (_data: any, callback: Function) => {
    DOMContentLoaded(true)
    callback(true)
  })
}