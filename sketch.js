/* 
filmes para codar:

== infantil ==

como treinar seu dragao, livre
meu malvado favorito 4, 10 anos
avatar, 12 anos

== acao ==
homem de ferro, 12 anos
ate o ultimo homem, 16 anos
hardcore henry, 14 anos
cidade de deus, 16 anos

== humor ==
to ryca, 12 anos
todo mundo em panico 2, 12 anos
minha mae e uma peca, 12 anos
as branquelas, 12 anos

== terror ==

jogos mortais, 18 anos
anabelle, 14 anos
panico, 14 anos  
*/
let bg;
var imagens = []
var arquivos = [
  "dragao.jpg","malvado.jpg","avatar.jpg","hardcore.jpg","cidade.jpg","ferro.jpg","ulthomem.jpg","ryca.jpg","panico.jpg","mae.jpg","branquelas.jpg","jogosmortais.jpg","ana.jpg","panicoreal.jpg"
]
var nomeFilmes = ["Como treinar seu dragao", "Meu malvado favorito 4", "Avatar", "Hardcore Henry", "Cidade de Deus", "Homem de Ferro", "Ate o ultimo homem", "Eu to ryca", "Todo mundo em panico 2", "Minha mae e uma peca", "As branquelas", "Jogos mortais", "Anabelle", "Panico"]
var imagemAtual;

function preload(){
 arquivos.forEach((arquivo, index) => {
  imagens[index] = loadImage("./assets/"+arquivo, ()=>
  console.log(`Imagem ${arquivo} carregou`), ()=> 
  console.log(`Imagem ${arquivo} nao carregou`))
 })

}

function setup() {
  bg = loadImage("./assets/particle.gif")
  createCanvas(windowWidth,windowHeight)
  
  text1 = createSpan("Digite sua idade")
  text1.position(windowWidth/2-50,0)
  text1.style("color", "red")
  var IdadeInp = createInput("17")
  IdadeInp.position(windowWidth/2-90,25)
  
  botao = createButton("Checar opcoes")
  botao.style('font-size', "24px")
  botao.position(windowWidth/2-90,150)
  botao.mousePressed(buttonPressed)
  
  function buttonPressed(){
    removeElements()
    mostrarImagem()
    
    if(!imagemAtual){
            texto = createSpan("Ocorreu um erro ao carregar sua imagem, tente novamente")
      texto.position(windowWidth/2-260,200)
      texto.style("color", "red")
    }
  }
  

  
  function ageResult(){
    const ageResult = createSpan(`Sua idade: ${IdadeInp.value()}`)
    ageResult.position(windowWidth/2-150,30)
    ageResult.style("color", "white")
  }
  
  function mostrarImagem(){
      let indice = []
      let opcoes = []

    if(IdadeInp.value() <1 || IdadeInp.value() >99){
      const idadeInvalida = createSpan("Sua idade é invalida, digite uma valida.")
      idadeInvalida.position(windowWidth/2-260,30)
      idadeInvalida.style("color", "white")
    }
    else if(IdadeInp.value() >= 18){
      console.log("Mostrar todos os filmes")
      for(let i = 2; i < 13; i++) {
        indice.push(i)
      }
      ageResult()
    } else if(IdadeInp.value() >=16 && IdadeInp.value() <= 17){
      console.log("Mostrar acao e humor")
      for(let i = 2; i < 10; i++){
        indice.push(i)
      }
      ageResult()
    } else if(IdadeInp.value() >=12 && IdadeInp.value() <= 15){
      console.log("Mostrar infantis e humor")
      indice = [0,1,2,3,7,8,9,10]
      ageResult()
    } else if(IdadeInp.value() <12){
      console.log("Mostrar apenas infantis")
      indice = [0,1,2,3]
      ageResult()
    }
      
     if(indice.length > 0){
      opcoes = indice.map(index => imagens[index])
      let indiceAleatorio = floor(random(opcoes.length))
      imagemAtual = opcoes[indiceAleatorio]
      textoFilme = nomeFilmes[indice[indiceAleatorio]]
    }
      
  }
}


function draw() {
  background(bg)
  if(imagemAtual){
    image(imagemAtual, windowWidth/2-190, 200, 200, 200)
    fill("white");
    textSize(20);
    text(textoFilme, windowWidth/2-190, 420);
  }
  noCursor()
  fill(255)
  circle(mouseX,mouseY,8)
  stroke(255)
  line(pmouseX, pmouseY, mouseX, mouseY)
}