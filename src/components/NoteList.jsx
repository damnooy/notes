import React from "react";
import { showFormattedDate } from "../utils";

export default function NoteList({notes, hapusCatatan, arsipCatatan, aktifkanCatatan, pencarian}) {
  return (
    <div>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.filter((o) => o.archived === false && o.title.toLowerCase().includes(pencarian.toLowerCase())).length > 0 ? (
          <>
            {notes.filter((o) => o.archived === false && o.title.toLowerCase().includes(pencarian.toLowerCase())).map((note) => (
            <div className="note-item" key={note.id}>
              <div className="note-item__content">
                <div className="note-item__title">{note.title}</div>
                <div className="note-item__date">{showFormattedDate(note.createdAt)}</div>
                <div className="note-item__body">{note.body}</div>
              </div>
              <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => hapusCatatan(note.id)}>Hapus</button>
                <button className="note-item__archive-button" onClick={() => arsipCatatan(note.id)}>Arsipkan</button>
              </div>
            </div>
            ))}
          </>
        ) : (
          <div className="notes-list__empty-message">
            Tidak ada catatan
          </div>
        )}
      </div>
      <h2>Catatan Arsip</h2>
      <div className="notes-list">
        {notes.filter((o) => o.archived === true && o.title.toLowerCase().includes(pencarian.toLowerCase())).length > 0 ? (
          <>
        {notes.filter((o) => o.archived === true && o.title.toLowerCase().includes(pencarian.toLowerCase())).map((note) => (
        <div className="note-item" key={note.id}>
          <div className="note-item__content">
            <div className="note-item__title">{note.title}</div>
            <div className="note-item__date">{showFormattedDate(note.createdAt)}</div>
            <div className="note-item__body">{note.body}</div>
          </div>
          <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => hapusCatatan(note.id)}>Hapus</button>
            <button className="note-item__archive-button" onClick={() => aktifkanCatatan(note.id)}>Aktifkan</button>
          </div>
        </div>
        ))}
          </>
        ) : (
          <div className="notes-list__empty-message">
            Tidak ada catatan
          </div>
        )}
      </div>
    </div>
  );
}
