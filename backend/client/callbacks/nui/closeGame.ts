import closeGame from '../../modules/closeGame'

export default () => RegisterNuiCallback('closeGame', async (_data, callback) => callback(closeGame))