import { Avatar } from "./components/Avatar"


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


    <div className="flex justify-center itens-center gap-18 mt-24">
    </div>
    </div>

    


    </section>
    </>
  )
}

export default App
