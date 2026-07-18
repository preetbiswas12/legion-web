import Image from 'next/image';

import { Typography } from '@/components';
import { HERO_IMAGES } from '@/config/marginals';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full flex flex-col justify-end mt-24 md:mt-32 lg:mt-48 xl:mt-64"
    >
      {/* Main Logo Section */}
      <div className="w-full flex items-center justify-center relative">
        <div className="relative flex items-center justify-center">
          {/* Desktop Logo Layout */}
          <div className="hidden lg:flex items-center gap-6 relative">
            <Typography.Display className="text-center font-sketch-block font-normal text-primary text-[16vw] xl:text-[14vw] 2xl:text-[12vw] leading-none">
              Legion
            </Typography.Display>
            <Typography.Display className="text-center font-grutch-shaded font-normal text-[16vw] xl:text-[14vw] 2xl:text-[12vw] leading-none">
              CLI
            </Typography.Display>
          </div>

          {/* Mobile Logo Layout */}
          <div className="flex lg:hidden flex-col items-center relative mt-8">
            <Typography.Display className="text-center font-sketch-block font-normal text-primary text-[28vw] sm:text-[24vw] md:text-[20vw] leading-none">
              Legion
            </Typography.Display>
            <Typography.Display className="text-center font-grutch-shaded font-normal text-[28vw] sm:text-[24vw] md:text-[20vw] leading-none -mt-2">
              CLI
            </Typography.Display>
          </div>

          {/* Desktop Logo Overlay */}
          <Image
            src={HERO_IMAGES.overlay.desktop}
            alt="Legion CLI Logo Overlay"
            width={600}
            height={600}
            className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 w-[32vw] xl:w-[28vw] 2xl:w-[24vw] pointer-events-none"
          />

          {/* Mobile Logo Image */}
          <Image
            src={HERO_IMAGES.main.desktop}
            alt="Legion CLI Logo"
            width={500}
            height={500}
            className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[50vw] sm:w-[44vw] md:w-[40vw] pointer-events-none"
          />
        </div>
      </div>
    </footer>
  );
}
