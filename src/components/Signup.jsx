import '../css/add.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from "react"

function SignUp() {
    const [first_name, setFirstname] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://berecipedjango-production.up.railway.app/register_user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name,
                last_name,
                password,
                email,
                username,
                password2
            }),
        })
            .then((r) => r.json())
            .then((d) => {

                navigate("/login")

                // }
            }
            );
    }
    return (
        <div className="bg-sysBackgroundColor min-h-screen bg-cover ">
            <div className='form-center'>
                <div className='mb-8'>
                    <p className='text-center font-bold text-2xl tracking-widest'>SignUp</p>
                </div>
                <form class="w-full max-w-lg " onSubmit={handleSubmit}>
                    <div className='border-collapse  border border-gray-500 p-8'>
                        <div class="flex flex-wrap -mx-3 mb-6  ">
                            <div class="w-full md:w-1/2 mb-6 md:mb-0 px-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-transparent border border-gray-500 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name='first_name' value={first_name} onChange={e => setFirstname(e.target.value)} />
                            </div>
                            <div class="w-full md:w-1/2 px-2">
                                <label class="block uppercase tracking-wide text-gray-700  text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-transparent border border-gray-500  text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name='last_name' value={last_name} onChange={e => setLast_name(e.target.value)}
                                    placeholder="Doe" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700  text-xs font-bold mb-2" for="grid-last-name">
                                    Email Address
                                </label>
                                <input class="appearance-none block w-full bg-transparent mb-6 border border-gray-500  text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="doe@gmail.com" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700  text-xs font-bold mb-2" for="grid-last-name">
                                    UserName
                                </label>
                                <input class="appearance-none block w-full bg-transparent mb-6 border border-gray-500  text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="janedoe" name='username' value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " for="grid-password">
                                    Password
                                </label>
                                <input class="appearance-none block w-full  border border-gray-500 mb-6 bg-transparent text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" name='password' value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " for="grid-password">
                                    Confirm Password
                                </label>
                                <input class="appearance-none block w-full  border border-gray-500  bg-transparent text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" name='password2' value={password2} onChange={e => setPassword2(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-9'>
                        <div className='mb-3'>
                            <button type="submit" className="bg-greenPaste w-[6vw] text-white font-bold py-2 px-4 border-b-4 border-r-4 border-gray-500  rounded">Sign Up</button>

                        </div>
                        <div>
                            <button type="button" className="bg-transparent w-[6vw] font-bold py-2 px-4 border-2 border-b-4 border-r-4 border-gray-400  rounded">Login</button>

                        </div>

                    </div>

                </form>
            </div>


        </div >
    )
}
export default SignUp;