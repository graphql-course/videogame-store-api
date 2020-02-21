import { IGame, IPlatform } from './../interfaces';
import { IResolvers } from "graphql-tools";
import { gamesItems, platformsItems } from "../data/data";

const type: IResolvers = {
  Game: {
    platforms: (parent: IGame) => {
      let { platformsIds } = parent;
      const platforms: any[]= [];
      platformsIds.map(id => {
        const findItem = platformsItems.find(p => {
          return id === p.id;
        });
        platforms.push(findItem);
      })
      return platforms;
    }
  },
  // Pending to resolve
  Platform: {
    games: (parent: IPlatform) => {
      const { id } = parent;

      console.log(parent);

      const games = gamesItems.map(e => {
        console.log(e.platformsIds);
      });

      return games;
    }
  }
};

export default type;
