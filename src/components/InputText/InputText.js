import React from 'react';
import Radium from 'radium';

function InputText(props) {
    const style = {
        border: '0',
        borderBottom: '2px dotted #66bb6a',
        fontWeight: '300',
        width: '120px',
        fontSize: '1.4rem',
        textAlign: 'right',
        marginRight: '0.2em',
        marginLeft: '0.2em',
        ':focus': { outline: 'none' }
    };

    return (<><input readonly={props.editable} value={props.value} onChange={props.changed} style={style} type='number' /></>);
}

export default Radium(InputText);