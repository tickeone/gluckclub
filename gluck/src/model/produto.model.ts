export class Produto{
    id: Number = 0;
    idFornecedor: Number = 0;
    nome: string = '';
    descricao: string = '';
    imagem: string = '';
    
    constructor(id: Number, idFornecedor: Number, nome: string, descricao: string, imagem: string){
        this.id = id;
        this.idFornecedor = idFornecedor;
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    public static deserialize(obj: any): Produto 
    {
        return new Produto(obj.id, obj.idFornecedor, obj.nome, obj.descricao, obj.imagem);
    }
}