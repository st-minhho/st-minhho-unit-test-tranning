import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUsers, removeUser } from '../users.actions';
import { RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';

const Users = (): JSX.Element => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const { data, isLoading, hasError } = useSelector(
    (state: RootStateOrAny) => state.usersReducer
  );

  useEffect(() => {
    setUsers(data);
  }, [data]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const deleteUser = (id: number) => {
    setUsers(users?.filter((user) => user.id !== id));
    dispatch(removeUser(id));
  };

  return (
    <div id="list-user">
      {isLoading && <div data-testid="loading">Loading</div>}
      {hasError && <div data-testid="error">Error</div>}
      {users && users.length ? (
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
            {users.map((item) => (
              <tr data-testid={`user-item-${item.id}`} key={item.id}>
                <td>
                  <Link
                    data-testid={`detail-user-${item.id}`}
                    to={`/user/${item.id}`}
                  >
                    {item.name}
                  </Link>
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>
                  <button
                    data-testid={`del-user-${item.id}`}
                    onClick={() => deleteUser(item.id)}
                  >
                    DELETE
                  </button>
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
