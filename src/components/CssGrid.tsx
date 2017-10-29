import * as React from 'react';
import { IBaseProps } from '../types/types';
import { mergeDefaultProps } from '../util/util';

interface ILayout {
  rows?: string;
  columns?: string;
  areas?: string | string[];
  reRows?: string;
  flow?: string;
  justify?: string;
  align?: string;
}

interface IProps extends ILayout, IBaseProps {
  layout?: ILayout,
}

type TStringOrUndefined = string | undefined;

interface IGridStyles {
  gridTemplateRows?: TStringOrUndefined,
  gridTemplateColumns?: TStringOrUndefined,
  gridTemplateAreas?: TStringOrUndefined,
  gridAutoFlow?: TStringOrUndefined,
  justifyContent?: TStringOrUndefined,
  alignContent?: TStringOrUndefined,
}

const styleNames = {
  rows: 'gridTemplateRows',
  columns: 'gridTemplateColumns',
  areas: 'gridTemplateAreas',
  flow: 'gridAutoFlow',
  justify: 'justifyContent',
  align: 'alignContent',
};

function getAreasValue(areas?: string | string[]): TStringOrUndefined {
  if (!areas) return;
  return Array.isArray(areas) ? areas.map(area => `"${area}"`).join(' ') : areas;
}

function getGridStyles(props: IProps): IGridStyles {
  if (props.layout) {
    const { layout } = props;
    return Object.keys(layout).reduce((acc, key) => {
      const styleName = styleNames[key];
      const value = layout[key];

      if (!styleName) return acc;

      acc[styleName] = key === 'areas' ?  getAreasValue(value) : value;
      return acc;
    }, {});
  }

  return {
    gridTemplateRows: props.rows,
    gridTemplateColumns: props.columns,
    gridTemplateAreas: getAreasValue(props.areas),
    gridAutoFlow: props.flow,
    justifyContent: props.justify,
    alignContent: props.align,
  };
}

const CssGrid: React.SFC<IProps> = (props: IProps): JSX.Element => {
  const Wrapper = props.wrapper as any; // 苦肉の策
  const areas = Array.isArray(props.areas) ? props.areas.map(area => `"${area}"`).join(' ') : props.areas;
  const mergedStyles = Object.assign({ display: 'grid' }, getGridStyles(props), props.styles);
  return <Wrapper id={props.id} className={props.classes} style={mergedStyles}>{props.children}</Wrapper>;
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
