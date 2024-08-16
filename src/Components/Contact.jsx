import React from 'react'

export default function Contact() {
  return (
    <>
      <div  name= "Contact"
      className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 '
      >
        <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
        <span>Please Fill Out the Form Below To Contact Me</span>
        <div>
            <div className='flex flex-col items-center justify-center mt-5'>
            <form 
            action="https://getform.io/f/bolgrqea" 
            method='POST'
            className='bg-slate-300 w-96 px-6 py-8 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4 '>Send Your Messege</h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Full Name</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                     type="text" name='name' placeholder='Enter your name 'required />
                </div>

                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Emali Address</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                     type="text" name='Gmail' placeholder='Enter Email' required/>
                </div>

                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Enter Your Messege</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                     type="text" name='mssg' placeholder='Enter your Messege' required/>
                </div>
                <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
            </form>
            </div>

            
        </div>

      </div>
    </>
  )
}
