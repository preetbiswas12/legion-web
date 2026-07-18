import React from 'react';

import Image from 'next/image';

import { CROWN, PAPER_CRACK } from '@/config/sponsors';

import Typography from '../Typography';

export const Sponsors = () => {
  return (
    <div
      id="sponsors"
      className="min-h-screen pb-40 pt-32 relative mt-52 overflow-x-clip"
    >
      <Image
        src={PAPER_CRACK}
        width={1920}
        height={200}
        alt="paper cuttiong"
        className="absolute -top-0 -translate-y-[90%]"
      />
      <div
        className="flex w-fit justify-center mb-32 relative mx-auto"
        id="Sponsors"
      >
        <Image
          src={CROWN}
          height={100}
          width={100}
          alt="crown"
          className="absolute -top-1 left-0 md:-left-1 3xl:-top-2 3xl:-left-2 -translate-x-[10%] -translate-y-[60%] size-[8vw] smd:size-[6vw] md:h-[5vw] md:w-[5vw]"
        />

        <Typography.H1 className=" font-normal font-wc-rough-trad text-[#f2f3f7] text-[clamp(3.5rem,5vw,6rem)]">
          REIGN
        </Typography.H1>
      </div>

      {/* Demo Video Box */}
      <div className="flex justify-center items-center px-4 md:px-8 lg:px-16">
        <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(255,255,255,0.15)] p-6 md:p-10 lg:p-12 w-full max-w-6xl min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
          <video
            src="/legion.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
