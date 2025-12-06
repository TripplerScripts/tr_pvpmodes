export default (arg: object): void => {
  SendNuiMessage(JSON.stringify(arg))
}