import { Coordinate } from "./Coordinate";

export interface Location {
    id: number,
    type: string,
    name: string,
    score: number,
    coordinates: Coordinate,
    distance: number
}