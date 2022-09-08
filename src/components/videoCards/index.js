import React from "react"
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import Card from 'react-bootstrap/Card';
import './index.css'
import LikeDislike from "../like_dislike";




function Cards(props) {
    let{name,src,time,channel,views,like,dislike}=props
    console.log(like)
    console.log(dislike)
  return (
    <>
    <Card className="m-3 " id="backcol">
    <Card.Body className="colr">
        <Card.Title>
            <h4>{name}</h4>
        </Card.Title>
        <ShakaPlayer src={src} />
        <div className="m-2">
        <Card.Text>
          <div className="row main-div">
            <div className="col-1 circle"><img src="https://yt3.ggpht.com/ytc/AMLnZu_NBXmT9J0H9uL94tZm6YxOGdMn0utqYJh1aQlv4A=s900-c-k-c0x00ffffff-no-rj" alt="hi"></img></div>
            <div className="col lol">{channel}</div>
          </div>
          <div className="row text-dark rowEle">
            <div className="col">{views} views</div>
            <div className="col">{time}</div>
          </div>
          <div class="row">
            <LikeDislike likes={like} dislikes={dislike} />
          </div>
        </Card.Text>
        </div>
    </Card.Body>
    </Card>
    </>
  );
}

export default Cards;
