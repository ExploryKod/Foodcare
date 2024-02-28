import { Routes, Route } from 'react-router-dom';
import { UploadForm }  from './uploadForm';
import { UploadCategory } from './uploadCategory'
import '../styles/shop.scss';

const Upload = () => {

  return (
      <Routes>
          <Route index element={<UploadForm/>} />
          <Route path=':category_upload' element={<UploadCategory/>} />
      </Routes>
  );
};

export default Upload;