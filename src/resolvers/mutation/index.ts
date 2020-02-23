import GMR from "graphql-merge-resolvers";
import mutationGame from "./game";


const resolversMutation = GMR.merge(
    [
        mutationGame
    ]
);

export default resolversMutation;