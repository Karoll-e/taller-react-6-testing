import React, { useState } from 'react';

function BotonTesting() {
  const [texto, setTexto] = useState('Hacer clic aquí');

  const handleClick = () => {
    setTexto('¡Gracias por hacer clic!');
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className="p-4 bg-white rounded shadow h-36 w-72 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-4">Componente para Testing</h2>
        <button 
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {texto}
        </button>
      </div>
    </div>
  );
}

export default BotonTesting;
