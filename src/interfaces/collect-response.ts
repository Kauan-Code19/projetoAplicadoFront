import { Shift } from "../enums/shift";

export interface CollectResponse {
    id: number
    shift: Shift
    dayOfWeek: String
    schedule: number
    district: string
}
