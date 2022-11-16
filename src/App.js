import {Fragment, useState, useEffect} from 'react'
import Header from './components/Header'
import Noticias from './components/Noticias'


function App() {

  const [ categoria, setCategoria] = useState('');
  const [ noticias, setNoticias ] = useState([]);


  useEffect( () => {

    const llamadoAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&pageSize=20&apiKey=068696ac1e8e439c9cc7d5d368124e32`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setNoticias(resultado.articles)
      console.log(resultado.articles)

    }

    llamadoAPI();

  }, [categoria])

  return (
    <Fragment>
      <Header
        setCategoria={setCategoria}
      />

      <main>

        <h6 className="text-transparent">. </h6>

        <Noticias
          noticias={noticias}
          categoria={categoria}
        />
      </main>
    </Fragment>
    

  );
}

export default App;
