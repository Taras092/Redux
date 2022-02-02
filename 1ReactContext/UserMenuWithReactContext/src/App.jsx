import React from 'react';
import Header from './Header';
import { userData, UserDataContext } from './userData-context';

class App extends React.Component {
  state = {
    userData: userData,
  };
  render() {
    return (
      <div className="page">
        <UserDataContext.Provider>
          <Header userData={this.state.userData} />
        </UserDataContext.Provider>
      </div>
    );
  }
}

export default App;
