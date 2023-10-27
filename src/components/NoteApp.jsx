import React, { useState } from "react";
import NoteHeader from "./NoteHeades";
import NoteCreate from "./NoteCreate";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/index";

export default function NoteApp() {
    const[notes, setNotes] = useState(getInitialData());  
    const [pencarian, setPencarian] = useState('');

    const buatCatatan = (title, body) => {
      const catatanBaru = {
        id: +new Date(),
        title: title,
        body: body,
        createdAt: new Date().toString(),
        archived: false,
      };
      setNotes([...notes, catatanBaru]);
    };

    const hapusCatatan = (id) => {
      const catatanTerhapus = notes.filter((o) => o.id !== id);
      setNotes(catatanTerhapus)
    }

    const arsipCatatan = (id) => {
      console.log(id)
      const catatanTerarsip = notes.map ((o) => {
        if (o.id === id) {
          return {...o, archived: true};
        } else {
          return o;
        }
      });
      setNotes (catatanTerarsip)
    }

    const aktifkanCatatan = (id) => {
      console.log(id)
      const catatanTeraktifkan = notes.map ((o) => {
        if (o.id === id) {
          return {...o, archived: false};
        } else {
          return o;
        }
      });
      setNotes (catatanTeraktifkan)
    }

    const cariCatatan = (value) => {
      setPencarian(value);
    }

  return (
    <div>
      <NoteHeader cariCatatan={cariCatatan}/>
      <div className="note-app__body">
        <NoteCreate buatCatatan={buatCatatan} />
        <NoteList notes={notes} hapusCatatan={hapusCatatan} arsipCatatan={arsipCatatan} aktifkanCatatan={aktifkanCatatan} pencarian={pencarian}/>
      </div>
    </div>
  );
}
