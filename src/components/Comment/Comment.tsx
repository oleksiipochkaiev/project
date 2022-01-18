import React from 'react';
import { IComment } from '../../interfaces/IComment';

type Props = {
  comment: IComment
}

export const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <>
      <span>{comment.name}</span>
      <span>{comment.email}</span>
      <p>{comment.body}</p>
    </>
  )
}
