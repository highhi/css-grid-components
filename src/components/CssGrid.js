import * as React from 'react';
import dressMarker from '';
const CssGrid = (props) => {
    const areas = Array.isArray(props.areas) ? props.areas.map(area => `"${area}"`).join(' ') : props.areas;
    const mergedStyles = Object.assign({ display: 'grid' }, {
        gridTemplateRows: props.rows,
        gridTemplateColumns: props.columns,
        gridTemplateAreas: areas,
        gridAutoFlow: props.flow,
        justifyContent: props.justify,
        alignContent: props.align,
    }, props.styles);
    return React.createElement(props.wrapper, { className: props.classes, style: mergedStyles }, props.children);
};
export default dressMarker(CssGrid, {
    rows: '',
    columns: '',
    areas: '',
    reRows: '',
    flow: '',
    justify: '',
    align: '',
});
