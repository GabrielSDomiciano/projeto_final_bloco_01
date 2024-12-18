export class ProdutosParaPiscina{
    private _nome: string;
    private _id: number;
    private _tipo: number;
    private _preco: number;

	constructor(nome: string, id: number, tipo: number, preco: number) {
		this._nome = nome;
		this._id = id;
		this._tipo = tipo;
		this._preco = preco;
	}

    

	public get nome(): string {
		return this._nome;
	}

	public get id(): number {
		return this._id;
	}

    
	public get tipo(): number {
		return this._tipo;
	}

 
	public get preco(): number {
		return this._preco;
	}

   
	public set nome(value: string) {
		this._nome = value;
	}

  
	public set id(value: number) {
		this._id = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

  
	public set preco(value: number) {
		this._preco = value;
	}
	
    visulizar(){
        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("Nome: " + this._nome);
        console.log("id: " + this._id);
        console.log("Tipo: " + this._tipo);
        console.log("Preço: R$ " + this._preco.toFixed(2));
    }

}