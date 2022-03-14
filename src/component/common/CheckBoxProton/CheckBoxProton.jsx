import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '&$checked': {
            color: '#000',
        },
    },
    checked: {},
    wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 0,
    },
    label: {
        fontSize: '.8rem',
        fontFamily: `'Raleway', sans-serif`,
    },
});


const CheckBoxProton = ({ cuisine, changeChecked }) => {
    const classes = useStyles()
    const { checked, label, id } = cuisine;
    return (
        <div>
            <FormControlLabel
                classes={{
                    lable: classes.label,
                    root: classes.wrap
                }}
                control={
                    <Checkbox classes={{
                        checked: classes.checked,
                        root: classes.root
                    }}
                        size="small"
                        checked={checked}
                        onChange={() => changeChecked(id)}
                    />
                }
                label={label}
            />
        </div>
    );
}

export default CheckBoxProton;
