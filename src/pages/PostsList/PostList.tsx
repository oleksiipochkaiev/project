import { buildThunks } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useGetAllPostsQuery } from '../../api/postsApi';
import { useGetAllUsersQuery } from '../../api/usersApi';
import PostItem from '../../components/PostItem/PostItem';
import './PostList.css'

function PostList() {
  const [page, setPage] = useState<number>(1)
  console.log(page)
  const { data: posts, isLoading, isError } = useGetAllPostsQuery(page);
  const { data: users } = useGetAllUsersQuery('');

  const pages: number[] = [1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10];
  
  if (isError) {
    return (
      <p>Error please try again</p>
    )
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className="post__list">
        {posts && users && posts.map((post) => {
          let user = users!.find((user) => user.id === post.userId);

          return (
            <Link to={String(post.id)}>
              <PostItem key={post.id} user={user!} post={post}/>
            </Link>
          )
        })}
      </ul>

      <div>
        {pages.map((btn) => (
          <button key={btn} type="button" onClick={() => setPage(btn)}>{btn}</button>
        ))}
      </div>
    </>
  )
}

export default PostList;