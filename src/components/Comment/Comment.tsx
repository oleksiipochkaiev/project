import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import TrashIcon from '../../images/Trash';
import { IComment } from '../../interfaces/IComment';

import { deleteComment } from '../../slices/commentsSlice/actionCreators';
import './Comment.css';
import capitalize from '../../tools/capitalizeFirstLatter';

type Props = {
  comment: IComment
}

const Comment: React.FC<Props> = ({ comment }) => {
  const dispatch = useDispatch();

  const removeComment = (id: number) => {
    dispatch(deleteComment(id));
  };

  return (
    <div className={classNames('comment', { comment__new: comment.isNew })}>
      <div className="comment__user">
        <span className="comment__name">{comment.name}</span>
        <span className="comment__email">{comment.email}</span>
      </div>
      <p className="comment__body">{capitalize(comment.body)}</p>
      {comment.isMine && (
        <button
          type="button"
          onClick={() => removeComment(comment.id)}
          className="comment__delete"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
};

export default Comment;
