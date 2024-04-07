import React from 'react';

export default function Alert(props) {
    return (
        <div>
            <div style={{ height: '50px' }}>
                {props.alert && <div className={`alert alert-dismissible fade show`} role="alert">
                    <span className={`message-${props.alert.type}`} style={{ fontSize: '14px' }}>&#8226; {props.alert.msg}</span> 
                </div>}
            </div>
        </div>
    );
}
