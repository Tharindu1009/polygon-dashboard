
import './styles/textBox.scss';
import * as React from 'react';
import CN from "classnames";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';

function TextBox({ id, size, type, icon, placeholder, onChange, error, helperText }) {

    const TextBoxClasses = CN({
        "textBox textBox__search": type === "search",
    });

    return (
        <div className='textBox'>
            <TextField
                data-testid="textBox"
                fullWidth
                className={TextBoxClasses}
                id={id}
                type={type}
                size={size}
                placeholder={placeholder}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {icon === "user" && <PersonOutlineIcon data-testid="userIcon" />}
                            {icon === "lock" && <LockIcon data-testid="lockIcon" />}
                            {icon === "search" && <SearchIcon data-testid="searchIcon" />}
                        </InputAdornment>
                    ),
                }}
                onKeyUp={(e) => onChange(e)}
                error={error}
                helperText={helperText}
            />
        </div>
    );
}

export default TextBox;

