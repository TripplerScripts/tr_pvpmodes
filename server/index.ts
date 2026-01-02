import { logoutPlayer } from "./api"

onNet('tr_onboarding/server/logout', () => {
  exports.qbx_core.Logout(source)
  logoutPlayer(source)
})