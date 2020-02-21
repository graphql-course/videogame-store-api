import GMR from "graphql-merge-resolvers";
import typeGame from "./game";
import typePlatform from "./platform";


const typesResolver = GMR.merge(
    [
        typeGame, typePlatform
    ]
);

export default typesResolver;