import { IPlatform } from "./platform.interface";

export interface IGame {
    id: string;
    title: string;
    platforms: Array<IPlatform>
    platformsIds: Array<string>
}