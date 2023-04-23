import React, { useEffect } from 'react';
import { RootStateOrAny } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getDetailUser } from '../users.actions';

const UserDetail = (): JSX.Element => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, isLoading, hasError } = useSelector(
    (state: RootStateOrAny) => state.usersReducer
  );

  useEffect(() => {
    dispatch(getDetailUser(+id));
  }, []);

  return (
    <div>
      {isLoading && <div data-testid="loading">Loading</div>}
      {hasError && <div data-testid="error">Error</div>}
      {user ? (
        <ul data-testid="user-detail">
          <li>Name: {user.name}</li>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>
            Address: {user.address.zipcode}, {user.address.suite},{' '}
            {user.address.street}, {user.address.city}
          </li>
          <li>Phone: {user.phone}</li>
          <li>Website: {user.website}</li>
          <li>Company: {user.company.name}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default UserDetail;
