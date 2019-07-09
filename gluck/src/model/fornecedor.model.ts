export class Fornecedor{
    id: Number = 0;
    nome: string = '';
    
    constructor(id: Number, nome: string){
        this.id = id;
        this.nome = nome;
    }

    public static deserialize(obj: any): Fornecedor 
    {
        return new Fornecedor(obj.id, obj.nome);
    }
}