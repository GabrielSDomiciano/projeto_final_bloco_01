
export abstract class ProdutosParaPiscina{
    private _nome: string;
    private _id: number;
    
    private _preco: number;

	constructor(id: number, nome: string, preco: number) {
		this._id = id;
		this._nome= nome;
		this._preco = preco;
	}

    

	public get nome(): string {
		return this._nome;
	}

	public get id(): number {
		return this._id;
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


  
	public set preco(value: number) {
		this._preco = value;
	}
	
    visualizar(){
        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("Nome: " + this._nome);
        console.log("id: " + this._id);
       
        console.log("Preço: R$ " + this._preco.toFixed(2));
    }

}