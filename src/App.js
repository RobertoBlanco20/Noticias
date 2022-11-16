import {Fragment} from 'react'
import Header from './components/Header'
import Noticias from './components/Noticias'


function App() {
  return (
    <Fragment>
      <Header />

      <main>

        <h6 className="text-transparent">. </h6>

        <Noticias/>
      </main>
    </Fragment>
    

  );
}

export default App;
