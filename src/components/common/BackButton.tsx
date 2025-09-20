import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';

interface BackButtonProps {
  children?: React.ReactNode;
  href?: string;
  section?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  children,
  href,
  section,
}) => {
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
          router.push(`${href ?? '/'}${section ? `#${section}` : ''}`)
        }
      >
        <span className='sr-only'>Naspäť</span>
        {children}
      </button>
    </motion.div>
  );
};
