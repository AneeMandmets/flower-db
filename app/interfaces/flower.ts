export interface Flower {
    id: number;
    name: string;
    speciesId: number;
    species: Species;
    description: string;
    imageUrl: string;
    dateAdded: Date;
}

export interface Species {
    id: number;
    name: string;
}