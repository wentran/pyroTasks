import Axios from 'axios'

export const FETCH_GROUPS = 'FETCH_GROUPS'

const ROOT_URL = 'http://localhost:8080'

export function fetchGroups () {
  const request = Axios.get(`${ROOT_URL}/fetchGroups`)
  return {
    type: "FETCH_GROUPS",
    payload: request
  }
}
