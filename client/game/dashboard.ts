import { control } from "@trippler/tr_lib/client";
import { openEscapeMenu } from "../modules/spawn";

control.onDisabled('ESC', () => {
  openEscapeMenu()
})