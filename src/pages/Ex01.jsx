import { faker } from "@faker-js/faker";
import DataTable from "react-data-table-component";

const Ex01 = () => {
    
    // const columns = [
    //     {
    //         name: "Nome",
    //         selector: row => row.nome
    //     },
    //     {
    //         name: "Descrição",
    //         selector: row => row.descricao
    //     },
    //     {
    //         name: "Preço",
    //         selector: row => row.preco
    //     }
    // ];

    const produtos = new Array(10).fill().map((value) => {
        let produto = new Object();

        produto.id = faker.string.uuid();
        produto.nome = faker.commerce.productName();
        produto.descricao = faker.commerce.productDescription(produto.nome);
        produto.preco = faker.commerce.price();

        return produto;
    });



    return (
        <div>
            <h1 style={{textAlign: "center"}}>Produtos</h1>
            <ul className="produtoList">
                {produtos.map((produto) => {
                    return (
                        <li key={produto.id} className="produtoListItem">
                            <h2>{produto.nome}</h2>
                            <p>{produto.descricao}</p>
                            <p>R${produto.preco}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Ex01;