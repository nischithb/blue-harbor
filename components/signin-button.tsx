import { getSession, signIn } from "@/lib/auth";
import { GithubLogo, GoogleLogo } from "./logos";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default async function SignInButton() {
  const session = await getSession();
  if (session) return null;

  async function loginWithGithub() {
    "use server";
    await signIn("github");
  }

  async function loginWithGoogle() {
    "use server";
    await signIn("google");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4 text-center">
        <DialogHeader>
          <DialogTitle className="text-center mb-2">
            Sign up on Blue Harbor
          </DialogTitle>
          <DialogDescription className="text-center">
            Create an account to start your journey with us.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-2">
          <Button variant="outline" type="submit" formAction={loginWithGithub}>
            <GithubLogo />
            Sign in with GitHub
          </Button>
          <Button variant="outline" type="submit" formAction={loginWithGoogle}>
            <GoogleLogo />
            Sign in with Google
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
