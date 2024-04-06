import { Categoria } from "./categoria.model";

export class Supermercado {
    id!: string;
    name!: string;
    orden_categorias!: Categoria[];
}