export const registeredCommands = {
  setjob: ['id', 'job', 'rank'],
  vector3: ['id', 'job', 'rank'],
  vector4: ['id', 'job', 'rank'],
  vec2: ['id', 'job', 'rank'],
  vec222: ['id', 'job', 'rank'],
  tx: ['id', 'job', 'rank'],
}
export type CommandName = keyof typeof registeredCommands
export const recentCommands: CommandName[] = ['setjob', 'vector3']
export const suggestionsCount = 5