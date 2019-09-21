import React from 'react';
import Option from './Option/Option'

export default function SelectOptions(props) {
    const style = {
        border: '1px solid #66bb6a',
        borderRadius: '0',
        backgroundColor: 'white',
        minWidth: '80px',
        height: '1.5em',
        fontSize: '1.4rem',
        textAlign: 'right',
        padding: '0 0.5rem',
        margin: '10px',
        ':focus': { outline: 'none' }
    }


    return (<>
        <select style={style} onChange={props.changed}>
            <Option value="false">não possui</Option>
            <Option value="true">possui</Option>
        </select>
    </>);
}