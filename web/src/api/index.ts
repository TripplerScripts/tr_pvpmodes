import { ServerProfile } from "../../../shared/types"
import { triggerNuiCallback } from "@trippler/tr_lib/web"

export const getServerProfile = () => triggerNuiCallback<ServerProfile>('getServerProfile')