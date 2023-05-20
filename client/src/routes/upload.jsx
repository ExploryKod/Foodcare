import { useState, useEffect } from 'react';
import '../styles/upload.css';
const Upload = () => {
  const [flashMessage, setFlashMessage] = useState('');

    const sendFile = async (e) => {
        e.preventDefault();
        const form = document.getElementById('form');
        const formData = new FormData(form);
        
        try {
          const response = await fetch('http://localhost:5000/upload_files', {
            method: 'POST',
            body: formData,
          });
          
          if (response.ok) {
            // Handle successful upload
            console.log('Upload successful!');
            setFlashMessage('Vous avez bien créer votre image');
          } else {
            // Handle upload error
            console.error('Upload failed!');
            setFlashMessage('Votre image n\'a pas été créé');
          }
        } catch (error) {
          console.error('Upload failed:', error);
          setFlashMessage('Il y a eu une erreur dans la requête');
        }
      };

    return (
      <>
        <div className="container">
            <div className="container_inner">
                <h1>Envoyez vos photos de produits</h1>
                <form id='form'>
                    <div className="input-group">
                        <label htmlFor='name'>Your name</label>
                        <input name='name' id='name' placeholder="Enter your name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor='files'>Select files</label>
                        <input name='files' id='files' type="file" multiple />
                    </div>
                    <button className="submit-btn" type='submit' onClick={sendFile}>Upload</button>
                </form>
            </div>  
            {flashMessage && <div>{flashMessage}</div>}
        </div>
      </>
    );
};

export default Upload;