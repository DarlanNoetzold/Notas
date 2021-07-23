import React, { useState } from 'react'
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

import './style.css'
import './style-priority.css'
import api from '../../services/api'

function Notes({ data }){
    const [ changedNote, setChangedNote ] = useState('');

    async function handlerSave(e, notes){
      if((changedNote && changedNote != notes)){
        await api.post(`/contents/${data._id}`, {
          notes: changedNote,
        })
      }
    }

    return(
        <>
            <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
            <div>
              <strong>{ data.title }</strong>
              <div>
                <AiTwotoneDelete size="20" />
              </div>
            </div>

            <textarea 
              defaultValue={ data.notes }
              onChange={e => setChangedNote(e.target.value)}
              onBlur={e => handlerSave(e.target, data.notes)}
            />
            <span>
              <AiOutlineExclamationCircle size="20" />
            </span>
          </li>
        </>
    )
}



export default Notes;