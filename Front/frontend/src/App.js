import React from 'react';
import './global.css'
import './sidebar.css'
import './app.css'
import './main.css'

import Notes from './Components/Notes'

function App() {
  const [ title, setTitles] = useState('')
  const [ notes, setNotes] = useState('')

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="title">Titulo da Anota??o</label>
            <input
              required
              value={title}
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anota??o</label>
            <textarea
              required
              value={notes}
            />
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <Notes />
        </ul>
      </main>
    </div>
  );
}

export default App;
