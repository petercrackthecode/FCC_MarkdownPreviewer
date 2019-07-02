import React from 'react';
import { MarkdownPreview } from 'react-marked-markdown';


export default function Preview(props)   {
    //'Your text will appear here';

    const colorStyle= props.m_text ? {color: "black", opacity: '1'}
                                   : {color: "hsl(219, 81.7%, 75%)", opacity: '1'};
    const backgroundColor= props.isFocus ? {backgroundColor: "white"} : {};
    const boxShadow= props.isFocus ? {boxShadow: '0px 0px 0px 2px #85C6E5'} : {};

    const finalStyle= {...colorStyle, ...backgroundColor, ...boxShadow};

    return <div id='preview'
                className='container' style={finalStyle}>
                {props.m_text ? 'Your text will appear here' : <MarkdownPreview value={props.m_text}/>}
            </div>;
}


