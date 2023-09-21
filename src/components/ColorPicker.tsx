import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { PhotoshopPicker } from 'react-color';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useInput, FieldTitle, InputHelperText } from 'react-admin';
import { ColorSquare } from './ColorSquare';

export const ColorPicker = props => {
    const {
        className,
        label,
        helperText,
        margin,
        onBlur,
        onChange,
        options = {},
        resource,
        source,
        variant,
        disabled,
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
        onBlur,
        onChange,
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

    return (
        <>
            <TextField
                id={id}
                {...field}
                disabled={disabled}
                className={clsx('ra-input', `ra-input-${source}`, className)}
                error={(isTouched || isSubmitted) && invalid}
                label={
                    '' !== label &&
                    false !== label && (
                        <FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />
                    )
                }
                helperText={
                    <InputHelperText
                        touched={isTouched || isSubmitted}
                        error={error?.message}
                        helperText={helperText}
                    />
                }
                InputProps={{
                    endAdornment: <ColorSquare backgroundColor={field.value} />,
                }}
                onClick={() => setShowPicker(true)}
                margin={margin}
                variant={variant}
            />
            <Dialog open={showPicker}>
                <DialogContent>
                    <PhotoshopPicker
                        {...options}
                        header="Fleet Color"
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
    label: PropTypes.string,
    options: PropTypes.object,
    source: PropTypes.string,
    className: PropTypes.string,
};

ColorPicker.defaultProps = {
    defaultValue: '',
    margin: 'dense',
    variant: 'filled',
};
