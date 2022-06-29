import MuxPlayer from '@mux-elements/mux-player-react';
import React, {useState, useRef} from 'react';

const MuxPlayerMuxData = (props) => {
  return (
    <div style={{width: '800px', height: '400px'}}>
      <MuxPlayer
        ref={props.reference}
        style={{ height: '100%', maxWidth: '100%' }}
        playbackId={props.playbackid}
        debug={true}
        metadata={{
          video_id: 'video-id-123456',
          video_title: 'Super Interesting Video',
          viewer_user_id: 'user-id-bc-789',
          video_cdn: 'Tims Test CDN',
          custom_1: 'My Custom Dimension Value'
        }}
        envKey={props.env}
        streamType="on-demand"
        muted
      />
    </div>
  );
};

function App() {

  const [envkey, setEnvkey] = useState("vnig1g40erhkldvhfc6s26u1q");
  const [playbackid, setPlaybackid] = useState("4Lzvfer7GuDh5bEm5tnAsqO01wAtLQBO6HWamkt01Q5g8");

  const muxvideoref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(muxvideoref.current);
    muxvideoref.current.play();
  }

  return (
    <>    

    <div style={{margin: '50px auto', width: '100%', textAlign: 'center'}}>
      <h1>Test Player</h1>
      <form onSubmit={handleSubmit}>        
      <label style={{margin: '10px'}}>
          Envkey:
          <input type="text" style={{marginLeft: '5px'}} onInput={e => setEnvkey(e.target.value)}/>        
      </label>
      <label style={{margin: '10px'}}>
          Playbackid:
          <input type="text" style={{marginLeft: '5px'}} onInput={e => setPlaybackid(e.target.value)} />        
      </label>   
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div className="App" style={{margin: '0 auto', width: '800px'}}>
        <MuxPlayerMuxData reference={muxvideoref} env={envkey} playbackid={playbackid} />
        <h4>Current EnvKey: {envkey}</h4>
        <h4>Current PlaybackID: {playbackid}</h4>
    </div>


    </>
  );
}

export default App;
