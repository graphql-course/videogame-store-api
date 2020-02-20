import { IResolvers } from "graphql-tools";
import { games, platforms } from "./../data/data";

const query: IResolvers = {
    Query: {
        games() {
            return games;
        },
        platforms() {
            return platforms;
        }
    }
}

export default query;