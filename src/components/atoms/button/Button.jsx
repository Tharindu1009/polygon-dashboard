
import './styles/button.scss';
import * as React from 'react';
import CN from "classnames";

function Button({ label, type, handleClick }) {

    const ButtonClasses = CN({
        "btn btn__default": type === "default" || "submit",
        "btn btn__dark": type === "dark",
    });

    return (
        <button data-testid="button" type={type === "submit" ? type : "button"} className={ButtonClasses}
            onClick={() => handleClick && handleClick()}> {label}
        </button>
    );
}

export default Button;

