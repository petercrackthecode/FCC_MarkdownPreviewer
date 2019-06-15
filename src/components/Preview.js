import React from 'react';
//import marked from 'marked';


export default function Preview(props)   {
    const displayText= props.m_text ? props.m_text : 'Your text will appear here';
    const colorStyle= props.m_text ? {color: "black", opacity: '1'} 
                                   : {color: "hsl(219, 81.7%, 75%)", opacity: '1'};
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