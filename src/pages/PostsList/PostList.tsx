import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { TailSpin } from 'react-loader-spinner';
import { useGetAllPostsQuery } from '../../api/postsApi';
import { useGetAllUsersQuery } from '../../api/usersApi';
import { PostItem } from '../../components/PostItem/PostItem';
import { Layout } from '../../layout/Layout';

import './PostList.css';
import '../../styles/loader.css';

function PostList() {
  const [page, setPage] = useState<number>(1);
  const [selectedUser, setSelectedUser] = useState<number>(0);
  const { data: posts, isLoading, isError } = useGetAllPostsQuery({ page, selectedUser });

  const pages: number[] = [];

  let pagesCount;

  if (posts) {
    pagesCount = Math.floor(posts.totalCount / 10);
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data: users } = useGetAllUsersQuery('');

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.scroll(0, 0);
    setPage(1);
    setSelectedUser(Number(e.target.value));
  };

  if (isError) {
    return (
      <p>Error please try again</p>
    );
  }

  return (
    <Layout>
      <div className="container">
        {users
          && (
            <div className="post-list__options">
              <p>Find user posts :</p>
              <select className="post-list__select" name="selectedUser" value={selectedUser} onChange={selectHandler}>
                <option value={0}>All</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
            </div>
          )}

        {(isLoading)
          && (
            <div className="loader__wrapper">
              <TailSpin color="#5D71DD" height={60} width={60} />
            </div>
          )}

        <ul className="post-list">
          {
            posts && users && posts.apiResponse.map((post) => {
              const user = users!.find((person) => person.id === post.userId);

              return (
                <Link key={post.id} style={{ textDecoration: 'none' }} to={String(post.id)}>
                  <PostItem user={user!} post={post} />
                </Link>
              );
            })
          }
        </ul>

        <div className="post-list__buttons-wrapper">
          {
            posts && pages.map((btn, id) => (
              <button
                className={classNames('post-list__button', { 'post-list__button--active': id + 1 === page })}
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
  );
}

export default PostList;
