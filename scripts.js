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
/*-------------------------------------------------------------------------------*/
//Funcoes da tela 3


function criarPerguntas(){
   
    document.querySelector(".tela3-parte1").classList.add("escondido")
    document.querySelector(".tela3-parte2").classList.remove("escondido")
    alert("criando perguntas")
}
function criarNiveis(){
    document.querySelector(".tela3-parte2").classList.add("escondido")
    document.querySelector(".tela3-parte3").classList.remove("escondido")
    alert("criando niveis")
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
