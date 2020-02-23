import { IResolvers } from "graphql-tools";
import { gamesItems } from "../../data/data";

const queryGames: IResolvers = {
    Query: {
        games() {
            return gamesItems;
        }
    }
}

export default queryGames;