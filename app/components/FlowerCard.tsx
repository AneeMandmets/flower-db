'use client'
import { Flower } from "../interfaces/flower";
import { useRouter } from 'next/navigation';

interface FlowerCardProps {
    flower: Flower;
    onClick?: (flower: Flower) => void;
}

export default function FlowerCard({ flower, onClick }: FlowerCardProps) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick(flower);
        } else {
            router.push(`/flowers/${flower.id}`);
        }
    }
    return (
        <div className="flower-card" onClick={handleClick}>
            <img src={flower.imageUrl} alt={flower.name} />
            <h3>{flower.name}</h3>
            <p>{flower.species}</p>
        </div>
    )
}