import React, { useEffect, useState } from 'react';

const FileList = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/images_names`);
        if (response.ok) {
          const data = await response.json();
          setFileList(data.images);
        } else {
          console.error('Failed to fetch files:', response.status);
        }
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className={"file-list"}>
      <h2 className="uplist-title">Noms des fichiers dans votre espace</h2>
      <section className="table-container">
          <div id="table">
            <div className="table-row table-header">
                <div className="header-cell">Fichier</div>
                <div className="header-cell">Catégorie</div>
                <div className="header-cell">Action</div>
            </div>

            <div className="body-row">
            {fileList.filter((file, index) => index < 10).map((file, index) => (
                <>
                  <div key={index}>{file}</div>
                  <div>Légumes</div>
                  <div className="row-suppress"><a href="./" alt="">Supprimer</a></div>
                </>
                ))}
            </div>
          </div>
      </section>
    </div>
  );
};

export default FileList;
