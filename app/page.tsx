import Hero from '@/components/layout/Hero';
import KnowledgeCards from '@/components/layout/KnowledgeCards';

export default function Home() {
  return (
    <>
      <main className="flex flex-col space-y-[3.2rem]">
        <Hero />
        <KnowledgeCards />
      </main>
    </>
  );
}
