import React from 'react';
import { Post } from './Post';

export const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className="text-center">Постов пока нет</p>;
  }

  return posts.map((post, i) => <Post key={i} post={post} />);
};
