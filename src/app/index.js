import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Example from 'app/example';
import store from 'app/store';

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Example/>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
