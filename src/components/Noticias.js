import React, {Fragment} from 'react'

const Noticias = ({noticias, categoria}) => {

   
    return ( 
        <Fragment>

                <h1 className="mt-20 text-center text-3xl font-bold py-4">{categoria}</h1>    

                <div className="grid grid-cols-4 my-4 gap-4 border-2 border-white mx-5/6">
                         {noticias.map(noticia => (<div className="col-span-1 border-2 border-red-500" key={noticia.publishedAt}>{noticia.title}</div>
                         ))}
                </div>

            
                    
{/*
                   
                            
                            <div className="col-span-1 border-2 border-red-500">B</div>
                            <div className="col-span-1 border-2 border-red-500">C</div>
                    </div>

 
                    <div className='grid grid-cols-4 my-4 gap-4 border-2 border-white mx-5/6'>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                    </div>
                    <div className='grid grid-cols-4 my-4 gap-4 border-2 border-white mx-5/6'>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                    </div>
                    <div className='grid grid-cols-4 my-4 gap-4 border-2 border-white mx-5/6'>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                    </div>
                    <div className='grid grid-cols-4 my-4 gap-4 border-2 border-white mx-4/6'>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                        <div className="col-span-1 border-2 border-red-500">E</div>
                    </div> */}
                
        </Fragment>
     );
}
 
export default Noticias;