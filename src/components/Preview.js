import React from 'react';
import marked from 'marked';

export default function Preview(props)   {
    //'Your text will appear here';

    const colorStyle= props.m_text ? {color: "black", opacity: '1'}
                                   : {color: "hsl(219, 81.7%, 75%)", opacity: '1'};
    const backgroundColor= props.isFocus ? {backgroundColor: "white"} : {};
    const boxShadow= props.isFocus ? {boxShadow: '0px 0px 0px 2px #85C6E5'} : {};

    const finalStyle= {...colorStyle, ...backgroundColor, ...boxShadow};

    const createMarkup= () => {
        return {
            __html: marked(props.m_text)
        };
    };

    return <div id='preview'
                className='container'
                style={finalStyle}
                dangerouslySetInnerHTML= {props.m_text ? createMarkup() : {__html: 'Your text will appear here'}}/>;
}


