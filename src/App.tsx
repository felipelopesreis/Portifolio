import { Avatar } from "./components/Avatar"
import { ThemeController } from "./components/themeController"


function App() {


  return (
    <>
    <section className="flex justify-center mt-4 "> 
    
      
      <div className="m-20 tracking-[.25em]">
      <h1 className="text-2xl m-8 text-center">Bem Vindo! Eu sou o Felipe</h1>

      
      
      <p className="whitespace-pre"> Explore meu trabalho como programador júnior e descubra como posso contribuir para o sucesso do seu projeto.</p>
      <p className="text-center">Desenvolvendo o futuro, um código de cada vez.</p>


    <div className="mt-6 flex justify-center">
        <Avatar/>
        
    </div>

    <div className="mt-6 flex justify-center" >
      <ThemeController/>
    </div>  

    <div className="text-center ">
      <p className="p-10 ">Projetos desenvolvidos</p>
    </div>

    <div className="flex first-line">
      
    <img className="float-left w-64 h-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"/>
      <p>Maybe we can live without libraries, </p>


      <img className="float-left w-64 h-64" src="https://i.pinimg.com/564x/00/2e/69/002e69110468629d0a56c17473e061c5.jpg"/>
      <p>Maybe we can live without libraries, </p>


      <img className="float-right w-64 h-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"/>
      <p>Maybe we can live without libraries, people like you and me</p>
  
      <img className="float-right w-64 h-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"/>
      <p>Maybe we can live without libraries, people like you and me</p>


</div>

    
    </div>

    


    </section>
    </>
  )
}

export default App
