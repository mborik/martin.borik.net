import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';

import { ArrowLeft } from '@/components/common/icons';

export const BackButon: React.FC = () => {
  const router = useRouter();
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
      <button
        type='button'
        onClick={() =>
          window?.history?.length
            ? router.back()
            : router.push(`${router.basePath}/`)
        }
      >
        <span className='sr-only'>Go back</span>
        <ArrowLeft className='size-8 flex-none' aria-hidden='true' />
      </button>
    </motion.div>
  );
};
