import { IResolvers } from "graphql-tools";
import { games, platforms } from "./../data/data";

const type: IResolvers = {
  Game: {
    platforms: parent => {
      /*let { authorId } = parent;

      const author = authors.find(e => e.id === authorId);

      return author;*/
    }
  },
  Platform: {
    games: parent => {
      /*const { id } = parent;

      const userBooks = books.filter(e => e.author === id);

      return userBooks;*/
    }
  }
};

export default type;
