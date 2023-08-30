'use client'
import React, { useEffect, useState } from 'react';
import MySpinner from './Spinner';

const DynamicContent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simular una carga asincrona
    setTimeout(() => {
      setData('Contenido cargado exitosamente!');
    }, 2000);
  }, []);

  return (
    <div>
      {data ? (
        <h1>{data}</h1>
      ) : (
       <MySpinner />
      )}
    </div>
  );
};

export default DynamicContent;
