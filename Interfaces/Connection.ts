import { Checkpoint } from "./Checkpoint";
import { Section } from "./Section";

export interface Connection {
    from: Checkpoint,
    to: Checkpoint,
    duration: string,
    transfers: number,
    products: string[],
    sections: Section[]
}