import React, { FC } from 'react';

import Flow from '@/components/custom/Flow';
import { Separator } from '@/components/ui/separator';

type Props = {
  params: {
    funnelName: string;
  };
};

const Page: FC<Props> = ({ params }) => {
  return (
    <div className="w-screen h-screen text-primary-foreground">
      <h1 className="text-center p-2 text-primary">Funnel: {params.funnelName}</h1>
      <Separator />
      <div className="h-[calc(100vh-80px)]">
        <Flow />
      </div>
    </div>
  );
};

export default Page;
