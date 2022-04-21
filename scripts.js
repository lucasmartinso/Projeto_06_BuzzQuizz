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
    const lista = document.querySelector("ul.quizBuscado"); 

    lista.innerHTML = "";

    for(let i=8023; i<8026; i++) {    
        console.log("oiiii");
        lista += `
            <li>
                <img src="${quiz[i].image}"> 
                <h4>${quiz[i].title}</h4>
            </li>` 
    }
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
/*-------------------------------------------------------------------------------*/
//Funcoes da tela 3


function criarPerguntas(){
   
    document.querySelector(".tela3-parte1").classList.add("escondido")
    document.querySelector(".tela3-parte2").classList.remove("escondido")
  
    alert("Agora criar perguntas")
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
