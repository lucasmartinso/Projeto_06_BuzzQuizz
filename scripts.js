let url4 = [];  



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
                    `<div id="${response.data[i].id}" class="quizz" data-identifier="quizz-card" onclick="selecionarQuizz(this)">
                    <img src="${response.data[i].image}" >
                    <h2>${response.data[i].title}</h2>
                    </div>`              
        }  
        quiz.sort(comparador)
      
        }
        function comparador(){
            return Math.random() - 0.5;
        }         

//FUNCOES PARA CLICAR E INICIAR UM QUIZZ ESPECIFICO
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
            pegarPerguntas(elemento) 
                    let selecionado =document.querySelector(".parteDeCima")
                    selecionado.innerHTML+=`            
                                    <img src="${elemento.image}">
                                    <h2>${elemento.title}</h2>                 `                                   
        }
        function pegarPerguntas(elemento) {      
          
             for(let i=0; i<elemento.questions.length;i++){                  
                let block =document.querySelector(".blocao")  
                console.log(block)
                block.innerHTML+=`   
                <div class="block ">
                        <div class="titulo-pergunta">          
                            <h3>${elemento.questions[i].title}<h3>            
                        </div>                    
                        <div class="respostas"> 
                        </div>  </div> 
                        
                      `      
                        
                                      } 
    pegarOpcao(elemento)    
           
        }    
        function pegarOpcao(elemento){
            console.log(elemento)           
            let respostas = document.querySelectorAll(".respostas")
            console.log(respostas)
            for(let i=0 ; i<respostas.length;i++){
                for(let j=0 ; j<elemento.questions[i].answers.length ; j++){
                   console.log(elemento.questions[i].answers.length )
                  respostas[i].innerHTML+=` 
                   <div class="opcao resposta${i}"   onclick="clicar(this)">
                  <img src="${elemento.questions[i].answers[j].image}" />
                  <div class="nome-opcao" ><h3>${elemento.questions[i].answers[j].text}</h3>
                  </div>  
           </div> `
                }
               
            }  
            
        }
                //fazer a mesma logica do abrir perguntas 
 //--------------------------------------------------------------//                

 function clicar(elemento){      

    elemento.classList.add("clicado"); 
    const itemSelecionado = document.querySelector(".clicado"); 
    const naoClicado = document.querySelectorAll(".opcao");    
    for(let i=0; i<naoClicado.length; i++) {
        naoClicado[i].classList.add("esbranquicado");  
        naoClicado[i].querySelector(".respostas > .opcao > .nome-opcao > h3").style.color="red";
    } 

    if(itemSelecionado !== null ) { 
        itemSelecionado.classList.remove("clicado");
    } 
    
    elemento.classList.remove("esbranquicado"); 
    elemento.querySelector(".respostas > .opcao > .nome-opcao > h3").style.color="green";   

    if(naoClicado[(naoClicado.length-1)].querySelector(".clicado") !== null) { 
        mostrarResultado();
    } 

    let promise = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes"); 

    promise.then(buscaDados);
}  

