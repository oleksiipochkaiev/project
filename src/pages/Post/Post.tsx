import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import PostItem from '../../components/PostItem/PostItem';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchComments } from '../../slices/commentsSlice/actionCreators';
import { fetchPost } from '../../slices/postSlice/actionCreators';
import { Comment } from '../../components/Comment/Comment';

function Post() {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const { post, isLoading: postLoading, error: postError } = useAppSelector(state => state.postReducer)
  const { comments, isLoading: commentsLoading, error : commentsError} = useAppSelector(state => state.commentsReducer)

  useEffect(() => {
    dispatch(fetchPost(id!))
    dispatch(fetchComments(id!))
  }, [])

  if (postError) {
    return <p>{postError}</p>
  }
  return (
    <div>
      <div>
        {postLoading && <h2>Loading...</h2>}
        
        {post && <PostItem post={post.post} user={post.user}/>}
      </div>
      <div>
      {commentsLoading && <h2>Loading...</h2>}
      {commentsError ? 
        <p>{commentsError}</p> 
        : 
        comments.map((comment) => <Comment comment={comment}/>)
      }
      </div>
    </div>
  )
}

export default Post;