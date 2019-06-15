import React from 'react';

export default class Editor extends React.PureComponent   {
    handleTextChange= event => {
        const textAreaLineHeight= 24;
        const {minRows, maxRows}= this.props;

        const previousRows= event.target.rows;
        event.target.rows= minRows; // reset number of rows in text area
        const currentRows= ~~(event.target.scrollHeight / textAreaLineHeight);
        console.log("Hey, I'm the current row, and I'm ", currentRows);
        console.log("The current maxRows is " + maxRows);

        if (currentRows === previousRows)   {
            event.target.rows= currentRows;
        }

        if (currentRows >= maxRows) {
            event.target.rows= maxRows;
            event.target.scrollTop= event.target.scrollHeight;
        }

        const finalRows= currentRows < maxRows ? currentRows : maxRows;

        this.props.onTextChange(event.target.value, finalRows);
    }

    render() {
        return (
        <textarea id= 'editor'
            className= 'container'
            value= {this.props.m_text}
            rows={this.props.m_rows}
            placeholder={'Let\'s start writing...'}
            onChange= {this.handleTextChange}
        />
    );
        }
}
