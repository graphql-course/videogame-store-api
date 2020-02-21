import { IGame, IPlatform } from "./../interfaces";
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
  Platform: {
    games: (parent: IPlatform) => {
      const { id } = parent;
      const gameList: any[] = [];

      gamesItems.map(e => {
        if (e.platformsIds.indexOf(id) > -1) {
          gameList.push(e);
        }
      });

      return gameList;
    }
  }
};

export default type;
