import React from 'react';
import { Post } from './Post';

export const FetchedPosts = ({posts}) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Загрузить</button>
  }
  return posts.map((post, i) => <Post key={i} post={post} />);
};
