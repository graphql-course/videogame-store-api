import GMR from 'graphql-merge-resolvers';
import queryGames from './games';
import queryPlatforms from './platforms';
const queryResolvers = GMR.merge([
    queryGames,
    queryPlatforms
]);

export default queryResolvers;