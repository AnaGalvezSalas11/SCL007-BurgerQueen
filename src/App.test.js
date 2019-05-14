import React from 'react';
import ReactDOM from 'react-dom';
import Appp from './appp';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BurgerQueen from './appp';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Appp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

//instance

it('debe retornar ana galvez', () => {  
      const burgerComponent = Enzyme.mount(<BurgerQueen />); //burgerQueen es el nombre de mi componente donde esta mi funcion
      const inputComponent = burgerComponent.find('input') //con find indico que busco un input en mi componente
      const buttonComponent = burgerComponent.find('button'); //aqui indico que busco el boton que hace click y cambia el estado donde guardo el nombre
      inputComponent.simulate('change', { target: {value: 'ana galvez'} });
      buttonComponent.filter('.click_data').simulate('click'); //'.click_data' es el nombre de la clase de mi boton
      expect(burgerComponent.state().name).toEqual('ana galvez'); //name, es el estado donde guardo el nombre
});

//que poner target: value: para enviar los datos
//filter ayuda a filtrar solo el componente que nos interesa que tiene esa clase en particular



