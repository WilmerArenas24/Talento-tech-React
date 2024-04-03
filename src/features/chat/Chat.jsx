import React from 'react'

export const Chat = () => {
  return (
    <div className='flex flex-col h-screen'>

        <div className='bg-green-300 text-gray-800 p-4'>
            <h1 className='text-lg font-semibold'>Chat</h1>
        </div>

        {/* Seccion de mensjaes */}
        <div className = 'flex flex-col space-y-2'>
            <div className='bg-blue-300  text-gray-700 py-2 px-4 rounded-lg max-w-xs self-start'>
                <p>Hola</p>
            </div>

            <div className='bg-pink-300  text-gray-700 py-2 px-4 rounded-lg max-w-xs self-end'>
                <p>Bien y tú?</p>
            </div>
        </div>
        <hr/>
        <div className='bg-gray-300 text-blue-400 p-4'>
            <input type="text"
            className='w-full bg-gray-100 rounded-lg py-2 px-4'
            placeholder='Escribir mensaje' />
        </div>
        
    </div>
  )
}
