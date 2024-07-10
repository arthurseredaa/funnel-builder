import FunnelDashboardDialog from '@/components/custom/FunnelDashboardDialog';
import Header from '@/components/custom/Header';

const Page = () => {
  const createFunnel = async (funnelName: string) => {
    'use server';

    console.log(funnelName);
  };

  return (
    <div>
      <Header />
      <main className="m-auto w-2/3 pt-10">
        <FunnelDashboardDialog createFunnel={createFunnel} />
      </main>
    </div>
  );
};

export default Page;
