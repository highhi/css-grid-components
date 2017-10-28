import * as React from 'react';
const defaultDressProps = {
    wrapper: 'div',
    classes: null,
    styles: {},
    children: null,
};
export default function dressMarker(Parts, defaultProps) {
    const Dress = (props) => React.createElement(Parts, Object.assign({}, props));
    Dress.defaultProps = Object.assign({}, defaultDressProps, defaultProps);
    return Dress;
}
;
