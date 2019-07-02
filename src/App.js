import Preview from './components/Preview.js';
import Editor from './components/Editor.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import React from 'react';
import './styles/App.css';

class App extends React.Component {
  state= {
    m_text: '', // input
    m_rows: 5, // current number of rows
    minRows: 5,
    maxRows: 7,
    isFocus: false
  };

  handleTextChange= (text, rows) =>  {
    this.setState({
      m_text: text,
      m_rows: rows,
    });
  }

  handleFocus= () => {
    this.setState((currentState) => ({
      isFocus: !currentState.isFocus
    }));
  }

  render()  {
    return (
      <div id="app">
        <Header/>
        <div id='content'>
          <Editor {...this.state} onTextChange= {this.handleTextChange} onFocusChange= {this.handleFocus}/>
          <Preview {...this.state}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
