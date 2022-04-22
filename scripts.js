//Funcoes da tela 1

 
function criaQuizz() {  
    alert("Vamos criar um quizz");
    document.querySelector(".tela1").classList.add("escondido");
    document.querySelector(".corpoTela3").classList.remove("escondido");
    document.querySelector(".tela3-parte1").classList.remove("escondido");
    //Mandar pra tela 3
}


/-------------------------------------------------------------------------------/

//Funcoes da tela 2
function reiniciarQuizz(){
    alert("Reiniciando quizz")
    const elemento =document.querySelector(".tela2")
    elemento.scrollIntoView()
  
}

/*-------------------------------------------------------------------------------*/
//Funcoes da tela 3


function renderizaQuiz(response) { 
    quiz = response.data;   
    console.log(quiz);
    console.log("Deu bom");
    let lista = document.querySelector("ul.quizBuscado"); 
} 

function criarPerguntas(){  
    let titulo = document.querySelector("input.title").value;   
    let numPerguntas = Number(document.querySelector("input.numPerguntas").value); 
    let numNiveis= Number(document.querySelector("input.numNiveis").value); 
    let url = document.querySelector("input.url").value; 
    let https= "";

    for(let i=0; i<8; i++) { 
        https += url[i];
    } 

    for(let i=0; i<6; i++) {   
        console.log("bom dia"); 
        lista.innerHTML += `
            <li>
                <img src="${quiz[i].image}"/> 
                <h4>${quiz[i].title}</h4>
            </li>` 
    } 

    console.log(lista);
}

function errou () { 
    console.log("ERROOOO");
} 

buscaQuizzes();
   if(titulo.length>=20 && titulo.length<=65 && numPerguntas>=3 && numNiveis>=2 && https === "https://") { 
    document.querySelector(".tela3-parte1").classList.add("escondido");
    document.querySelector(".tela3-parte2").classList.remove("escondido"); 
    alert("Agora criar perguntas"); 
   } else { 
       alert("PREENCHA NOVAMENTE!!!\n\nTitulo tem que ter de 20 a 65 caracteres\nA imagem deve ter formato de URL\nSão exigidas ao menos 3 perguntas\nTem que ter pelo menos 2 niveis");
       titulo = document.querySelector("input.title").value="";   
       numPerguntas = document.querySelector("input.numPerguntas").value=""; 
       numNiveis= document.querySelector("input.numNiveis").value=""; 
       url = document.querySelector("input.url").value=""; 
   }  

function gerarPerguntas() { 
    let numPerguntas = Number(document.querySelector("input.numPerguntas").value); 
    let lista = document.querySelector("ul.perguntitas");
} 


//Funcoes da tela 3

function abrirPerguntas(){
    document.querySelector(".pergunta-fechada").classList.add("escondido")
    document.querySelector(".formacao").classList.remove("escondido")
    alert("Abrir aba das perguntas")
} 

function criarPerguntas(){  
    let titulo = document.querySelector("input.title").value;   
    let numPerguntas = Number(document.querySelector("input.numPerguntas").value); 
    let numNiveis= Number(document.querySelector("input.numNiveis").value); 
    let url = document.querySelector("input.url").value; 
    let https= "";

    for(let i=0; i<8; i++) { 
        https += url[i];
    } 

   if(titulo.length>=20 && titulo.length<=65 && numPerguntas>=3 && numNiveis>=2 && https === "https://") { 
    document.querySelector(".tela3-parte1").classList.add("escondido");
    document.querySelector(".tela3-parte2").classList.remove("escondido"); 
    alert("Agora criar perguntas"); 
    gerarPerguntas();
   } else { 
       alert("PREENCHA NOVAMENTE!!!\n\nTitulo tem que ter de 20 a 65 caracteres\nA imagem deve ter formato de URL\nSão exigidas ao menos 3 perguntas\nTem que ter pelo menos 2 niveis");
       titulo = document.querySelector("input.title").value="";   
       numPerguntas = document.querySelector("input.numPerguntas").value=""; 
       numNiveis= document.querySelector("input.numNiveis").value=""; 
       url = document.querySelector("input.url").value=""; 
   }
}  

