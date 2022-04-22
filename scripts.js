let quiz= [];

function buscaQuizzes() { 
    let promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"); 

    promise.then(renderizaQuiz);  
    promise.catch(errou);
}  

function renderizaQuiz(response) { 
    quiz = response.data;   
    console.log(quiz);
    console.log("Deu bom");
    let lista = document.querySelector("ul.quizBuscado"); 

    lista.innerHTML = "";

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

function criaQuizz() { 
 document.querySelector(".corpo").classList.add("escondido")
 document.querySelector(".corpoTela3").classList.remove("escondido")
 document.querySelector(".tela3-parte1").classList.remove("escondido")
    alert("Vamos criar um quizz")
    //Mandar pra tela 3
}
/-------------------------------------------------------------------------------/
//Funcoes da tela 3


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
}

function abrirPerguntas(){
    document.querySelector(".pergunta-fechada").classList.add("escondido")
    document.querySelector(".formacao").classList.remove("escondido")
    alert("Abrir aba das perguntas")
} 

function criarNiveis(){
    document.querySelector(".tela3-parte2").classList.add("escondido")
    document.querySelector(".tela3-parte3").classList.remove("escondido")
    alert("Agora criar os niveis")
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
    alert("acessando quizz")
    //mandar pra tela 2

}
function voltarHome(){
    alert("voltando pra home")
    //mandar pra tela 1
    
}