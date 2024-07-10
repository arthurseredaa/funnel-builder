import {Button} from "@/components/ui/button";
import Link from "next/link";
import {auth} from "@clerk/nextjs/server";

export default function Home() {
  const {userId} = auth();

  return (
	<main className="flex min-h-screen flex-col items-center justify-between p-24">
	  <h1 className="uppercase text-center">The progressive tool that let you <br/> generate more revenue</h1>
	  <Button asChild>
		{
		  userId ? (
			<Link href="/dashboard">Dashboard</Link>
		  ) : (
			<Link href="/sign-up">Sign up</Link>
		  )
		}
	  </Button>
	</main>
  );
}
