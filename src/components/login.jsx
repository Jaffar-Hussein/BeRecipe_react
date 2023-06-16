import '../css/add.css'

function Login() {
    return (
        <div className="bg-sysBackgroundColor min-h-screen bg-cover ">
            <div className='form-center'>
                <div className='mb-8'>
                    <p className='text-center font-bold text-2xl tracking-widest'>LOGIN</p>
                </div>
                <form class="w-full max-w-lg  ">
                    <div className='border-collapse  border border-gray-500 p-8'>
                        <div class="flex flex-wrap -mx-3 mb-6  ">
                            <div class="w-full mb-6 md:mb-0 px-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    User Name
                                </label>
                                <input class="appearance-none block w-full bg-transparent border border-gray-500 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            </div>

                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">


                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " for="grid-password">
                                    Password
                                </label>
                                <input class="appearance-none block w-full  border border-gray-500 mb-6 bg-transparent text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                            </div>

                        </div>
                    </div>
                    <div className='text-center mt-9'>
                    
                        <div className='mb-3'>
                            <button type="button" className="bg-greenPaste w-[6vw] text-white font-bold py-2 px-4 border-b-4 border-r-4 border-gray-500  rounded">Login</button>

                        </div>
                        <div >
                            <button type="button" className="bg-transparent w-[6vw] font-bold py-2 px-4 border-2 border-b-4 border-r-4 border-gray-400  rounded">Sign Up</button>

                        </div>


                    </div>

                </form>
            </div>


        </div>
    )
}
export default Login;