import { Checkpoint } from "./Checkpoint";

export interface Journey {
    name: string,
    category: string,
    categoryCode: Number,
    number: number,
    operator: string,
    to: String,
    passList: Checkpoint[],
    capacity1st: number,
    capacity2st: number
}