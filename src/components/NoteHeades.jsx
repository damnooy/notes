import React from 'react';

export default function NoteHeader({cariCatatan}) {
    return (
        <div className='note-app__header'>
             <h1>Catatan</h1>
            <input type="text" placeholder='Cari Catatan...' onChange={(e) => cariCatatan(e.target.value)} />
        </div>
    );
}