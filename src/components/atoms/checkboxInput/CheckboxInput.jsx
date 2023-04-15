
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CheckboxInput({ size, label }) {
    return (
        <FormControlLabel control={<Checkbox defaultChecked size={size} />} label={label} />
    );
}

export default CheckboxInput;

