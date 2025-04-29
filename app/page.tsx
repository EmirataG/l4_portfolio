import Header from "@/ui/Header";
import WeeksList from "@/ui/WeeksList";
import GiftButton from "@/ui/GiftButton";

import { assignments } from "@/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('../images/bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-center">
      <div className="bg-white/80 size-fit p-6 rounded-xl flex flex-col">
        <Header />
        <section className="flex-1 place-self-center w-1/2 min-w-96 max-h-64 overflow-scroll">
          <WeeksList data={assignments} />
        </section>
      </div>
      <GiftButton />
    </div>
  );
}
