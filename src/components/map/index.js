import React from 'react';
import './map.css';

const Map = () => {
  return (
    <div id='map'>
      <div>
        <iframe
          className="map"
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5228.920740765038!2d3.132905187706868!3d36.668746379720325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e521f646e1edb%3A0x35c0e93b4118c15d!2sAlgiers+Province!5e0!3m2!1sen!2sdz!4v1562949559272!5m2!1sen!2sdz'
          frameBorder='0'
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Map;