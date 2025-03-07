import '@/app/globals.css';
import Header from './ui/Header';
import Table from './ui/Table';
import { flowers } from './data/flowers';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <Table flowers={flowers} />
      </div>
    </div>
    
  );
}
