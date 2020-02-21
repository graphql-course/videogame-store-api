import GMR from "graphql-merge-resolvers";
import queryGames from "./game";
import queryPlatforms from "./platform";
const queryResolvers = GMR.merge([
    queryGames,
    queryPlatforms
]);

export default queryResolvers;