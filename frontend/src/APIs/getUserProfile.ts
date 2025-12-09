import sendCallback from "../components/sendCallback"

export default (identity: number) => sendCallback<any>('getUserProfile', identity)