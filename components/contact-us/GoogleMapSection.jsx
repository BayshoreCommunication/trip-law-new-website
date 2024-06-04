import React from 'react';
import GoogleMap from '../shared/GoogleMap';
import CardMotion from '../motion/CardMotion';

const GoogleMapSection = () => {
  return (
    <div className='bg-white'>
      <div>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className='relative h-[600px] w-full'>
            <GoogleMap />
          </div>
        </CardMotion>
      </div>
    </div>
  );
};

export default GoogleMapSection;
