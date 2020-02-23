import GMR from "graphql-merge-resolvers";
import queryGames from "./game";
import queryPlatforms from "./platform";


const resolversQuery = GMR.merge(
    [
        queryGames,
        queryPlatforms
    ]
);

export default resolversQuery;