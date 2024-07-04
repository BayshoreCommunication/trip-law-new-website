import React from 'react';

const GoogleMap = () => {
  return (
    <div className=''>
      <iframe
        className='absolute left-0 top-0 h-full w-full'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24381.215728905066!2d-81.97480412654168!3d28.051575892298057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd38b360f9f605%3A0x8f32501d1f8d7635!2s231%20N%20Kentucky%20Ave%20Ste.%20213%2C%20Lakeland%2C%20FL%2033801%2C%20USAA!5e0!3m2!1sen!2sbd!4v1719999023620!5m2!1sen!2sbd'
        width='600'
        height='450'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default GoogleMap;
