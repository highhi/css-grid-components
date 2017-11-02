import { IBaseProps } from '../types/types';

export const baseDefaultProps: IBaseProps = {
  wrapper: 'div',
  styles: {},
};

export function mergeDefaultProps<T extends { [key: string]: any }>(defaultProps: T = <any>{}): T & IBaseProps {
  return Object.assign({}, baseDefaultProps, defaultProps);
}