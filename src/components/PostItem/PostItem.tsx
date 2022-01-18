import React from 'react';
import { IPost } from '../../interfaces/IPost';
import { IPostWithUser } from '../../interfaces/IPostWithUser';
import { IUser } from '../../interfaces/IUser';
import './PostItem.css'

type Props = {
  post: IPost;
  user: IUser;
}

export const PostItem: React.FC<Props | IPostWithUser> = ({ post, user }) => {
  return (
    <div key={post.id} className="post__item">
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </div>
      <h2 className="post__title">{post.title}</h2>
      <p className="post__body">{post.body}</p>
    </div>
  )
}

export default PostItem;