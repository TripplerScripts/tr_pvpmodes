import lib from "../../../lib";

export default () => RegisterNuiCallback('getUserProfile', () => lib.callback.await('getUserProfile'))