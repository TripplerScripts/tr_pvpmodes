import { onNuiCallback } from "@trippler/tr_lib/web"
import openEscapeMenu from "../components/dashboard/escapeMenu"

onNuiCallback('dashboard/openEscapeMenu', () => {
  openEscapeMenu()
})