class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }

  salvar() {
    let produto = this.lerDados();

    if (this.validaCampos(produto)) {
      this.adicionar(produto);
    }

    console.log(this.arrayProdutos);
  }

  adicionar(produto) {
    this.arrayProdutos.push(produto);
    this.id++;
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = document.getElementById("produto").value;
    produto.precoProduto = document.getElementById("preco").value;

    return produto;
  }

  validaCampos(produto) {
    let msg = "";

    if (produto.nomeProduto == "") {
      msg += "- Informe o Nome do Produto \n";
    }

    if (produto.precoProduto == "") {
      msg += "-Informe o Preço do Produto \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }

    return true;
  }

  cancelar() {
    alert("Vamos excluir um produto!");
  }
}

let produto = new Produto();
