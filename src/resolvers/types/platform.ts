import { IPlatform } from "./../../interfaces";
import { IResolvers } from "graphql-tools";
import { gamesItems, platformsItems } from "./../../data/data";

const typePlatform: IResolvers = {
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

export default typePlatform;
