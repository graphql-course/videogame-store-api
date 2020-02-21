import { IGame } from "./game.interface";

export interface IPlatform {
    id: string;
    name: string;
    games: Array<IGame>
}