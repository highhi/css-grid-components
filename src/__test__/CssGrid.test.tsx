import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import CssGrid from '../components/CssGrid';

Enzyme.configure({ adapter: new Adapter() });

describe('CssGrid', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CssGrid>Hoge Fuga</CssGrid>);
  });

  it('propsを与えない場合', () => {
    expect(wrapper.name()).toBe('div');
    expect(wrapper.text()).toBe('Hoge Fuga');
  });

  describe('propsを与えた場合',() => {
    it('layoutを使わない場合', () => {
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
      expect(wrapper.first().hasClass('hoge')).toBe(true);
      expect(wrapper.first().hasClass('fuga')).toBe(true);
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

    it('layoutを使う場合', () => {
      const layout = {
        columns: '100px 100px',
        rows: '80px 80px',
        areas: [
          'header header',
          'footer footer'
        ],
        flow: 'auto',
        justify: 'center',
        align: 'center',
      };

      wrapper.setProps({ layout, rows: '1000px 1000px', columns: '0px 0px' });

      expect(wrapper.first().prop('style')).toEqual({
        display: 'grid',
        gridTemplateRows: '80px 80px',
        gridTemplateColumns: '100px 100px',
        gridTemplateAreas: `"header header" "footer footer"`,
        gridAutoFlow: 'auto',
        justifyContent: 'center',
        alignContent: 'center',
      });
    });
  });
});