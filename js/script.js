class Produto {
  constructor() {
    this.id = 1;
    this.arryaProdutos = [];
  }

  salvar() {
    let produto = this.lerDados();

    console.log(produto);
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = document.getElementById("produto").value;
    produto.precoProduto = document.getElementById("preco").value;

    return produto;
  }

  excluir() {
    alert("Vamos excluir um produto!");
  }
}

let produto = new Produto();
