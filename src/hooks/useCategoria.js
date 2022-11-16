import React, {useState} from 'react'

const useCategoria = ( stateInicial, opciones ) => {

    const [ state, setState ] = useState(stateInicial)
    
    
    const Categoria = () => (
        <ol className=" flex cursor-pointer pt-2 mr-20 sm:mr-12 md:mr-24 overflow-x-auto">
            {opciones.map( opcion => (
                <li key={opcion.value}><button onClick={e => { setState(e.target.value)}} className="px-1 font-bold text-slate-400 md:text-white hover:text-red-600" value={opcion.value}>{opcion.title}</button></li>
            ))}
        </ol>
    )

    return [ state, Categoria ];

}
 
export default useCategoria;