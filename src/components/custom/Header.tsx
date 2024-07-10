import { UserButton } from '@clerk/nextjs';

const Header = () => (
  <header className="bg-primary w-screen p-4 text-primary-foreground">
    <div className="w-2/3 m-auto flex justify-between">
      <p>FUNNEL BUILDER</p>
      <UserButton />
    </div>
  </header>
);

export default Header;
