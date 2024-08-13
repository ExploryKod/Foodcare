import { useContext, useState, useEffect, Fragment } from 'react';
import { removeAccent } from '../utils/dataValidation/stringValidation.utils';
import { useParams } from 'react-router-dom';
import { CategoriesUploadContext } from '../context/upload.context';


export const UploadCategory = () => {
    let { category_upload } = useParams();
    const { categoriesUploadData } = useContext(CategoriesUploadContext);
    const [uploads, setUploads] = useState(categoriesUploadData);
    const noUploadsMessage = <p className="category-text">Aucun fichier trouvé.</p>;

    useEffect( () => {
        setUploads(categoriesUploadData);
    }, [category_upload, categoriesUploadData])

    category_upload = removeAccent(category_upload);

    return(
        <Fragment>
        <h2 className='category-title'>{category_upload.toUpperCase()}</h2>
            <div className='category-container upload-category'>
                {!uploads || !uploads.length ? (
                    noUploadsMessage
                ) : (
                    uploads.filter((upload) => upload.category === category_upload.toLowerCase()).map((upload) => (
                        <ul>
                            <li>{upload}</li>
                        </ul>
                    ))
                )}
            </div>
        </Fragment>
    )
}