import * as React from 'react';
import { mergeDefaultProps } from '../util/util';
import { IBaseProps } from '../types/types';

interface IGrid {
  row?: string;
  column?: string;
  area?: string;
}

interface IProps extends IBaseProps, IGrid {}

const GridItem: React.SFC<IProps> = (props: IProps): JSX.Element => {
  const Wrapper = props.wrapper as any;
  const styles = Object.assign({
    gridRow: props.row,
    gridColumn: props.column,
    gridArea: props.area,
  }, props.styles);

  return <Wrapper className={props.classes} style={styles}>{props.children}</Wrapper>;
}

GridItem.defaultProps = mergeDefaultProps();

export default GridItem;
