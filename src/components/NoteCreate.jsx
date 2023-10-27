import React, { useState } from "react";

export default function NoteCreate({buatCatatan}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const setJudul = (e) => {
    setTitle(e.target.value.substring(0, 50))}
    
      return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa Karakter: {50 - title.length}</p>
        <input type="text" placeholder="Ketik Judul" value={title} onChange={(e) => setJudul(e)}/>
        <textarea placeholder="Ketik Catatan" cols="30" rows="10" value={body} onChange={(e) => setBody(e.target.value)}></textarea>

        <button onClick={() => {
            setTitle("");
            setBody("");
            buatCatatan(title, body)
        }}>Buat</button>
      </div>
  );
}
