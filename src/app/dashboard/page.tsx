import {UserButton} from "@clerk/nextjs";

const Page = () => {
  return (
	<div>
	  <header className="bg-amber-100 w-screen p-4">
		<UserButton />
	  </header>
	  <main className="p-4 pt-10">
		admin
	  </main>
	</div>
  );
};

export default Page;
