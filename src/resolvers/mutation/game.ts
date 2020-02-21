import { IGame } from "../../interfaces/game.interface";
import { IResolvers } from "graphql-tools";
import { gamesItems } from "../../data/data";
const mutationGame: IResolvers = {
    Mutation: {
        createGame: (_: void, { title, platformsIds }: IGame) => {
    
          const id = `${gamesItems.length + 1}`;
          const newGame = {
            id,
            title,
            platformsIds,
          };
          gamesItems.push(newGame);
          return newGame;
        },
        deleteGame: (_: any, { id }) => {
          let game;
          for (let i = 0; i < gamesItems.length; i++) {
            game = gamesItems[i];
            if (id === game.id) {
              gamesItems.splice(i, 1);
              break;
            }
          }
    
          return game;
        }
      },
}

export default mutationGame;