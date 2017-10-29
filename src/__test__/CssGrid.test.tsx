import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import TestRenderer from 'react-test-renderer';
import CssGrid from '../components/CssGrid';

Enzyme.configure({ adapter: new Adapter() });

describe('CssGrid', () => {
  let wrapper;
  let dom;

  beforeEach(() => {
    wrapper = shallow(<CssGrid>Hoge Fuga</CssGrid>);
  });

  it('propsを与えない場合', () => {
    expect(wrapper.name()).toBe('div');
    expect(wrapper.text()).toBe('Hoge Fuga');
  });

  it('propsを与えた場合', () => {
    wrapper.setProps({
      wrapper: 'p',
      classes: 'hoge fuga',
      rows: '100px 100px',
      columns: '50px 50px',
      areas: `"40px 40px" "30px 30px"`,
      flow: 'auto',
      justify: 'center',
      align: 'center',
      styles: { top: 0 },
    });
    expect(wrapper.name()).toBe('p');
    expect(wrapper.first().prop('style')).toEqual({
      display: 'grid',
      gridTemplateRows: '100px 100px',
      gridTemplateColumns: '50px 50px',
      gridTemplateAreas: `"40px 40px" "30px 30px"`,
      gridAutoFlow: 'auto',
      justifyContent: 'center',
      alignContent: 'center',
      top: 0
    });
  });
});