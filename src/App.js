import React from 'react';
import Login from './components/Login';
import Alert from './components/Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      isLoggedIn: false
    };
  }

handleLogin = (isLoggedIn) => {
  this.setState({ isLoggedIn, showAlert: true });
};

render() {
  return (
    <div>
      <Login onLogin={this.handleLogin} />
      {this.state.showAlert && (
        <Alert isLoggedIn={this.state.isLoggedIn} />
      )}
    </div>
    );
  }
}

export default App;