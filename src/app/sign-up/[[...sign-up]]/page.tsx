import { SignUp } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp signInUrl="/sign-in" signInFallbackRedirectUrl="/dashboard" />
    </div>
  );
};

export default Page;
