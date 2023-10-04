import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as ReactColor from 'react-color';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useInput, FieldTitle, InputHelperText } from 'react-admin';
import { ColorSquare } from './ColorSquare';

export const ColorPicker = props => {
    const {
        className,
        colorSquareOptions,
        disabled,
        helperText,
        label,
        margin,
        picker,
        pickerOptions,
        resource,
        source,
        variant,
        ...rest
    } = props;

    const {
        field,
        fieldState: { error, invalid, isTouched },
        formState: { isSubmitted },
        id,
        isRequired,
    } = useInput({
        resource,
        source,
        ...rest,
    });

    const [showPicker, setShowPicker] = React.useState<boolean>(false);

    const initialColor = React.useRef(field.value);

    const handleChange = ({ hex }) => {
        field.onChange(hex);
    };

    const handleCancel = () => {
        setShowPicker(false);
        field.onChange(initialColor.current);
    };

    const handleConfirm = () => {
        setShowPicker(false);
    };

    const Picker = ReactColor[`${picker}Picker`];

    return (
        <>
            <TextField
                id={id}
                {...field}
                disabled={disabled}
                className={clsx('ra-input', `ra-input-${source}`, className)}
                error={(isTouched || isSubmitted) && invalid}
                label={<FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />}
                helperText={
                    <InputHelperText
                        touched={isTouched || isSubmitted}
                        error={error?.message}
                        helperText={helperText}
                    />
                }
                InputProps={{
                    endAdornment: <ColorSquare {...colorSquareOptions} backgroundColor={field.value} />,
                }}
                onClick={() => setShowPicker(true)}
                margin={margin}
                variant={variant}
            />
            <Dialog open={showPicker}>
                <DialogContent>
                    <Picker
                        {...pickerOptions}
                        header={label}
                        color={field.value}
                        onChangeComplete={handleChange}
                        onAccept={handleConfirm}
                        onCancel={handleCancel}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};

ColorPicker.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    pickerOptions: PropTypes.object,
    colorSquareOptions: PropTypes.shape({
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    source: PropTypes.string,
    picker: (props, propName, componentName) =>
        !ReactColor[`${props[propName]}Picker`] &&
        new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`.`),
};

ColorPicker.defaultProps = {
    defaultValue: '',
    colorSquareOptions: {},
    margin: 'dense',
    picker: 'Photoshop',
    pickerOptions: {},
    variant: 'filled',
};
