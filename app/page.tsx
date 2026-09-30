import Hero from '@/components/layout/Hero';
import Categories from '@/components/layout/Categories';
import LatestArticles from '@/components/layout/LatestArticles';

export default function Home() {
  return (
    <main className="space-y-[3.2rem]">
      <Hero />
      <Categories />
      <LatestArticles />
    </main>
  );
}
