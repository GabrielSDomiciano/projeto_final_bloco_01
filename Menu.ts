import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ProdutosController } from "./src/controller/ProdutosController";
import { Cloro } from "./src/model/Cloro";



export function main() {

    let opcao, id,peso, preco, quantidade: number 
	let nome : string
	const produtoController = new ProdutosController();

    

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                Produtos para piscinas                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - lista todos os produtos                          ");
        console.log("            2 - Listar produtos pelo iD              ");
        console.log("            3 - cadastra produto              ");
        console.log("            4 - Atualizar produto             ");
        console.log("            5 - delete produto                    ");
        console.log("            6 - sair                               ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.greenstrong, 
                "\n produtos para psicina!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log( 
                    "\n\nlista todos os produtos \n\n", );
                
                keyPress()
                break;
            case 2:
                console.log(
                    "\n\nListar produtos pelo iD\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log( "\n\ncadastra produto\n\n");
                nome = readlinesync.question('Digite o Nome do Produto: ')
                id = readlinesync.questionInt("digite o id do produto")
                preco = readlinesync.questionFloat('Digite o preco: ')
                peso = readlinesync.questionInt("digite o peso")
                quantidade= readlinesync.questionInt("digite a quantidade")
                produtoController.cadastrar(new Cloro(ProdutosController. ,nome,preco,peso,quantidade)
                )

                keyPress()
                break;
            case 4:
                console.log(
                    "\n\nAtualizar produto \n\n",);

                keyPress()
                break;
            case 5:
                console.log( 
                    "\n\ndelete produto \n\n", );

                keyPress()
                break;
            case 6:
                console.log(
                    "\n\n sair   \n\n", );

                
           
                
            default:
                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Gabriel domiciano");
    console.log("Gabriel - Gabrieldomiciano2017@gmail.com");
    console.log(" ");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();