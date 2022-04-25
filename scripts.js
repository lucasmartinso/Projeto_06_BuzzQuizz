
let quiz=[]
let questions =[]
let answers=[]

//Funcoes da tela 1
function criaQuizz() {  
    alert("Vamos criar um quizz");
    document.querySelector(".tela1").classList.add("escondido");
    document.querySelector(".corpoTela3").classList.remove("escondido");
    document.querySelector(".tela3-parte1").classList.remove("escondido");
    //Mandar pra tela 3
}
function carregarQuizz(){
   let promise = axios.get('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes')
  
    promise.then(carregarSucesso)
    promise.catch(carregarErro)
}
        function carregarSucesso(response)
        {  
         let quiz= response.data;
          let lista =document.querySelector(".quizzes.prontos");
          lista.innerHTML="";
          
                for(let i=0;i<6;i++){
                    lista.innerHTML+=
                    `<div id="${response.data[i].id}" class="quizz" onclick="selecionarQuizz(this)">
                    <img src="${response.data[i].image}" >
                    <h2>${response.data[i].title}</h2>
                    </div>`              
        }  
        quiz.sort(comparador)
      
        }
        function comparador(){
            return Math.random() - 0.5;
        }         

function selecionarQuizz(elemento){
  console.log(elemento)
  let id =elemento.id
  console.log(id)
  let promise= axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${id}`)
  promise.then(selecionarSucesso )
  promise.catch(selecionarErro)
    
    
} 

        function selecionarSucesso(response){   
            
            let elemento= response.data  
           
            renderizarCima (elemento)   
            document.querySelector(".tela1").classList.add("escondido")
            document.querySelector(".tela2").classList.remove("escondido")

        }
         function renderizarCima(elemento){ 
                    pegarRespostas(elemento)
                    let selecionado =document.querySelector(".parteDeCima")
                    selecionado.innerHTML="";               
                    selecionado.innerHTML+=`            
                             
                                    <img src="${elemento.image}">
                                    <h2>${elemento.title}</h2>               
                                                   
                         
                            `                                   
        }
 function pegarRespostas(elemento) {
                    
                     let block =document.querySelector(".blocao")
                     
                     for(let i=0; i<elemento.questions.length;i++){  
                        block.innerHTML+=` 
                        <div class="block">
                            <div class="titulo-pergunta">          
                                <h3>${elemento.questions[i].title}<h3>            
                            </div>
                            <div class="respostas"> 
                        
                            </div>                           
                       </div>    
                            `                    
                    let respostas=document.querySelector(".respostas")
                    for(let j= 0 ; j<elemento.questions[i].answers.length;j++){
                        respostas.innerHTML+=`  
                        <div class="opcao">
                        <img src="${elemento.questions[i].answers[j].image}" />
                        <div class="nome-opcao">${elemento.questions[i].answers[j].text}
                        </div>     
                    `                                                    
                    } 
                  
                    console.log(block)  
                }
               
                }               
              

                
function selecionarErro(){
    console.log("deu ruim")
}
function carregarErro(){
    alert("deu ruim")
}

 function criaQuizz() {  
            alert("Vamos criar um quizz");
            document.querySelector(".tela1").classList.add("escondido");
            document.querySelector(".corpoTela3").classList.remove("escondido");
            document.querySelector(".tela3-parte1").classList.remove("escondido");
            //Mandar pra tela 3
}
//Funcoes da tela 2
function reiniciarQuizz(){
    alert("Reiniciando quizz")
    const elemento =document.querySelector(".tela2")
    elemento.scrollIntoView()
  
} 


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
            <div class="formacao">
        
                <div class="pergunta ">
                    
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
    console.log(elemento); 
    const itemSelecionado = document.querySelector(".selecionado"); 

    if(itemSelecionado !== null) {  
        itemSelecionado.classList.remove("selecionado");
    }
    
    elemento.classList.add("selecionado");
    elemento.classList.remove("escondido");  

    if(itemSelecionado) { 

    }

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

    for(let i=0; i<corFundo.length; i++) { 
        cor += corFundo[i].toUpperCase();
    } 

    console.log(cor); 

    for(let i=0; i<1 && cor[0]=== "#"; i++) { 
        console.log("OLAAAAAAAA"); 
        corHex = cor[0];
        for(let j=1; j<7 && (cor[j]=== "A" || cor[j]=== "B" || cor[j]=== "C" || cor[j]=== "D" || cor[j]=== "E" || cor[j]=== "F"); j++) {
            corHex += cor[j]; 
        }
    } 

    console.log(corHex);

    let https= "";

    for(let i=0; i<8; i++) { 
        https += url[i];
    } 

    if(textoPergunta.length>=20 && https === "https://" && textoResposta1 !== "" && textoResposta2 !== "" && textoResposta3 !== "" && textoResposta4 !== "" && corHex.length === 7) {
        document.querySelector(".tela3-parte2").classList.add("escondido");
        document.querySelector(".tela3-parte3").classList.remove("escondido");
        alert("Agora criar os niveis"); 
        gerarNiveis();
    } else { 
        alert("PREENCHA NOVAMENTE\n\nTexto da pergunta tem que ter no mínimo 20 caracteres\nCor de fundo modelo Hexadecimal\nTexto das respostas tem que estar preenchidos\nObrigatória ao menos uma resposta errada");
    }
} 

function gerarNiveis(){
    let numNiveis= Number(document.querySelector("input.numNiveis").value); 
    let lista = document.querySelector("ul.niveis"); 
    lista.innerHTML = ""; 

    for(let i=1; i<=numNiveis; i++) { 
        lista.innerHTML += `
        <li class="bloco">
            <div class="nivel-fechado  ">
                <h2>Nivel ${i}</h2><ion-icon onclick="edicaoNiveis()" class="icone" name="create-outline"></ion-icon>
            </div>
            <div class="niveis escondido">
                <h2>Nivel ${i}</h2>
                <input type="text" placeholder="    Titulo do nivel" required>
                <input type="text"placeholder="   % de acerto minima" required>
                <input type="text" placeholder="    URL da imagem do nivel" required>
                <input type="text"placeholder="   Descricao do nivel" required>

            </div> 
        <li class="bloco">`
    }
}  

function edicaoNiveis() { 
    document.querySelector(".nivel-fechado").classList.add("escondido");
    document.querySelector(".niveis").classList.remove("escondido");
    alert("Abrir aba dos niveis");
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
}
    //mandar pra tela 1
