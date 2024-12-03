import { CollectResponse } from "./collect-response"
import { EcopointResponse } from "./ecopoint-response"

export interface DistrictResponse {
    id: number
    name: string
    ecopoint: EcopointResponse
    collects: CollectResponse
}
