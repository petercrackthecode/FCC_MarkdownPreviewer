import Preview from './components/Preview.js';
import Editor from './components/Editor.js';
import Header from './components/Header.js';

import React from 'react';
import './styles/App.css';

class App extends React.Component {
  state= {
    m_text: '',
  };

  handleTextChange= (text) =>  {
    this.setState({m_text: text});
  }

  render()  {
    return (
      <div id="app">
        <Header/>
        <Preview {...this.state}/>
        <Editor {...this.state} onTextChange={this.handleTextChange}/>
      </div>
    );
  }
}

export default App;
