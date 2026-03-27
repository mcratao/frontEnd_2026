window.onload = function() {

    const imagens = {
        normal: "b_n.png",
        feliz: "b_a.png",
        bravo: "bravo.png",
        morto: "b_d.png",
        clicado: "b_c.png"
    };

    let img = document.getElementById("b");

    let contador = 0;
    let timeoutClique;

    setInterval(() => {

        contador++;

        if (contador >= 15) {
            img.src = imagens.morto;
        }
        else if (contador >= 10) {
            img.src = imagens.bravo;
        }
        else {
            img.src = imagens.normal;
        }

    }, 1000);

    window.alimentar = function() {

        img.src = imagens.clicado;
        contador = 0;

        if (timeoutClique) clearTimeout(timeoutClique);

        timeoutClique = setTimeout(() => {

            img.src = imagens.feliz;

            setTimeout(() => {
                img.src = imagens.normal;
            }, 2000);

        }, 1000);
    }

};
