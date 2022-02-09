import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Pagination from './Pagination.jsx';
import * as counterActions from '../counter/counter.actions';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const itemPerpage = 3;
  const startIndex = (currentPage - 1) * itemPerpage;
  const endIndex = startIndex + itemPerpage;
  const userToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        goNext={goNext}
        goPrev={goPrev}
        itemPerpage={itemPerpage}
        totalItems={users.length}
      />
      <ul className="users">
        {userToRender.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
});

const mapDispatch = {
  goNext: counterActions.goNext,
  goPrev: counterActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
