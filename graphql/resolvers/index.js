const postResolver = require('./posts');
const usersResolver = require('./users');

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.count,
    commentCount: (parent) => parent.comments.count,
  },
  Query: {
    ...postResolver.Query,
    // ...usersResolver.Query
  },
  Mutation: {
    ...usersResolver.Mutation,
    ...postResolver.Mutation,
  },
};
