import React from 'react';

const GoogleMap = () => {
  return (
    <div className=''>
      <iframe
        className='absolute left-0 top-0 h-full w-full'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33498.279684349!2d-81.9824931656173!3d28.052798245630555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd38b3608ca555%3A0x8aad348966996396!2zMjMxIE4gS2VudHVja3kgQXZlLCBMYWtlbGFuZCwgRkwgMzM4MDEsIOCmruCmvuCmsOCnjeCmleCmv-CmqCDgpq_gp4HgppXgp43gpqTgprDgpr7gprfgp43gpp_gp43gprA!5e0!3m2!1sbn!2sbd!4v1719920605092!5m2!1sbn!2sbd'
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
