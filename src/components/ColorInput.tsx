import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as ReactColor from 'react-color';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {
    useInput,
    FieldTitle,
    useTranslateLabel,
    sanitizeInputRestProps,
    InputHelperText,
    CommonInputProps,
} from 'react-admin';
import { ColorSquare } from './ColorSquare';
import { TcolorSquareOptions } from './ColorField';

export type ColorInputProps = CommonInputProps & {
    className?: string;
    colorSquareOptions?: TcolorSquareOptions;
    pickerOptions?: { [x: string]: any };
    picker?:
        | 'Alpha'
        | 'Block'
        | 'Chrome'
        | 'Circle'
        | 'Compact'
        | 'Github'
        | 'Hue'
        | 'Material'
        | 'Photoshop'
        | 'Sketch'
        | 'Slider'
        | 'Swatches'
        | 'Twitter';
    pickerHeader?: string;
};

export const ColorInput = (props: ColorInputProps) => {
    const {
        className,
        colorSquareOptions,
        helperText,
        label,
        picker,
        pickerOptions,
        pickerHeader,
        resource,
        source,
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

    const translateLabel = useTranslateLabel();

    const translatedLabel = translateLabel({
        label,
        resource,
        source,
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
                {...sanitizeInputRestProps(rest)}
                {...field}
                id={id}
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
            />
            <Dialog open={showPicker}>
                <DialogContent>
                    <Picker
                        {...pickerOptions}
                        header={pickerHeader || translatedLabel}
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

ColorInput.propTypes = {
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
    pickerHeader: PropTypes.string,
};

ColorInput.defaultProps = {
    defaultValue: '',
    colorSquareOptions: {},
    margin: 'dense',
    picker: 'Photoshop',
    pickerOptions: {},
    pickerHeader: '',
    variant: 'filled',
};
