import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ProdutosController } from "./src/controller/ProdutosController";
import { Cloro } from "./src/model/Cloro";



export function main() {

    let opcao, id, peso, preco, quantidade: number
    let nome: string
    const produtoController = new ProdutosController();
    let continuar = true


    produtoController.cadastrar(new Cloro(produtoController.gerarId(), "Hth", 300.00, 10000, 10))
    produtoController.cadastrar(new Cloro(produtoController.gerarId(), "Hclor", 100.00, 100, 20))
    
    

    while (continuar) {

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
        

        switch (opcao) {
            case 1:
                console.log("\n\nlista todos os produtos \n\n",);
                    
                produtoController.listarTodas();
                    

                keyPress()
                break;
            case 2:
                console.log("\n\nprocura produto pelo iD\n\n", colors.reset);
                id = readlinesync.questionInt("Digite o id do produto: ");
                produtoController.procurarPorId(id)









                keyPress()
                break;
            case 3:
                console.log("\n\ncadastra produto\n\n");

                nome = readlinesync.question('Digite o Nome do Produto: ')

                preco = readlinesync.questionFloat('Digite o preco: ')

                peso = readlinesync.questionInt("Digite o peso: ")
                
                quantidade = readlinesync.questionInt("Digite a quantidade: 2")

                produtoController.cadastrar(new Cloro(produtoController.gerarId(), nome, preco, peso, quantidade))
                

                keyPress()
                break;
            case 4:
                console.log(
                    "\n\nAtualizar produto \n\n",);


                 id = readlinesync.questionInt("digite o id do produto")


                // Verifica se o Produto existe
                let produto = produtoController.buscarNoArray(id)

                if (produto !== null) {
                    nome = readlinesync.question('Digite o Nome do Produto: ')


                    preco = readlinesync.questionFloat('Digite o preco: ')

                    peso = readlinesync.questionInt(" digite o peso")

                    quantidade = readlinesync.questionInt('Digite a quantidade:')
                   
                    produtoController.atualizar(new Cloro(id , nome, preco, peso, quantidade))

                
                } else console.log('Produto não Encontrado!')

                keyPress()
                break

                keyPress()
                break;
            case 5:
                console.log( "\n\ndelete produto \n\n",);
                id = readlinesync.questionInt("digite o id do produto que deseja deletar: ")
                produtoController.deletar(id)
                

                keyPress()
                break;
            case 6:
                console.log(  "\n\n Saindo do Sistema   \n\n",);

                sobre();
                continuar = false;

                break;  
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