import { ProdutosParaPiscina } from "./ProdutosParaPiscina";

export class Produto
extends ProdutosParaPiscina{
   private _peso: number;
   private _quantidade: number;
   constructor(nome: string, id: number, tipo: number, preco: number, peso:number, quantidade: number ){

    super(nome, id, tipo, preco)

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

    visulizar(): void {
        super.visulizar();
        console.log("peso do produto" + this._peso)
        console.log("quantidade do prosuto" + this._quantidade)


    }

    
}