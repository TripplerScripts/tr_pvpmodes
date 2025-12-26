import { fatal } from '@trippler/tr_lib/server'
import './api'
export const playersSources: number[] = []

on("playerDropped", (_reason: string, _resourceName: string, _clientDropReason: number) => {
  playersSources.splice(playersSources.indexOf(source), 1)
});

on("playerJoining", (_source: number, oldID: string) => {
  playersSources.push(source)
});

on("onResourceStop", (resourceName: string) => {
  if (GetCurrentResourceName() !== resourceName) return
  fatal("tr_freeroam caught stopping, please restart your server")
})