import { IResolvers } from "graphql-tools";
import { platformsItems } from "../../data/data";

const queryPlatforms: IResolvers = {
    Query: {
        platforms() {
            return platformsItems;
        }
    }
}

export default queryPlatforms;