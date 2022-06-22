import { CLEAN_TEMP_STATE } from "../utils/constants"

export function cleanTempState() {
  return {
    type: CLEAN_TEMP_STATE
  }
}
