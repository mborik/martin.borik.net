import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

import { ArrowLeft } from '@/components/common/icons';

export const BackButon: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const previousPathname = pathname.slice(0, pathname.lastIndexOf('/') + 1);
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
          window?.history?.length > 2
            ? router.back()
            : router.push(previousPathname)
        }
      >
        <span className='sr-only'>Go back</span>
        <ArrowLeft className='size-8 flex-none' aria-hidden='true' />
      </button>
    </motion.div>
  );
};
