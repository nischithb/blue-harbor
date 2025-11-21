import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { getSession, signOut } from "@/lib/auth";

export default async function UserButton() {
  const session = await getSession();
  if (!session) return null;

  const fallback =
    session.user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("") || "U";

  async function logout() {
    "use server";
    await signOut();
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer size-10">
            <AvatarImage
              src={session.user?.image || undefined}
              alt={session.user?.name || "User Avatar"}
            />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href="">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="">My Products</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Logout</DialogTitle>
          <DialogDescription>
            Are you sure you want to logout?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <form action={logout}>
            <Button type="submit">Continue</Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
