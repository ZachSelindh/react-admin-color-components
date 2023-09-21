import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

type ColorSquareInputProps = {
    backgroundColor: string;
    width?: string | number;
    height?: string | number;
};

export const ColorSquare = styled('div', {
    shouldForwardProp: prop => 'backgroundColor' !== prop && 'width' !== prop && 'height' !== prop,
})<ColorSquareInputProps>(({ backgroundColor, width, height }) => ({
    width: width,
    height: height,
    background: backgroundColor,
    marginRight: '0.5em',
}));

ColorSquare.propTypes = {
    backgroundColor: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ColorSquare.defaultProps = {
    width: '1.5em',
    height: '1.5em',
};
