import { fatal, info } from '@trippler/tr_lib/shared'

if (GetResourceState('chat') !== 'missing') {
  info("the resource 'chat' was detected, stopping 'chat'...")
  StopResource('chat')
}

const addMessage = (target: number, message: string) => {
  if (!message) {
    fatal(`expected string at #2, got ${typeof message}`)
    return
  }
  if (!target) target = -1

  emitNet('chat:addMessage', target, message)
}

onNet('chat:addMessage', addMessage)
globalThis.exports('addMessage', addMessage)