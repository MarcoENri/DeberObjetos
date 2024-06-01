import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <p>Elige una opción:</p>
      <nav>
        <ul>
          <li>
            <Link to="/employees">Empleados</Link>
          </li>
          <li>
            <Link to="/clients">Clientes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
