import React, { useState, useEffect } from 'react';

import api from './services/api'

import './global.css'
import './sidebar.css'
import './app.css'
import './main.css'

import Notes from './Components/Notes'

function App() {

  const [ title, setTitles ] = useState('')
  const [ notes, setNotes ] = useState('')
  const [ allNotes, setAllNotes ] = useState([])

  useEffect(() => {
    async function getAllNotes(){
      const response = await api.get('/annotations',);

      setAllNotes(response.data)
    }

    getAllNotes()
  }, [])


  async function handleSubmit(e){
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false
    })

    setTitles('')
    setNotes('')

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
              onChange={e => setTitles(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anota??o</label>
            <textarea
              required
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {allNotes.map(data => (
            <Notes data={data} />
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
