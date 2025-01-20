import { Location } from "./Location";
import { Prognosis } from "./Prognosis";

export interface Checkpoint {
    station: Location,
    arrival: string | null, 
    departure: string | null,
    delay: number | null,
    platform: number,
    prognosis: Prognosis
}