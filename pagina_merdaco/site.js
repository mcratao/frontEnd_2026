const produtos = {
    "123": { nome: "Suco de tamarindo", preco: 10.50 },
    "456": { nome: "guarana Jesus", preco: 20.50 },
    "789": { nome: "barreado de pato-branco", preco: 1.0 },
    "147": { nome: "goiaba", preco: 1.50 },
};

let carrinho = [];

const audio = new Audio("bip.mp3");

window.onload = () => {
    document.getElementById("cod").focus();
}

function addProduto() {
    const codElemento = document.getElementById("cod");
    const qtdElemento = document.getElementById("qtd");

    const codValue = codElemento.value;
    const qtdValue = Number(qtdElemento.value);

    if (!produtos[codValue]) {
        alert("produto não cadastrado");
        return;
    }

    const produtoBase = produtos[codValue];

    const item = {
        nome: produtoBase.nome,
        preco: produtoBase.preco,
        quantidade: qtdValue,
        subtot: produtoBase.preco * qtdValue
    };

    carrinho.push(item);
    audio.currentTime = 0;
    audio.play();
    atualizatela();
};

funtion atualizatela(){
    let total =0;
    const list = cocumento.getElementById("lista");

    carrinho.forEach((item,index)=>{
        total += item.subtot;

        const li = documento.creatElement("li");
        li.classname = "list-group-item"

        li.innerHTML = `<div >${item.nome} ---- 
        ${item.quantidade} x ${item.preco} = 
        ${item.subtot}</div>`;

        list.appendchild(li);
    });
}
