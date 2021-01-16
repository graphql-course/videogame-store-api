import { IResolvers } from "graphql-tools";
import { gamesItems, platformsItems } from "../data/data";

const query: IResolvers = {
    Query: {
        games() {
            return gamesItems;
        },
        platforms() {
            return platformsItems;
        }
    }
}

export default query;