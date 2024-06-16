import { faker } from "@faker-js/faker";
import DataTable from "react-data-table-component";

const Ex02 = () => {
    
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

    const produtos = new Array(100).fill().map((value) => {
        let produto = new Object();

        produto.id = faker.string.uuid();
        produto.nome = faker.commerce.product();
        produto.descricao = faker.commerce.productDescription(produto.nome);
        produto.preco = faker.commerce.price();

        return produto;
    });

    const paginationComponentOptions = {
        rowsPerPageText: 10,

    }


    return (
        <div>
            <DataTable title="Produtos" 
            columns={columns} data={produtos} pagination 
            paginationComponentOptions={{noRowsPerPage: true}}
            paginationPerPage={10}
            dense
            responsive
            striped
            />
        </div>
    );
}

export default Ex02;