import React from 'react';

export default class Editor extends React.PureComponent   {
    constructor(props)  {
        super(props);
    }

    handleTextChange= event => {
        const textAreaLineHeight= 24;
        const {minRows, maxRows}= this.props;

        const previousRows= event.target.rows;
        event.target.rows= minRows; // reset number of rows in text area
        const currentRows= ~~(event.target.scrollHeight / textAreaLineHeight);

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
