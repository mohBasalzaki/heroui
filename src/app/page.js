import Autocomplete from "./components/Autocomplete";
import Card from "./components/Cards";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen pb-4">
      <main className="flex flex-col gap-4 items-center max-w-[1024px] row-start-2 sm:items-start w-full px-6">
        <Autocomplete />
        <Card />
      </main>
    </div>
  );
}
