import { mergeDefaultProps, baseDefaultProps } from '../util/util';

describe('util', () => {
  describe('#mergeDefaultProps', () => {
    const result = mergeDefaultProps({ foo: 'foo', bar: 0 });
    it ('', () => {
      expect(result).toEqual({ wrapper: 'div', classes: undefined, styles: {}, children: undefined, foo: 'foo', bar: 0 });
      // 元の値が破壊されていないことを確認
      expect(baseDefaultProps).toEqual({ wrapper: 'div', classes: undefined, styles: {}, children: undefined });
    });
  });
});