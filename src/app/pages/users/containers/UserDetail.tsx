import React, { useEffect, useState } from 'react';
import { RootStateOrAny } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getDetailUser } from '../users.actions';
import { IUser } from '../users.reducers';

const UserDetail = (): JSX.Element => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<IUser>();
  const { user, isLoading, hasError } = useSelector(
    (state: RootStateOrAny) => state.usersReducer
  );

  useEffect(() => {
    setUserDetail(user);
  }, [user]);

  useEffect(() => {
    dispatch(getDetailUser(+id));
  }, []);

  return (
    <div>
      {isLoading && <div data-testid="loading">Loading</div>}
      {hasError && <div data-testid="error">Error</div>}
      {userDetail && (
        <ul data-testid="user-detail">
          <li>
            <div>Name: {userDetail.name}</div>
          </li>
          <li>Username: {userDetail.username}</li>
          <li>Email: {userDetail.email}</li>
          {/* <li>
            Address: {userDetail.address.zipcode}, {userDetail.address.suite},{' '}
            {userDetail.address.street}, {userDetail.address.city}
          </li> */}
          <li>Phone: {userDetail.phone}</li>
          <li>Website: {userDetail.website}</li>
          {/* <li>Company: {userDetail.company.name}</li> */}
        </ul>
      )}
    </div>
  );
};

export default UserDetail;
