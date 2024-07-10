import Header from "@/components/custom/Header";

import FunnelDashboardDialog from "@/components/custom/FunnelDashboardDialog";

const Page = () => {
  const createFunnel = async (funnelName: string) => {
	'use server';

	console.log(funnelName);
  }

  return (
	<div>
	  <Header/>
	  <main className="pt-10 w-2/3 m-auto">
		<FunnelDashboardDialog createFunnel={createFunnel} />
	  </main>
	</div>
  );
};

export default Page;
