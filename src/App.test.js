import React from 'react';
import ReactDOM from 'react-dom';
import Appp from './appp';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BurgerQueen from './appp';

Enzyme.configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Appp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


it('debe retornar ana galvez', () => {  
      const burgerComponent = Enzyme.mount(<BurgerQueen />); //burgerQueen es el nombre de mi componente constructor donde
      const inputComponent = burgerComponent.find('input');
      const buttonComponent = burgerComponent.find('button');
      inputComponent.simulate('change', { target: {value: 'ana galvez'} });
      buttonComponent.filter('.click_data').simulate('click');
      expect(burgerComponent.state().name).toEqual('ana galvez');
});