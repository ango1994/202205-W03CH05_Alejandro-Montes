export interface iPokemon {
    name: string;
    height: number;
    id: number;
    weight: number;
    types: Array<{
        type: { name: string };
    }>;
    abilities: Array<{
        ability: { name: string };
    }>;
}
