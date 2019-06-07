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
    maxRows: 20,
  };

  handleTextChange= (text, rows) =>  {
    this.setState({
      m_text: text,
      m_rows: rows,
    });
  }

  render()  {
    return (
      <div id="app">
        <Header/>
        <div id='content'>
          <Editor {...this.state} onTextChange={this.handleTextChange}/>
          <Preview {...this.state}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
