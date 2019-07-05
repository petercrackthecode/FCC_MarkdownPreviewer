import React from 'react';
import marked from 'marked';
import DOMPurify from "dompurify";

export default function Preview(props)   {
    const colorStyle= props.m_text ? {color: "black", opacity: '1'}
                                   : {color: "hsl(219, 81.7%, 75%)", opacity: '1'};
    const backgroundColor= props.isFocus ? {backgroundColor: "white"} : {};
    const boxShadow= props.isFocus ? {boxShadow: '0px 0px 0px 2px #85C6E5'} : {};

    const finalStyle= {...colorStyle, ...backgroundColor, ...boxShadow};

    const sanitizedText= DOMPurify.sanitize(props.m_text);

    const createMarkup= () => {
        return {
            __html: marked(sanitizedText ? sanitizedText : "Your text will appear here...")
        };
    };

    return <textarea id='preview'
                className='container'
                style={finalStyle}
                dangerouslySetInnerHTML= {createMarkup()}
                readOnly/>;
}


