import { IntroCard } from "@/components/home/intro-card";

export default function Home() {
  return (
    <div className="w-full md:w-9/12 m-auto justify-items-center p-8 pb-20 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <IntroCard />
      </main>
    </div>
  );
}
