import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import { useFirebaseStorage } from 'react-firebase-hooks/storage';
import ReactPlayer from 'react-player';

const firebaseConfig = {
    apiKey: "AIzaSyAJODQi4aHBrjPr56x3HQ5wCg5sca_JbKY",
    authDomain: "ninja-firegram-3f348.firebaseapp.com",
    projectId: "ninja-firegram-3f348",
    storageBucket: "ninja-firegram-3f348.appspot.com",
    messagingSenderId: "880878962145",
    appId: "1:880878962145:web:3ac0b24d2ada9530fa7ea0"
};

firebase.initializeApp(firebaseConfig);

const VideoPlayer = () => {
  const storageRef = firebase.storage().ref('videos/example.mp4');
  const [url, loading, error] = useFirebaseStorage(storageRef);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ReactPlayer url={url} controls={true} width="100%" height="100%" />
  );
};

export default VideoPlayer;
