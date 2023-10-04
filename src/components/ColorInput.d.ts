import PropTypes from 'prop-types';
import { CommonInputProps } from 'react-admin';
import { TcolorSquareOptions } from './ColorField';
export type ColorInputProps = CommonInputProps & {
    className?: string;
    colorSquareOptions?: TcolorSquareOptions;
    pickerOptions?: {
        [x: string]: any;
    };
    picker?: 'Alpha' | 'Block' | 'Chrome' | 'Circle' | 'Compact' | 'Github' | 'Hue' | 'Material' | 'Photoshop' | 'Sketch' | 'Slider' | 'Swatches' | 'Twitter';
};
export declare const ColorInput: {
    (props: ColorInputProps): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        pickerOptions: PropTypes.Requireable<object>;
        colorSquareOptions: PropTypes.Requireable<PropTypes.InferProps<{
            height: PropTypes.Requireable<NonNullable<string | number>>;
            width: PropTypes.Requireable<NonNullable<string | number>>;
        }>>;
        source: PropTypes.Requireable<string>;
        picker: (props: any, propName: any, componentName: any) => Error;
    };
    defaultProps: {
        defaultValue: string;
        colorSquareOptions: {};
        margin: string;
        picker: string;
        pickerOptions: {};
        variant: string;
    };
};
