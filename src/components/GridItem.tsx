import * as React from 'react';
import { mergeDefaultProps } from '../util/util';
import { IBaseProps } from '../types/types';

interface IProps extends IBaseProps {
  row?: string;
  column?: string;
  area?: string;
}

const GridItem: React.SFC<IProps> = (props: IProps): JSX.Element => {
  const Wrapper = props.wrapper as any;
  const styles = Object.assign({
    gridRow: props.row,
    gridColumn: props.column,
    gridArea: props.area,
  }, props.styles);

  return <Wrapper className={props.classes} style={styles}>{props.children}</Wrapper>;
}

GridItem.defaultProps = mergeDefaultProps({
  row: undefined,
  column: undefined,
  area: undefined,
});

export default GridItem;
