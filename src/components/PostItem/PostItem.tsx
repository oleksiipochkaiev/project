import React from 'react';
import { IPost } from '../../interfaces/IPost';
import { IPostWithUser } from '../../interfaces/IPostWithUser';
import { IUser } from '../../interfaces/IUser';
import capitalize from '../../tools/capitalizeFirstLatter';
import './PostItem.css';

type Props = {
  post: IPost;
  user: IUser;
}

export const PostItem: React.FC<Props | IPostWithUser> = ({ post, user }) => (
  <div key={post.id} className="post-item post--margin-bottom">
    <div className="post-item__info">
      <span className="post-item__name">{user.name}</span>
      <span className="post-item__email">{user.email}</span>
    </div>

    <h2 className="post-item__title">{capitalize(post.title)}</h2>

    <p className="post-item__body">{capitalize(post.body)}</p>
  </div>
);
