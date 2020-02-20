import { IResolvers } from "graphql-tools";
import { games } from './../data/data';
const mutation: IResolvers = {
    Mutation: {
        createGame: (_, { title, platforms }) => {
    
          const id = `${games.length + 1}`;
    
          games.push({
            id,
            title,
            platforms,
          });
        },
    
        deleteGame: (parent, args) => {
          const { id } = args;
    
          /*const book = books.find(e => e.id === id);
    
          let delPos = 0;
          const elementDelete = books.map( (book, index) => {
              delPos = 1;
          });*/

          // Delete select book

          // books.splice(delPos, 1);
    
          return undefined;
        },
      },
}

export default mutation;