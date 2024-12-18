import { ProdutosParaPiscina } from "./ProdutosParaPiscina";

export class Cloro extends ProdutosParaPiscina{
   private _peso: number;
   private _quantidade: number;
   constructor(id: number,nome: string, preco: number, peso:number, quantidade: number ){

    super(id, nome,  preco)

    this._peso = peso;
    this._quantidade = quantidade;
   }


   
	public get peso(): number {
		return this._peso;
	}

	public get quantidade(): number {
		return this._quantidade;
	}

  
	public set peso(value: number) {
		this._peso = value;
	}

   
	public set quantidade(value: number) {
		this._quantidade = value;
	}

    visualizar(): void {
        super.visualizar();
        console.log("peso do produto: " + this._peso)
        console.log("quantidade do produto: " + this._quantidade)


    }

    
}