import React from 'react';
import {AutogrowTextarea} from 'autogrow-textarea';
//import marked from 'marked';


function PreviewContainer(props)   {
    return <div id='preview'>alo {props.m_text}</div>;
}

const Preview= new AutogrowTextarea(PreviewContainer);

export default Preview;

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