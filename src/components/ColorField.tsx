import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useRecordContext } from 'react-admin';
import get from 'lodash/get';
import { ColorSquare } from './ColorSquare';

export type TcolorSquareOptions = { width?: string | number; height?: string | number };

export type ColorFieldProps = {
    source: string;
    className?: string;
    colorSquareOptions?: TcolorSquareOptions;
};

export const ColorField = (props: ColorFieldProps) => {
    const { source, className, colorSquareOptions } = props;
    const record = useRecordContext(props);

    const fieldValue = get(record, source);

    return (
        <div style={{ display: 'flex' }}>
            <ColorSquare {...colorSquareOptions} backgroundColor={fieldValue} />
            <Typography className={className}>{fieldValue}</Typography>
        </div>
    );
};

ColorField.propTypes = {
    className: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

ColorField.defaultProps = {
    className: '',
    source: '',
    colorSquareOptions: {},
};
