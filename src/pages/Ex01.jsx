import { faker } from "@faker-js/faker";
import DataTable from "react-data-table-component";

const Ex01 = () => {
    
    const columns = [
        {
            name: "Nome",
            selector: row => row.nome
        },
        {
            name: "Descrição",
            selector: row => row.descricao
        },
        {
            name: "Preço",
            selector: row => row.preco
        }
    ];

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
            <DataTable title="Produtos" columns={columns} data={produtos} />
        </div>
    );
}

export default Ex01;