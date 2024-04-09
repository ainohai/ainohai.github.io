import * as React from 'react';
import backgroundImage from '../../assets/whiteAndMessVaaka.png';

export function BackgroundImage() {
  return (
    <div className="backgroundImage">
      {
        <img
          src={backgroundImage}
          />
      }
    </div>
  );
}
