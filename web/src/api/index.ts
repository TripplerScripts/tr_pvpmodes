import { sendCallback } from "@lenixdev/ui_components"
import { ServerProfile } from "../../../shared/types"
export const getServerProfile = () => sendCallback<ServerProfile>('getServerProfile')