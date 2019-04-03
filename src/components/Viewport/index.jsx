import React from 'react';
import './index.scss';
// Images
import playForward from '../../assets/icons/play-forward.svg';
import playBackward from '../../assets/icons/play-backward.svg';
import fastForward from '../../assets/icons/fast-forward.svg';
import fastRewind from '../../assets/icons/fast-rewind.svg';
import end from '../../assets/icons/end.svg';
import start from '../../assets/icons/start.svg';
import code from '../../assets/icons/code.svg';

const Viewport = () => (
  <div className="viewport">
    <div className="viewport__bottom">
      <div className="viewport__bottom__playback">
        <div className="viewport__bottom__playback-controls">
          <div className="viewport__bottom__playback-controls__left">
            <img src={start} alt="start" className="start" />
            <img src={fastRewind} alt="fastRewind" className="fast-rewind" />
            <img src={playBackward} alt="playBackward" className="play-backward" />
          </div>
          <div className="viewport__bottom__playback-controls__divider" />
          <div className="viewport__bottom__playback-controls__right">
            <img src={playForward} alt="playForward" className="play-forward" />
            <img src={fastForward} alt="fastForward" className="fast-forward" />
            <img src={end} alt="end" className="end" />
          </div>
        </div>
      </div>
      <div className="viewport__bottom__code-button">
        <img src={code} alt="code" />
      </div>
    </div>
  </div>
);

export default Viewport;
