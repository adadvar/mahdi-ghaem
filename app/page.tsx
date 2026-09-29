import Hero from '@/components/layout/Hero';
import KnowledgeCards from '@/components/layout/KnowledgeCards';

export default function Home() {
  return (
    <main className="flex min-w-0 flex-col gap-[3.2rem]">
      <Hero />
      <KnowledgeCards />
    </main>
  );
}
