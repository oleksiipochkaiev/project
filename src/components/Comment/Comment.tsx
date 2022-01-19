import React from 'react';
import { useDispatch } from 'react-redux';
import TrashIcon from '../../images/Trash';
import { IComment } from '../../interfaces/IComment';
import { deleteComment } from '../../slices/commentsSlice/actionCreators';

type Props = {
  comment: IComment
}

export const Comment: React.FC<Props> = ({ comment }) => {
  const dispatch = useDispatch()

  const removeComment = () => {
    dispatch(deleteComment(comment.id))
  }

  return (
    <div>
      <span>{comment.name}</span>
      <span>{comment.email}</span>
      <p>{comment.body}</p>
      {comment.isMine && <button type="button" onClick={removeComment}><TrashIcon /></button>}
    </div>
  )
}
