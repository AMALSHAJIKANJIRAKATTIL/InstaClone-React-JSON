import React from 'react';
import './postview.css'
import threedots from '../threedots.png'
import like from '../like.png'
import comment from '../comment.png'

export default function Postview(props) {
  //console.log(props.post)
  return (
  
  <div className='post-view'>
    <div className='post-header'>
        <div className='postedby'><p className='user'><b>{props.post.name}</b></p><p>{props.post.location}</p></div>
        <div className='threedots'><img src={threedots} alt='options' className='threedotslogo'></img></div>
    </div>
    <div className='postimagediv'><img className='postimage' src={props.post.PostImage}></img></div>
    
    <div className='postdetails'>
     <div className='buttons'>
     <img src={like} alt="like" className='button' />
      <img src={comment} alt="like" className='button' />
     </div>
      <div >
        <p className='postdate'>{props.post.date}</p>
      </div>
    </div>
    <div className='likecount'><p>{`${props.post.likes} likes`}</p></div>
    <div className='posttitle'>
      <h3>{props.post.description}</h3>
    </div>
  
  </div>
  
    );
}
