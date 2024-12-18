import { ProdutosParaPiscina } from "../model/ProdutosParaPiscina";

export interface ProdutoRepository {

	// CRUD do Produto
	procurarPorId(id: number): void;
	listarTodas(): void;
	cadastrar(produto: ProdutosParaPiscina): void;
	atualizar(produto: ProdutosParaPiscina): void;
	deletar(id: number): void;
}