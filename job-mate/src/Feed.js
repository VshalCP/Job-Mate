import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption'
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import'firebase/compat/firestore';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from "react-flip-move";

function Feed() {

  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  

  useEffect(() => {
      db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [])


  const sendPost = (e) => {
     e.preventDefault();

    db.collection('posts').add({
           name: user.displayName,
           description: user.email,
           message: input,
           url: user.photoUrl || "",
           timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };

  return (
    <div className="Feed">
          <div className="Feed_inputContainer">
            <div className="Feed_input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="Feed_inputOption">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
            </div>
          </div>


          <FlipMove>
          {posts.map(({ id, data: { name, description, message, photoUrl}}) => (
            <Post 
            key={id} //key is unique so react re-render that if we don't give that unique identity
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />
          ))}    
           </FlipMove>
    </div>
  );
}

export default Feed