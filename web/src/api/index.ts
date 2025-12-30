import useMainIntrance from '../hooks/useMainIntrance'
import { onNuiCallback } from '@trippler/tr_lib/web'

onNuiCallback('open', () => useMainIntrance(true))