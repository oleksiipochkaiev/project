import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { TailSpin } from 'react-loader-spinner';
import { PostItem } from '../../components/PostItem/PostItem';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import fetchPost from '../../slices/postSlice/actionCreators';
import Comment from '../../components/Comment/Comment';
import { CommentForm } from '../../components/CommentForm/CommentForm';
import { Layout } from '../../layout/Layout';
import '../../styles/container.css';
import './Post.css';
import '../../styles/button.css';
import { useGetAllUsersQuery } from '../../api/usersApi';
import { IUser } from '../../interfaces/IUser';
import { fetchComments } from '../../slices/commentsSlice/actionCreators';

function Post() {
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    post,
    isLoading: postLoading,
    error: postError,
  } = useAppSelector((state) => state.postReducer);

  const {
    comments,
    isLoading: commentsLoading,
    error: commentsError,
  } = useAppSelector((state) => state.commentsReducer);

  const { data: users } = useGetAllUsersQuery('');

  let user: IUser | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      dispatch(fetchPost(id));
      dispatch(fetchComments(id));
    }
  }, []);

  if (post && users) {
    user = users.find((person) => person.id === post.userId);
  }

  if (postError) {
    return (
      <p>{postError}</p>
    );
  }

  return (
    <Layout>
      <div className="post">
        <div>
          {postLoading
            && (
              <div className="loader__wrapper">
                <TailSpin color="#5D71DD" height={60} width={60} />
              </div>
            )}

          {post && users
            && (
              <PostItem post={post} user={user!} />
            )}
        </div>

        <div className="post__form-wrapper">
          {!formVisible
            && (
              <button
                type="button"
                className="button button__margin--left"
                onClick={() => setFormVisible(true)}
              >
                New comment
              </button>
            )}
          {formVisible && <CommentForm setFormVisible={setFormVisible} />}
        </div>

        <div>
          {commentsLoading
            && (
              <div className="loader__wrapper">
                <TailSpin color="#5D71DD" height={60} width={60} />
              </div>
            )}

          {commentsError ? (
            <p>{commentsError}</p>
          ) : (
            comments.map((comment) => <Comment key={comment.id} comment={comment} />)
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Post;
