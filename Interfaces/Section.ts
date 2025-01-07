import { Checkpoint } from "./Checkpoint";
import { Journey } from "./Journey";

export interface Section {
    journey: Journey,
    walk: string | null,
    departure: Checkpoint,
    arrival: Checkpoint
}