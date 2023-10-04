import PropTypes from 'prop-types';
export type TcolorSquareOptions = {
    width?: string | number;
    height?: string | number;
};
export type ColorFieldProps = {
    source: string;
    className?: string;
    colorSquareOptions?: TcolorSquareOptions;
};
export declare const ColorField: {
    (props: ColorFieldProps): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<object>;
        source: PropTypes.Validator<string>;
    };
    defaultProps: {
        className: string;
        source: string;
        colorSquareOptions: {};
    };
};
