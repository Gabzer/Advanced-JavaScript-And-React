import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';
import TimelineStore from './logicas/TimelineStore';
import { createStore } from 'redux';

const timelineStore = new TimelineStore([]);

function timeline(state, action) {
  if(action.type === 'LISTAGEM') {

  }
  return state;
}

const store = createStore();

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">

          <Header />
          <Timeline login={this.props.params.login} store={timelineStore} />
          
        </div>
      </div>
    );
  }
}

export default App;
