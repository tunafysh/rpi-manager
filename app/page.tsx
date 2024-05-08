import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/darkmodetoggle";

export default function Home() {
  return (
    <main className="dark:bg-zinc-950 light:bg-white light:  flex min-h-screen flex-col items-center justify-between p-24">
      <center>
        <h1 className="font-bold text-3xl">Hello World!</h1>
        <ModeToggle />
        <br />
        <Button>Click me!</Button>
      </center>
    </main>
  );
}
