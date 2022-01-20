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
    <div key={post.id} className="postItem post--margin-bottom">
      <div className="postItem__info">
        <span className="postItem__name">{user.name}</span>
        <span className="postItem__email">{user.email}</span>
      </div>
      <h2 className="postItem__title">{post.title}</h2>

      <p className="postItem__body">{post.body}</p>
    </div>
  )
}

export default PostItem;