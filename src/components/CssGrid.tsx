import * as React from 'react';
import { IBaseProps } from '../types/types';
import { mergeDefaultProps } from '../util/util';

interface IProps extends IBaseProps {
  rows?: string;
  columns?: string;
  areas?: string | string[];
  reRows?: string;
  flow?: string;
  justify?: string;
  align?: string;
}

const CssGrid: React.SFC<IProps> = (props: IProps): JSX.Element => {
  const Wrapper = props.wrapper as any; // 苦肉の策
  const areas = Array.isArray(props.areas) ? props.areas.map(area => `"${area}"`).join(' ') : props.areas;
  const mergedStyles = Object.assign({ display: 'grid' }, {
    gridTemplateRows: props.rows,
    gridTemplateColumns: props.columns,
    gridTemplateAreas: areas,
    gridAutoFlow: props.flow,
    justifyContent: props.justify,
    alignContent: props.align,
  }, props.styles);

  return <Wrapper style={mergedStyles}>{props.children}</Wrapper>;
};

CssGrid.defaultProps = mergeDefaultProps({
  rows: undefined,
  columns: undefined,
  areas: undefined,
  reRows: undefined,
  flow: undefined,
  justify: undefined,
  align: undefined,
});

export default CssGrid;

