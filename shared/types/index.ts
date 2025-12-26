export interface Suggestion {
  name: string
  help: string | undefined
  params: {
    name: string
    help: string | undefined
    optional: boolean | undefined
    type: `playerId` | `string` | `number`
  }[]
}

export interface Message {
  args: string[]
  template: string
  params?: { [key: string]: string }
  multiline?: boolean
  color?: [ number, number, number ]
  templateId?: number
  mode?: string
  modeData?: Mode

  id?: string
}

export interface Mode {
  name: string
  displayName: string
  color: string
  hidden?: boolean
  isChannel?: boolean
  isGlobal?: boolean
}

export const registeredCommands = {
  setjob: ['id', 'job', 'rank',],
  vector3: ['id', 'job', 'rank'],
  vector4: ['id', 'job', 'rank'],
  vec2: ['id', 'job', 'rank'],
  vec222: ['id', 'job', 'rank'],
  tx: ['id', 'job', 'rank'],
}

export type CommandName = Suggestion['name']