function buscaDados(response) {  
    const quizCriado = response.data; 
    console.log(quizCriado);  

}
       
              
function mostrarResultado(){
    //se todas as questoes foram marcadas
    document.querySelector(".final").classList.remove("escondido")
    document.querySelector(".botoes").classList.remove("escondido")
}
/*FUNCAO CLICAR:
-Ao clicar num elemento todos os outros devem adquirir a classe esbranquicado
-So pode haver 1 item clicado 

*/ 

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

    let capaQuizz = { 
        title: titulo,
        image: url
    };

    for(let i=0; i<8; i++) { 
        https += url[i];
    } 

   if(titulo.length>=20 && titulo.length<=65 && numPerguntas>=1 && numNiveis>=1 && https === "https://") { 
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
            <li class="bloco" onclick="abrirPerguntas(this)">
            <div class="pergunta-fechada ">
                <h2>Pergunta ${i}</h2><ion-icon  class="icone" name="create-outline"></ion-icon>
            </div>
            <div class="formacao escondido">
        
                <div class="pergunta ">
                    
                    <input class="textoPergunta" type="text" placeholder="    Texto da pergunta" required>
                    <input class="corFundo" type="text"placeholder="   Cor de fundo da pergunta" required>
                    <h2>Resposta correta</h2>
                    <input class="respostaCorreta" type="text" placeholder="  Resposta correta" required>
                    <input class="urlImg1" type="text"placeholder="  URL da imagem" required>
                    <h2>Respostas incorretas</h2>
                
                    <input class="respostaIncorreta1" type="text" placeholder="  Resposta incorreta 1" required>
                    <input class="urlImg2" type="text"placeholder="  URL da imagem 1" required>
                    <div class="conjunto"></div>
                    <input class="respostaIncorreta2" type="text" placeholder="  Resposta incorreta 2" required>
                    <input class="urlImg3" type="text"placeholder="  URL da imagem 2" required>
                    <div class="conjunto"></div>
                    <input class="respostaIncorreta3" type="text" placeholder="  Resposta incorreta 3" required>
                    <input class="urlImg4" type="text"placeholder="  URL da imagem 3" required>
                </div>
            </div>
        </li>`
    }

} 

function abrirPerguntas(elemento){ 
    const itemSelecionado = document.querySelector(".selecionado"); 

    if(itemSelecionado !== null) {  
        itemSelecionado.classList.remove("selecionado"); 
        itemSelecionado.querySelector(".formacao").classList.add("escondido");
    }
    
    elemento.classList.add("selecionado");  
    elemento.querySelector(".formacao").classList.remove("escondido");  
}   


function criarNiveis(){  
    let numPerguntas = Number(document.querySelector("input.numPerguntas").value); 
    let textoPergunta = document.querySelectorAll(".pergunta > input.textoPergunta");
    let corFundo = document.querySelectorAll(".pergunta > input.corFundo");
    let textoResposta1 = document.querySelectorAll(".pergunta > input.respostaCorreta"); 
    let textoResposta2 = document.querySelectorAll(".pergunta > input.respostaIncorreta1"); 
    let textoResposta3 = document.querySelectorAll(".pergunta > input.respostaIncorreta2");
    let textoResposta4 = document.querySelectorAll(".pergunta > input.respostaIncorreta3"); 
    let url1 = document.querySelectorAll(".pergunta > input.urlImg1");  
    let url2 = document.querySelectorAll(".pergunta > input.urlImg2");   
    let url3 = document.querySelectorAll(".pergunta > input.urlImg3");   
    let url4 = document.querySelectorAll(".pergunta > input.urlImg4");      

    let https1= []; 
    let https2= []; 
    let https3= []; 
    let https4= [];   

    for(let i=0; i<numPerguntas; i++) {    
        https1[i]= url1[i].value.substring(0,8);
    }   

    for(let i=0; i<numPerguntas; i++) { 
        https2[i] = url2[i].value.substring(0,8);
    }  

    for(let i=0; i<numPerguntas; i++) { 
        https3[i] = url3[i].value.substring(0,8);
    }  

    for(let i=0; i<numPerguntas; i++) { 
        https4[i] = url4[i].value.substring(0,8);
    }    

    corHex= []; 
    cor= []; 

    for(let i=0; i<numPerguntas; i++) { 
        cor[i]= corFundo[i].value.substring(0,7).toUpperCase(); 
        for(let j=0; j<7 && (cor[i][j] === "A" || cor[i][j] === "B" || cor[i][j] === "C" || cor[i][j] === "D" || cor[i][j] === "E" || cor[i][j] === "F" || cor[i][0] === "#"); j++) { 
            if(j<7) {
                corHex[i] = cor[i][j];
            } else {
                break; 
            }
        }
    } 
    
    console.log(corHex[0]);

    for(let i=0; i<numPerguntas; i++) { 
        if(textoPergunta[i].value.length>=20 && https1[i] === "https://" && https2[i] === "https://" && https3[i] === "https://" && https4[i] === "https://" && textoResposta1 !== "" && textoResposta2 !== "" && textoResposta3 !== "" && textoResposta4 !== "" && cor[i][0]=== "#" && corHex[i] !== undefined)  {
            if(i === numPerguntas-1) {
                document.querySelector(".tela3-parte2").classList.add("escondido");
                document.querySelector(".tela3-parte3").classList.remove("escondido");
                alert("Agora criar os niveis"); 
                gerarNiveis(); 
            }
        } else { 
            alert("PREENCHA NOVAMENTE\n\nTexto da pergunta tem que ter no mínimo 20 caracteres\nCor de fundo modelo Hexadecimal\nTexto das respostas tem que estar preenchidos\nObrigatória ao menos uma resposta errada"); 
            break;
        } 
    }
} 

function gerarNiveis(){
    let numNiveis= Number(document.querySelector("input.numNiveis").value); 
    let lista = document.querySelector("ul.nivelzada"); 
    lista.innerHTML = ""; 

    for(let i=1; i<=numNiveis; i++) { 
        lista.innerHTML += `
        <li class="bloco" onclick="edicaoNiveis(this)">
            <div class="nivel-fechado  ">
                <h2>Nivel ${i}</h2><ion-icon class="icone" name="create-outline"></ion-icon>
            </div>
            <div class="niveis escondido">
                <h2>Nivel ${i}</h2>
                <input class="tituloNivel" type="text" placeholder="    Titulo do nivel" required>
                <input class="porcentagem" type="text"placeholder="   % de acerto minima" required>
                <input class="urlNivel" type="text" placeholder="    URL da imagem do nivel" required>
                <input class="descricao" type="text"placeholder="   Descricao do nivel" required>

            </div> 
        </li>`
    }
}  

function edicaoNiveis(elemento) {  
    const itemSelecionado = document.querySelector(".selecionado"); 

    if(itemSelecionado !== null) {  
        itemSelecionado.classList.remove("selecionado"); 
        itemSelecionado.querySelector(".niveis").classList.add("escondido");  
        itemSelecionado.querySelector(".nivel-fechado").classList.remove("escondido"); 
    }
    
    elemento.classList.add("selecionado");  
    elemento.querySelector(".niveis").classList.remove("escondido"); 
    elemento.querySelector(".nivel-fechado").classList.add("escondido");  
}

function finalizarQuizz(){   
    let numNiveis= Number(document.querySelector("input.numNiveis").value);
    let titulo = document.querySelectorAll(".niveis > input.tituloNivel");  
    let porcentagem = document.querySelectorAll(".niveis > input.porcentagem"); 
    let url = document.querySelectorAll(".niveis > input.urlNivel") ;
    let descricao = document.querySelectorAll(".niveis > input.descricao") ;  

    https = [];

    for(let i=0; i<numNiveis; i++) { 
        https[i] = url[i].value.substring(0,8);
    }   

    console.log(porcentagem[0].value); 
    console.log(descricao[0].value.length);

    for(let i=0; i<numNiveis; i++) {
        if(titulo[i].value.length>=10 && (porcentagem[i].value>=0 && porcentagem[i].value<=100 && porcentagem[0].value==0) && https[i]==="https://" && descricao[i].value.length>=30) { 
            if(i === numNiveis-1) {
                document.querySelector(".tela3-parte3").classList.add("escondido")
                document.querySelector(".tela3-parte4").classList.remove("escondido") 
                alert("finalizando quizz") 
                renderizaSucessoQuizz(); 
            }
        } else { 
            alert("PREENCHA NOVAMENTE!!!\n\nTitulo tem que ter pelo menos 10 caracteres\nPorcentagem tem que ser de 0% a 100%\nImagem em formato url\nDescricao com pelo menos 30 caracteres\nPorcentagem do primeiro nivel tem que ser 0"); 
            break;
        } 
    }
} 

function renderizaSucessoQuizz() { 
    let titulo = document.querySelector("input.title").value;   
    let url = document.querySelector("input.url").value;   
    console.log(url); 
    console.log(titulo);
    document.querySelector(".imagem-quizz").innerHTML = `
        <img src="${url}"/> 
        <h2>${titulo}</h2>
        `; 
}

function acessarQuizz(){
    document.querySelector(".tela3-parte4").classList.add("escondido");
    document.querySelector(".tela2").classList.remove("escondido"); 

    alert("acessando quizz")
    //mandar pra tela 2

}
function voltarHome(){
    alert("voltando pra home")
    document.querySelector(".tela2").classList.add("escondido");
    document.querySelector(".tela1").classList.remove("escondido");
    document.querySelector(".naoCriou").classList.add("escondido");
    document.querySelector(".criou").classList.remove("escondido");  
    document.querySelector(".tela3-parte4").classList.add("escondido");   

    let titulo = document.querySelector("input.title").value;   
    let url = document.querySelector("input.url").value;
    const lista = document.querySelector(".criou > .quizzes"); 
    lista.innerHTML = `
        <img src="${url}" onclick="selecionarQuizz(this)"/> 
        <h2>${titulo}</h2>
        `;
}
    //mandar pra tela 1
