import sendCallback from "../components/sendCallback"

export default () => sendCallback<{ name: string, avatar: string }>('getServerProfile')