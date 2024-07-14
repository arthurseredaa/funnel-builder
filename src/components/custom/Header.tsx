import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

const Header = () => {
  const { userId } = auth();

  return (
    <header className="bg-primary w-screen p-4 text-primary-foreground fixed">
      <div className="w-2/3 m-auto flex justify-between">
        <Link href={userId ? '/dashboard' : '/'}>FUNNEL BUILDER</Link>
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