function gerarPerguntas() { 
    let numPerguntas = Number(document.querySelector("input.numPerguntas").value); 
    let lista = document.querySelector("ul.perguntitas"); 
    lista.innerHTML = ""; 

    for(let i=1; i<=numPerguntas; i++) { 
        lista.innerHTML += `
            <li class="bloco">
            <div class="pergunta-fechada ">
                <h2>Pergunta ${i}</h2><ion-icon onclick="abrirPerguntas(this)" class="icone" name="create-outline"></ion-icon>
            </div>
            <div class="formacao escondido">
        
                <div class="pergunta ">
                    
                    <h2>Pergunta ${i}</h2>
                    <input class="textoPergunta" type="text" placeholder="    Texto da pergunta" required>
                    <input class="corFundo" type="text"placeholder="   Cor de fundo da pergunta" required>
                    <h2>Resposta correta</h2>
                    <input class="respostaCorreta" type="text" placeholder="  Resposta correta" required>
                    <input class="urlImg" type="text"placeholder="  URL da imagem" required>
                    <h2>Respostas incorretas</h2>
                
                    <input class="respostaIncorreta1" type="text" placeholder="  Resposta incorreta 1" required>
                    <input type="text"placeholder="  URL da imagem 1" required>
                    <div class="conjunto"></div>
                    <input class="respostaIncorreta2" type="text" placeholder="  Resposta incorreta 2" required>
                    <input type="text"placeholder="  URL da imagem 2" required>
                    <div class="conjunto"></div>
                    <input class="respostaIncorreta3" type="text" placeholder="  Resposta incorreta 3" required>
                    <input type="text"placeholder="  URL da imagem 3" required>
                </div>
            </div>
        </li>`
    }

}

function abrirPerguntas(elemento){
    document.querySelector(".pergunta-fechada").classList.toggle("escondido");
    document.querySelector(".formacao").classList.toggle("escondido");
    alert("Abrir aba das perguntas");
} 

function criarNiveis(){ 
    let textoPergunta = document.querySelector(".pergunta > input.textoPergunta").value;
    let corFundo = document.querySelector(".pergunta > input.corFundo").value;
    let textoResposta1 = document.querySelector(".pergunta > input.respostaCorreta").value; 
    let textoResposta2 = document.querySelector(".pergunta > input.respostaIncorreta1").value; 
    let textoResposta3 = document.querySelector(".pergunta > input.respostaIncorreta2").value;
    let textoResposta4 = document.querySelector(".pergunta > input.respostaIncorreta3").value; 
    let url = document.querySelector(".pergunta > input.urlImg").value;  

    let cor = "";
    let corHex = "";  

    for(let i=0; i<7; i++) { 
        cor += corFundo[i].toUpperCase();
    }

    for(let i=0; i<7 && (cor[i]=== "A" || cor[i]=== "B" || cor[i]=== "C" || cor[i]=== "D" || cor[i]=== "E" || cor[i]=== "F" && cor[0]=== "#"); i++) {
        corHex += corFundo[i];
    }

    let https= "";

    for(let i=0; i<8; i++) { 
        https += url[i];
    } 

    if(textoPergunta.length>=20 && https === "https://" && textoResposta1 !== "" && textoResposta2 !== "" && textoResposta3 !== "" && textoResposta4 !== "" && corHex.length === 7) {
        document.querySelector(".tela3-parte2").classList.add("escondido");
        document.querySelector(".tela3-parte3").classList.remove("escondido");
        alert("Agora criar os niveis");
    } else { 
        alert("PREENCHA NOVAMENTE\n\nTexto da pergunta tem que ter no mínimo 20 caracteres\nCor de fundo modelo Hexadecimal\nTexto das respostas tem que estar preenchidos\nObrigatória ao menos uma resposta errada");
    }
} 

function abrirNiveis(){
    document.querySelector(".nivel-fechado").classList.add("escondido")
    document.querySelector(".niveis").classList.remove("escondido")
    alert("Abrir aba dos niveis")
} 

function finalizarQuizz(){
    document.querySelector(".tela3-parte3").classList.add("escondido")
    document.querySelector(".tela3-parte4").classList.remove("escondido")
    alert("finalizando quizz")
} 

function acessarQuizz(){
    document.querySelector(".tela3-parte4").classList.add("escondido")
    document.querySelector(".tela2").classList.remove("escondido")
    alert("acessando quizz")
    //mandar pra tela 2

}
function voltarHome(){
    alert("voltando pra home")
    document.querySelector(".tela2").classList.add("escondido");
    document.querySelector(".tela1").classList.remove("escondido");
    document.querySelector(".naoCriou").classList.add("escondido");
    document.querySelector(".criou").classList.remove("escondido");  
  
    //mandar pra tela 1
    
}
