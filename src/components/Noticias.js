import React, {Fragment} from 'react'

const Noticias = () => {
    return ( 
        <Fragment>
                    <h1 className="mt-20 text-center text-3xl font-bold py-4">Categoria</h1>

                    <div className="grid grid-cols-3 gap-2 border-2 mx-5/6 border-white">
                            <div className="col-span-2 row-span-2 border-2 border-red-500">A</div>
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
                    </div>
                
        </Fragment>
     );
}
 
export default Noticias;