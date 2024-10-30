import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BotonTesting from './BotonTesting';

describe('Componente Boton', () => {
  test('cambia el texto después de hacer clic', () => {
    const { getByText } = render(<BotonTesting />);
 
    const button = getByText('Hacer clic aquí');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    
    expect(getByText('¡Gracias por hacer clic!')).toBeInTheDocument();
  });
});