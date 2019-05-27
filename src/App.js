import Preview from 'components/Preview.js';
import Editor from 'components/Editor.js';
import Header from 'components/Header.js';

import React from 'react';
import './App.css';

class App extends React.Component {
  state= {
    m_text: 'Start creating your beautiful article by writing on the Preview Area',
  };

  handleTextChange= (text) =>  {
    this.setState({m_text: text});
  }

  render()  {
    return (
      <div className="App">
        <Header/>
        <Preview text={this.state.m_text}/>
        <Editor text={this.state.m_text} onTextChange={this.handleTextChange}/>
      </div>
    );
  }
}

export default App;
