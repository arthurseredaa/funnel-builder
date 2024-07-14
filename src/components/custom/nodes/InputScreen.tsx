'use client';

import { Handle, Position } from '@xyflow/react';
import { FC } from 'react';

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type Props = {
  data: {
    label: string;
  };
};

const InputScreen: FC<Props> = ({ data }) => {
  return (
    <Card className="w-[350px] p-5 flex flex-col gap-2 min-h-[350px]">
      <CardHeader>
        <CardDescription>{data.label}</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Placeholder text" className="nodrag" />
        <Input placeholder="Button text" className="nodrag" />
      </CardContent>
      <Handle type="source" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
    </Card>
  );
};

export default InputScreen;
