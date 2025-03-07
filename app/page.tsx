import '@/app/globals.css';
import Header from './ui/Header';
import Table from './ui/Table';
import { prisma } from '@/app/lib/db'

export default async function Home() {
  const flowers = await prisma.flower.findMany({
    include: {
      species: true
    },
    orderBy: {
      dateAdded: 'desc'
    }
  })

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <Table flowers={flowers} />
      </div>
    </div>
  );
}
