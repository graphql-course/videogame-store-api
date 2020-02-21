import GMR from "graphql-merge-resolvers";
import mutationGame from "./game";

const mutationResolvers = GMR.merge(
  [ mutationGame ]
);

export default mutationResolvers;