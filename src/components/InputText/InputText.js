import React from 'react';
import Radium from 'radium';

function InputText(props) {
    const style = {
        borderBottom: '2px dotted',
        borderColor: (props.editable === 'readonly') ? 'tomato' : '#66bb6a',
        fontWeight: '300',
        width: (props.width === undefined) ? '120px' : props.width,
        fontSize: '1.4rem',
        textAlign: 'right',
        marginRight: '0.2em',
        marginLeft: '0.2em',
        ':focus': { outline: 'none' }
    };

    return (<><input readOnly={props.editable} value={props.value} onChange={props.changed} style={style} type='number' /></>);
}

export default Radium(InputText);