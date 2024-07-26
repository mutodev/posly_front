import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import ProductList from './ProductList'; // Componente que listarás

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Punto de Ventas</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default withAuthenticator(App);
