import Cards from '../videoCards'
import React from 'react';
import './index.css'
import { Container, Row, Col} from 'react-bootstrap'
import Typewriter from "typewriter-effect";


const STREAMS = [
    {
      name: 'Angel One',
      src: 'https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd',
      channel:'The Lonely star',
      views:34,
      time:'1 hour ago',
      like:123,
      dislike:23,
    },
    {
      name: 'Big Buck Bunny',
      src:
        'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8',
        channel:'wildAni',
      views:3900,
      time:'1 day ago',
      like:1356,
      dislike:3,
    }
    ,{
      name:'The Beauty',
      src:'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
      channel:'The People',
      views:9900,
      time:'1 min ago',
      like:123,
      dislike:23,
    },
    {
        name:'Valkaama',
        src:'http://ftp.itec.aau.at/datasets/DASHDataset2014/Valkaama/15sec/valkaama_45732bps/Valkaama_15nonSeg.mp4',
        channel:'starBoard',
      views:34900,
      time:'1 months ago',
      like:123,
      dislike:23,
    },
    {
      name:'Nature',
      src:'http://ftp.itec.aau.at/datasets/DASHDataset2014/OfForestAndMen/15sec/forest_279592bps/OfForestAndMen_15snonSeg.mp4',
      channel:'The Nature',
      views:34900,
      time:'5 months ago',
      like:123,
      dislike:23,
  },
  {
    name:'The comedian',
    src:'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8',
    channel:'The Lonely star',
      views:3,
      time:'1 secs ago',
      like:123,
      dislike:23,
}
  ];

const Layout=()=>{

    return(
        <>
        {/* rendering cards in a grid container */}
        <Container className='my-3 grid'>
          <div className='m-4 p-3'>
        <div className="App">
      <Typewriter
       onInit={(typewriter)=> {
       typewriter
       .typeString("Let's Binge with...")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Video Player")
       .start();
       }}
       />
    </div>
            {/* <Animated first="" last=""/> */}
          </div>
            <Row>
            {STREAMS.map(stream => (
              <Col xs={6} md={4} className="m-auto">
                <Cards  name={stream.name} src={stream.src} channel={stream.channel} views={stream.views} time={stream.time} like={stream.like} dislike={stream.dislike}/>
              </Col>
        ))}
            </Row>
        </Container>
        </>
    )
}

export default Layout