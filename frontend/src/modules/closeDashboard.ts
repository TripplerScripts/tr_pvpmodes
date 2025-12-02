import unfocus from './unfocus'
import { resourceName } from '../index'

export default function closeDashboard() {
  unfocus(resourceName)
}