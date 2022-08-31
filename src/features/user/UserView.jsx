import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserView = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  return (
    <div>
      <h5> List of Users  </h5>
      {user.loading && <div> Loading... </div>}
      {!user.loading && !!user.error && <div> user.error </div>}
      {!user.loading && !!user.users.length > 0 ?
        <ol>
          {user.users.map(u => <li key={u.id}> {u.name} </li>)}
        </ol>
        : null}
    </div>
  )
}

export default UserView;