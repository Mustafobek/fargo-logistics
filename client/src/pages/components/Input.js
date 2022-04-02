import React from 'react';

const Input = (props) => {
    return (
        <div className={'col-sm-' + props.colWidth}>
            <div className="name fw-bold">{props.title}</div>
            <div className="value">
                <div className="input-group">
                    <input
                        className="product-qty input--style-5"
                        type={props.type}
                        required={props.required}
                    />
                </div>
            </div>
        </div>
    );
};

export default Input;