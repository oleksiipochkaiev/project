import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllPostsQuery, useGetUserPostsQuery } from '../../api/postsApi';
import { useGetAllUsersQuery } from '../../api/usersApi';
import PostItem from '../../components/PostItem/PostItem';
import './PostList.css'

function PostList() {
  const [page, setPage] = useState<number>(1)
  const [selectedUser, setSelectedUser] = useState<number>(0)
  const { data: posts, isLoading, isError } = useGetAllPostsQuery(page);
  const x = {
    page,
    selectedUser
  }
  const { data: userPosts, isLoading: userPostsLoading, isError: userPostsError } = useGetUserPostsQuery(x);
  const { data: users } = useGetAllUsersQuery('');

  const pages: number[] = [1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10];
  
  console.log(userPosts)

  if (isError) {
    return (
      <p>Error please try again</p>
    )
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className="post__list">
        {users && 
          <select name="selectedUser" value={selectedUser} onChange={(e) => setSelectedUser(Number(e.target.value))}>
            <option value={0}>All</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        }
        
        { selectedUser 
          ? userPosts && users && userPosts.map((post) => {
            let user = users!.find((user) => user.id === post.userId);
  
            return (
              <Link to={String(post.id)}>
                <PostItem key={post.id} user={user!} post={post}/>
              </Link>
            )
          })
          :
          posts && users && posts.map((post) => {
            let user = users!.find((user) => user.id === post.userId);
  
            return (
              <Link to={String(post.id)}>
                <PostItem key={post.id} user={user!} post={post}/>
              </Link>
            )
          })
        }
      </ul>

      <div>
        {
          selectedUser ? 
            <button type="button" onClick={() => setPage(1)}>1</button>
            :
            pages.map((btn) => (
          <button key={btn} type="button" onClick={() => setPage(btn)}>{btn}</button>))
        }
      </div>
    </>
  )
}

export default PostList;