import React from 'react';
import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';
import CategoriasProvider from './Components/Context/CategoriasContext';
import RecetasProvider from './Components/Context/RecetasContext';
import ListaRecetas from './Components/ListaRecetas/ListaRecetas';
import ModalProvider from './Components/Context/ModalContext';




function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <div className="App">
            <Header />
            <div className="container mt-5">
              <div className="row">
                <Formulario />
              </div>
              <ListaRecetas

              />
            </div>
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
