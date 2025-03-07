'use client'
import { Alumni_Sans } from "next/font/google";
import { Flower } from '../interfaces/flower';

const font = Alumni_Sans({
    weight: ['400', '700'],
    variable: '--font-alumni-sans',
    subsets: ['latin'],
});

export default function Table({ flowers }: { flowers: Flower[] }) {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <table>
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Liik</th>
                        <th>Kirjeldus</th>
                        <th>Pilt</th>
                        <th>Lisamiskuupäev</th>
                    </tr>
                </thead>
                <tbody>
                    {flowers.map((flower) => (
                        <tr key={flower.id}>
                            <td>{flower.name}</td>
                            <td>{flower.species}</td>
                            <td>{flower.description}</td>
                            <td>{flower.imageUrl}</td>
                            <td>{flower.dateAdded.toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}