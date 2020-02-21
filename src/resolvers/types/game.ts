import { IGame } from "./../../interfaces";
import { IResolvers } from "graphql-tools";
import { platformsItems } from "./../../data/data";

const typeGame: IResolvers = {
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
  }
};

export default typeGame;
