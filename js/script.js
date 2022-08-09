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

    this.listaTabela();
  }

  listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_ações = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_produto.innerText = this.arrayProdutos[i].nomeProduto;
      td_valor.innerText = this.arrayProdutos[i].precoProduto;

      td_id.classList.add("center");
    }
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
