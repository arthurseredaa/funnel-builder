import { FC } from 'react';

type Props = {
  params: {
    funnelName: string;
  };
};

const Page: FC<Props> = ({ params }) => {
  console.log(params);

  return <div>{params.funnelName}</div>;
};

export default Page;
