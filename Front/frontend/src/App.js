import React from 'react';
import './global.css';
import './sidebar.css';
import './app.css';
import './main.css';


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
        <ul>
          <li className="notepad-info">
            <div>
              <strong>Fazer compras</strong>
              <div>
                x
              </div>
            </div>

            <textarea>sdasd ifhuas od ghfsdof fgh aods hgop?ashgp udeshgpu dhfg</textarea>
            <span>!</span>
          </li>

          <li className="notepad-info">
            <div>
              <strong>Fazer compras</strong>
              <div>
                x
              </div>
            </div>

            <textarea>sdasd ifhuas od ghfsdof fgh aods hgop?ashgp udeshgpu dhfg</textarea>
            <span>!</span>
          </li>

          <li className="notepad-info">
            <div>
              <strong>Fazer compras</strong>
              <div>
                x
              </div>
            </div>

            <textarea>sdasd ifhuas od ghfsdof fgh aods hgop?ashgp udeshgpu dhfg</textarea>
            <span>!</span>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
