import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllPostsQuery, useGetUserPostsQuery } from '../../api/postsApi';
import { useGetAllUsersQuery } from '../../api/usersApi';
import classNames from 'classnames'
import PostItem from '../../components/PostItem/PostItem';
import Layout from '../../layout/Layout';
import './PostList.css'

const pages: number[] = [1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10];

function PostList() {
  const [page, setPage] = useState<number>(1)
  const [selectedUser, setSelectedUser] = useState<number>(0)
  const { data: posts, isLoading, isError } = useGetAllPostsQuery(page);

  const { data: userPosts, isLoading: userPostsLoading, isError: userPostsError } = useGetUserPostsQuery({page, selectedUser});
  const { data: users } = useGetAllUsersQuery('');

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(1)
    setSelectedUser(Number(e.target.value))
  }

  if (isError || userPostsError) {
    return (
      <p>Error please try again</p>
    )
  }

  return (
    <Layout>
      <div className="container">
        {users &&
          <div className="post-list__options">
            <p>Find user posts :</p>
            <select className="post-list__select" name="selectedUser" value={selectedUser} onChange={selectHandler}>
              <option value={0}>All</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
          </div> 
        }
        {(isLoading || userPostsLoading) && <p>Loading...</p>}
        <ul className="post-list">

          { selectedUser ?
            userPosts && users && userPosts.map((post) => {
              let user = users!.find((user) => user.id === post.userId);
    
              return (
                <Link style={{ textDecoration: 'none' }} to={String(post.id)}>
                  <PostItem key={post.id} user={user!} post={post}/>
                </Link>
              )
            })
            :
            posts && users && posts.map((post) => {
              let user = users!.find((user) => user.id === post.userId);
    
              return (
                <Link style={{ textDecoration: 'none' }} to={String(post.id)}>
                  <PostItem key={post.id} user={user!} post={post}/>
                </Link>
              )
            })
          }
        </ul>

        <div className="post-list__buttons-wrapper">
          {
            selectedUser ? 
              userPostsLoading &&
                <button
                  className="post-list__button post-list__button--active"
                  type="button"
                  onClick={() => setPage(1)}
                >
                  1
                </button>
              :
              posts && pages.map((btn, id) => (
                <button
                  className={classNames("post-list__button", {'post-list__button--active': id + 1 === page})}
                  key={btn}
                  type="button"
                  onClick={() => setPage(btn)}
                >
                  {btn}
                </button>
              ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default PostList;
