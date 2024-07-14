'use client';

import { AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
import { CirclePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC, useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FunnelDashboardDialog: FC = () => {
  const [funnelName, setFunnelName] = useState<string>('');
  const { push } = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFunnelName(e.target.value);
  };

  const handleClick = (): void => {
    push(`/funnel/${funnelName}`);
    setFunnelName('');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          Create funnel from scratch <CirclePlus className="ml-1" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Let's get started...</AlertDialogTitle>
          <AlertDialogDescription>What do you want to call your funnel?</AlertDialogDescription>
        </AlertDialogHeader>
        <Input placeholder="Business funnel" onChange={handleChange} value={funnelName} autoFocus />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FunnelDashboardDialog;
