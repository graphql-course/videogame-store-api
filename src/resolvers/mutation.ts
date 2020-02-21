import { IGame } from "./../interfaces/game.interface";
import { IResolvers } from "graphql-tools";
import { gamesItems } from "../data/data";
const mutation: IResolvers = {
  Mutation: {
    createGame: (_: void, { title, platformsIds }: IGame) => {
      const id = `${gamesItems.length + 1}`;
      const newGame = {
        id,
        title,
        platformsIds
      };
      gamesItems.push(newGame);
      return newGame;
    },

    deleteGame: (parent: any, args: IGame) => {
      const { id } = args;

      /*const book = books.find(e => e.id === id);
  
        let delPos = 0;
        const elementDelete = books.map( (book, index) => {
            delPos = 1;
        });*/

      // Delete select book

      // books.splice(delPos, 1);

      return undefined;
    }
  }
};

export default mutation;
