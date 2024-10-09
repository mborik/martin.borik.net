import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import { ArrowLeft } from '@/components/common/icons';

interface BackButonProps {
  href?: string;
  section?: string;
}

export const BackButon: React.FC<BackButonProps> = ({ href, section }) => {
  const hrefData = {
    pathname: href ?? '/',
    ...(section && { hash: `#${section}` }),
  };
  return (
    <motion.div
      className='BackButton'
      initial='hidden'
      exit='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
      }}
    >
      <button type='button'>
        <Link href={hrefData}>
          <span className='sr-only'>Go back</span>
          <ArrowLeft className='size-8 flex-none' aria-hidden='true' />
        </Link>
      </button>
    </motion.div>
  );
};
