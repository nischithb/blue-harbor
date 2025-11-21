import { getSession } from "@/lib/auth";
import UserButton from "./user-button";
import SignInButton from "./signin-button";

export default async function SiteHeader() {
  getSession();

  return (
    <header className="fixed w-full top-0 shadow-md">
      <div className="h-16 md:h-20 max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Blue Harbor</h1>
        <UserButton />
        <SignInButton />
      </div>
    </header>
  );
}
