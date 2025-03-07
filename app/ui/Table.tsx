'use client'
import { Alumni_Sans } from "next/font/google";
import { Flower } from '../interfaces/flower'

const font = Alumni_Sans({
    weight: ['400', '700'],
    variable: '--font-alumni-sans',
    subsets: ['latin'],
});

interface TableProps {
    flowers: Flower[]
}

export default function Table({ flowers }: TableProps) {
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('et-EE', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return (
        <div className="w-full max-w-4xl">
            <table className="min-w-full divide-y divide-black-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Nimi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Liik</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Pilt</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Kirjeldus</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Lisamiskuupäev</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {flowers.map((flower) => (
                        <tr key={flower.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{flower.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{flower.species.name}</td>
                            <td className="px-6 py-4">
                                <img 
                                    src={flower.imageUrl} 
                                    alt={flower.name}
                                    className="h-20 w-20 object-cover rounded"
                                />
                            </td>
                            <td className="px-6 py-4">{flower.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {formatDate(flower.dateAdded)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {flowers.length === 0 && (
                <p className="text-center py-4 text-gray-500">Lilli ei leitud</p>
            )}
        </div>
    )
}