'use client';

import { useState } from 'react';

import { Clipboard, ClipboardCheck } from 'lucide-react';

import Button from '@/components/ui/button';

import Typography from '../Typography';

export default function CopyInstallButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('npm install -g @legioncli/cli');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = 'npm install -g @legioncli/cli';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div
      className={`relative z-40 flex flex-col mt-10 xs:mt-5 justify-center w-full scale-90 items-center`}
    >
      <Button
        className={
          'h-14 lg:h-20 xlg:h-14 !p-0 min-w-[450px] max-w-[550px] lg:!w-[550px] my-auto flex flex-row items-center justify-center gap-3 whitespace-nowrap'
        }
        onClick={handleCopy}
      >
        <Typography.P className="text-white !text-[1.10rem] md:!text-xl lg:!text-2xl font-semibold text-center mb-0 font-mono">
          {copied ? 'Copied!' : 'npm install -g @legioncli/cli'}
        </Typography.P>
        {copied ? (
          <ClipboardCheck className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        ) : (
          <Clipboard className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        )}
      </Button>
    </div>
  );
}
