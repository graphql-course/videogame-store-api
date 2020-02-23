import GMR from "graphql-merge-resolvers";
import typeGamesResolvers from "./game";
import typeResolversPlatforms from "./platform";

const typeResolvers = GMR.merge(
    [
        typeGamesResolvers,
        typeResolversPlatforms
    ]
);

export default typeResolvers;