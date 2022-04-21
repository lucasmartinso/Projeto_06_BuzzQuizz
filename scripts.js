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

    for(let i=0; i<8026; i++) {    
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

