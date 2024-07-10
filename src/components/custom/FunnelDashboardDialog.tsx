'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import {AlertDialogTrigger} from "@radix-ui/react-alert-dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ChangeEvent, FC, useState} from "react";

type Props = {
  createFunnel: (funnelName: string) => void;
}

const FunnelDashboardDialog: FC<Props> = ({ createFunnel }) => {
  const [funnelName, setFunnelName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
	setFunnelName(e.target.value);
  }

  const handleClick = (): void => {
	createFunnel(funnelName);
	setFunnelName("");
  }

  return (
	<AlertDialog>
	  <AlertDialogTrigger asChild>
		<Button>Create funnel from scratch</Button>
	  </AlertDialogTrigger>
	  <AlertDialogContent>
		<AlertDialogHeader>
		  <AlertDialogTitle>Let's get started...</AlertDialogTitle>
		  <AlertDialogDescription>
			What do you want to call your funnel?
		  </AlertDialogDescription>
		</AlertDialogHeader>
		<Input placeholder="Business funnel" onChange={handleChange} value={funnelName}/>
		<AlertDialogFooter>
		  <AlertDialogCancel>Cancel</AlertDialogCancel>
		  <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
		</AlertDialogFooter>
	  </AlertDialogContent>
	</AlertDialog>
  );
};

export default FunnelDashboardDialog;
