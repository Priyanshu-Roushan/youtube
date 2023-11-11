
import kalank from './images/kalank.jpg'
import avtar from './images/avtar.png'
import tseries from './images/tseries.png'
import bbkivines from './images/bb.jpg'
import carry from './images/carry.png'
import {GoHomeFill} from 'react-icons/go'
import {BsFire} from 'react-icons/bs'
import {MdOutlineSubscriptions, MdOutlineWatchLater} from 'react-icons/md'
import {BiSolidVideos, BiHistory} from 'react-icons/bi'

import Header from './Header'
import { Link } from 'react-router-dom';

import videosJson from './useful-data-main/videos.json'


function VideoGrid(props){
    let myVideo = props.myVideo;
    return (
        <div class="thumbnail">
            <div class="video">
            {/* <a href='/video'><img src={kalank} /></a> */}
            <Link to={`/video?id=${myVideo.id}`}><img class="thumbnail-home" src={myVideo.thumbnail.url} /></Link>
            </div>
            <div class="video-title">
                <div>
                        <img src={avtar} height={'30px'} width={'30px'}></img>
                    
                </div>
                <div class="video-info">
                    <h4 class="track-title margin-0">
                        {/* Kalank Title Track - Lyrical | Alia Bhatt */}
                        {myVideo.title}
                    </h4>
                    <p class="margin-0 smaller-fontsize">
                        {/* T-Series */}
                        {myVideo.channelName}
                    </p>
                    <p class="margin-0 smaller-fontsize">
                        {myVideo.views} views . {myVideo.uploadedAt} ago</p>
                </div>
            </div>
        </div>
    );
}

function Home(){
    // let videos = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12]

    return (
        <div>
            <Header />
            <div class="main-section">
                <div class="main-left">
                    <button class="yt-side-button">
                        <GoHomeFill /> <span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button">
                        <BsFire /> <span class="side-button-label">Trending</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineSubscriptions /> <span class="side-button-label">Subscriptions</span>
                    </button>
                    <hr />
                    <button class="yt-side-button">
                        <BiSolidVideos /> <span class="side-button-label">Shorts</span>
                    </button>
                    <button class="yt-side-button">
                        <BiHistory /> <span class="side-button-label">History</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineWatchLater /> <span class="side-button-label">Watch Later</span>
                    </button>
                    <hr />
                    <h6 class="fav">Favourites &gt; </h6>
                    <button class="yt-side-button">
                        <img src={carry} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Carry Minati</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={bbkivines} height={'30px'} width={'30px'}></img>

                        <span class="side-channel-label">BB ki Vines</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={tseries} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">T-Series</span>
                    </button>
                </div>
                <div class="main-right independent-scroll">
                    {videosJson.map((video) => {
                        return <VideoGrid myVideo={video}/>
                    })}
                </div>
            </div>

            {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" ></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav> */}
            {/* <h3>Home</h3> */}
            {/* <table className="tablename">
                <tr id="myid">
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table> */}
        </div>
    )
}

export default Home;