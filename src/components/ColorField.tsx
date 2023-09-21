import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useRecordContext } from 'react-admin';
import get from 'lodash/get';
import { ColorSquare } from './ColorSquare';

export const ColorField = ({ source, ...props }) => {
    const { className } = props;
    const record = useRecordContext(props);

    const fieldValue = get(record, source);

    return (
        <div style={{ display: 'flex' }}>
            <ColorSquare backgroundColor={fieldValue} />
            <Typography className={className}>{fieldValue}</Typography>
        </div>
    );
};

ColorField.propTypes = {
    className: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};
