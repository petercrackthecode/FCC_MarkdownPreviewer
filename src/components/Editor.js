import React from 'react';

export default class Editor extends React.PureComponent   {
    handleTextChange= event => {
        const TEXTAREA_LINEHEIGHT= 24;
        const {minRows, maxRows}= this.props;

        const previousRows= event.target.rows;
        event.target.rows= minRows; // reset number of rows in textarea
        const currentRows= Math.floor(event.target.scrollHeight / TEXTAREA_LINEHEIGHT);
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

    handleFocus= event => {
        this.props.onFocusChange();
    }

    render() {
        const backgroundColor= this.props.isFocus ? {backgroundColor: "white"} : {};
        const boxShadow= this.props.isFocus ? {boxShadow: '0px 0px 0px 2px #85C6E5'} : {};

        return (
            <textarea id= 'editor'
                className= 'container'
                value= {this.props.m_text}
                rows={this.props.m_rows}
                placeholder={'Let\'s start writing...'}
                onChange= {this.handleTextChange}
                onFocus= {this.handleFocus}
                onBlur= {this.handleFocus}
                style= {{...backgroundColor, ...boxShadow}}
            />
        );
    }
}
