import React from 'react';
import { useDispatch } from 'react-redux';
import TrashIcon from '../../images/Trash';
import { IComment } from '../../interfaces/IComment';
import { deleteComment } from '../../slices/commentsSlice/actionCreators';
import './Comment.css'

type Props = {
  comment: IComment
}

export const Comment: React.FC<Props> = ({ comment }) => {
  const dispatch = useDispatch()

  const removeComment = () => {
    dispatch(deleteComment(comment.id))
  }

  return (
    <div className="comment">
      <div className='comment__user'>
        <span className="comment__name">{comment.name}</span>
        <span className="comment__email">{comment.email}</span>
      </div>
      <p className="comment__body">{comment.body}</p>
      {comment.isMine && <button type="button" onClick={removeComment} className="comment__delete"><TrashIcon /></button>}
    </div>
  )
}
