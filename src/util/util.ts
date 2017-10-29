import { IBaseProps } from '../types/types';

export const baseDefaultProps: IBaseProps = {
  wrapper: 'div',
  classes: undefined,
  styles: {},
  children: undefined,
};

export function mergeDefaultProps<T>(defaultProps: T): T & IBaseProps {
  return Object.assign({}, baseDefaultProps, defaultProps);
}