import closeGame from '../../modules/closeGame'

export default () => RegisterNuiCallback('closeGame', (_data, callback) => callback(closeGame()))