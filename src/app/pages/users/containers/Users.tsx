import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUsers } from '../users.actions';
import { RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';

const Users = (): JSX.Element => {
  const dispatch = useDispatch();
  const { data, isLoading, hasError } = useSelector(
    (state: RootStateOrAny) => state.usersReducer
  );
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log('isLoading', isLoading);
  return (
    <div>
      {isLoading && <div data-testid="loading">Loading</div>}
      {hasError && <div data-testid="error">Error</div>}
      {data && data.length ? (
        <table data-testid="users">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link to={`/user/${item.id}`}>{item.name}</Link>
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>
                  <button>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Users;
