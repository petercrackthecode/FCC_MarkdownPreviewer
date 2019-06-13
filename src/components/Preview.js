import React from 'react';
//import marked from 'marked';


export default function Preview(props)   {
    const displayText= props.m_text ? props.m_text : 'Your text will appear here';
    const colorStyle= props.m_text ? {color: "black", opacity: '1'} 
                                   : {color: "rgb(22, 91, 219)", opacity: '0.5'};
    return <div id='preview' 
                className='container' style={colorStyle}>{displayText}</div>;
}


/*
export default class Preview extends React.Component    {
    render()    {
        return (
            <div id='preview'>
                {this.props.m_text}
            </div>
        );
    }
}
*/