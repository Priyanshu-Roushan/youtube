// rfce

import React, { useEffect, useState } from 'react'
import Header from './Header'
import {LiaThumbsDown, LiaThumbsUp, LiaDownloadSolid} from 'react-icons/lia'
import {PiShareFatLight} from 'react-icons/pi'
import {IoMdThumbsUp} from 'react-icons/io'
import allVideos from './useful-data-main/videos.json'

import tmkoc from './images/tmkoc.jpg'
import avtar from './images/avtar.png'
import { Link } from 'react-router-dom'

function VideoInfo(props){
  const video = props.video;
  // localStorage.removeItem(`like_${video.id}`)
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem(`like_${video.id}`)) ? 
    JSON.parse(localStorage.getItem(`like_${video.id}`)) : []
  );

  const [likesCount, setCount] = useState(
    JSON.parse(localStorage.getItem(`like_${video.id}`)) ? 
    JSON.parse(localStorage.getItem(`like_${video.id}`)).length : 0
  )

  const handleLike = () => {
    let newLikes = likes;
    console.log(newLikes)
    console.log(localStorage)
    if(newLikes.includes(localStorage.getItem('email'))){
      newLikes.pop(localStorage.getItem('email'));
    }else{
      newLikes.push(localStorage.getItem('email'));
    }
    
    localStorage.setItem(`like_${video.id}`, JSON.stringify(newLikes))
    setLikes(newLikes);
    setCount(newLikes.length)
  }

  useEffect(() => {
    console.log("useeffect called")
    setLikes(
      JSON.parse(localStorage.getItem(`like_${video.id}`)) ? 
      JSON.parse(localStorage.getItem(`like_${video.id}`)) : []
    );

    setCount(
      JSON.parse(localStorage.getItem(`like_${video.id}`)) ? 
      JSON.parse(localStorage.getItem(`like_${video.id}`)).length : 0
    )

  }, [props.video])

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()

    alert("Copied to clipboard : " + text)
  }

  console.log(likes)
  return (<>
    <h5 class="video-title">
      {/* Kalank Title Track - Lyrical | Alia Bhatt , Varun Dhawan | Arijit Singh | Pritam| Amitabh */}
      {video.title}
    </h5>
    <div class="video-details">
      <div class="channel-info">
        <img src={avtar} height={'30px'} width={'30px'}/>
        <div className='channel-name'>
          <h6 className='margin-0'>{video.channelName}</h6>
          <p className='margin-0'>102M subscribers</p>
        </div>
        <button className='subscribe'>Subscribe</button>
      </div>
      <div class="video-action-buttons">
        <button onClick={() => handleLike()}>
          { likes.includes(localStorage.getItem('email')) ? 
            <IoMdThumbsUp size={'1.4rem'} />
          :
            <LiaThumbsUp size={'1.4rem'} />
          }
          
          {likes.length} &nbsp;| <LiaThumbsDown size={'1.4rem'} />
        </button>
        <button onClick={() => copyToClipboard(window.location.href)}
          title='Copy Link'>
          <PiShareFatLight size={'1.4rem'}/> Share
        </button>
        <button >
          <a class="download-button" 
            href={`https://www.ssyoutube.com/watch?v=${video.id}`} target='_blank'>
          <LiaDownloadSolid size={'1.4rem'}/>
            Download
          </a>
        </button>
      </div>
    </div>
    <div class="video-desc">
      <p>{video.views} views &nbsp; {video.uploadedAt} ago</p>
      <p>Here is the compilation video for all the random suggestions Shukla Ji gave from 
                  the film Chhalaang. Watch this video for non stop laughter and let us know in 
                  the comments which suggestion did you relate with the most.
                  </p>
    </div>
  </>)
}

function SuggestedVideos(props){
  let video = props.video;
  return (
    <>
      <div className='suggested-video'>
        <div className='suggestion-image'>
          <Link to={`/video?id=${video.id}`} onClick={() => {
            props.setVideoId(video.id)
            props.setVideo(video)
            }}>
            <img class="sugg-img" width={'240px'} src={video.thumbnail.url} title={video.title}/>
          </Link>
        </div>
        <div className='suggestion-content'>
          <div className='video-info'>
            <p class="track-title margin-0 video-info-title">
              {video.title}
            </p>
            <p class="margin-0 smaller-fontsize">{video.channelName}</p>
            <p class="margin-0 smaller-fontsize">{video.views} views . {video.uploadedAt} ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Video() {
  // let videos = [1, 2, 3, 4, 5, 6, 7, 8]
  const [currVideoId, setCurrentVideoId] = useState("");
  const [currVideo, setCurrVideo] = useState({});

  let videos = allVideos;

  useEffect(() => {
      // Create a new URL object
    let address = new URL(window.location);

    // Get searchParameters property of the URL object
    let queryParameters = address.searchParams;

    // Retrieve specific query parameters
    let currentVideoId = queryParameters.get("id");

    for(let i = 0; i < videos.length; i++){
      if(videos[i].id == currentVideoId){
        setCurrVideo(videos[i]);
        break;
      }
    }

    setCurrentVideoId(currentVideoId);
  }, [])

  return (
    <div>
      {/* <p>Video comp</p>
      <h4>Time Left : {seconds}</h4> */}
      <Header />
      <div className='video-main-page'>
        <div className='video-frame'>
          <iframe className='iframe-video' src={`https://www.youtube.com/embed/${currVideoId}?si=wzrbZX_JVDirQuKX?rel=0&mute=1&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <VideoInfo video={currVideo} />
        </div>
        <div className='suggestions'>
          <p> Suggested Videos</p>
          {videos.map((video) => {
            return (<SuggestedVideos video={video} 
              setVideoId={setCurrentVideoId} 
              setVideo = {setCurrVideo}/>);
          })}
        </div>
      </div>
    </div>
  )
}

export default Video

