import React from 'react';
import './global.css';


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form>

          <div className="input-block">
            <label htmlFor="title">Titulo da Anota??o</label>
            <input></input>
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anota??o</label>
            <textarea></textarea>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
