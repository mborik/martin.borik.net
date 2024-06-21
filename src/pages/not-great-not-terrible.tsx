import * as React from 'react';

import { Seo } from '@/components/common/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />
      <section id='hero' className='pt-25 items-center'>
        <div className='relative w-full h-0 pb-youtube'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube-nocookie.com/embed/CirRHJcMHkI?si=4MGdCqfiXQ-LmxkB&amp;controls=0'
            title='Not Great Not Terrible'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='w-full h-full absolute top-0 left-0'
          ></iframe>
        </div>
      </section>
    </>
  );
}
