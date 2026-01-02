import { onNuiCallback } from "@trippler/tr_lib/web"
import openEscapeMenu from "../components/spawn/escapeMenu"

onNuiCallback('spawn/openEscapeMenu', () => {
  openEscapeMenu()
})