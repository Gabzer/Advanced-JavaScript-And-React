import React, { Component } from 'react';
import Header from './componentes/Header';
import TimeLine from './componentes/TimeLine';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div classNameName="main">

          <Header />
          <TimeLine />
          
        </div> {/*fim .main*/}
      </div>
    );
  }
}

export default App;
