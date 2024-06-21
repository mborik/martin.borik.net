import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Bars3Icon } from '@/components/common/icons';
import { MainMenu } from '@/components/layout/MainMenu';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className='Header'>
      <nav aria-label='Global'>
        <div className='Header__logo'>
          <Link href='/'>
            <span className='sr-only'>Martin Bórik</span>
            <Image
              src='/images/logo.png'
              alt='Martin Bórik logo'
              width={375}
              height={58}
            />
          </Link>
        </div>
        <div className='Header__rightNav'>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='ButtonSecondary px-3'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='size-6 flex-none' aria-hidden='true' />
            </button>
          </div>
          <PopoverGroup className='hidden lg:flex lg:gap-x-4'>
            <Link href='/#bio' className='ButtonOutlined uppercase'>
              Bio
            </Link>
            <Link href='/#music' className='ButtonOutlined uppercase'>
              Music
            </Link>
            <Link href='/#contact' className='ButtonOutlined uppercase'>
              Contact
            </Link>

            <Popover className='relative'>
              <PopoverButton className='ButtonSecondary'>
                <div className='anchor uppercase'>
                  Listen now
                  <Bars3Icon className='size-6 flex-none' aria-hidden='true' />
                </div>
              </PopoverButton>

              <Transition
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-2'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-2'
              >
                <PopoverPanel className='MainMenu'>
                  {({ close }) => (
                    <div className='py-2'>
                      <MainMenu onClick={() => close()} />
                    </div>
                  )}
                </PopoverPanel>
              </Transition>
            </Popover>
          </PopoverGroup>
        </div>
      </nav>
      <Dialog
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Image
              src='/images/logo.png'
              alt='Martin Bórik logo'
              width={265}
              height={41}
            />
            <button
              type='button'
              className='w-8 h-8 flex justify-center items-center text-white-600'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <span className='text-2xl' aria-hidden='true'>
                &times;
              </span>
            </button>
          </div>
          <div className='flex flex-col gap-2 mt-6 py-4'>
            <MainMenu isMobile onClick={() => setMobileMenuOpen(false)} />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
