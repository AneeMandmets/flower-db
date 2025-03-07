import '@/app/globals.css';
import Header from './ui/Header';
import Table from './ui/Table';
import { prisma } from '@/app/lib/db'
import Sidebar from './ui/Sidebar';

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
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col items-center  h-screen w-5/6">
        <Table flowers={flowers} />
      </div>
    </div>
  );
}
