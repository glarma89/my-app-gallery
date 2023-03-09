import React, { useState } from 'react'
import ImageGrid from './comps/ImageGrid';
import VideoGrid from './comps/VideoGrid';
import Modal from './comps/Modal';
import VideoModal from './comps/VideoModal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import VideoPlayer from './comps/VideoPlayer';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null); 

  return (
    <div >
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <VideoGrid setSelectedVideo={setSelectedVideo} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      { selectedVideo && <VideoModal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/> }
      <VideoPlayer/>
    </div>
  );
}

export default App;
