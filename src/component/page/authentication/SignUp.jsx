import {useState} from "react";
import axios from "axios";

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')
    const [error, setError] = useState('');
    const handleSignUp = async () => {
        try {
            if (!firstName) {
                setError('Please fill in all fields');
                return;
            }

            const response = await axios.post('http://localhost:8080/auth/signup', {
                firstName,
                lastName,
                email,
                userName,
                password
            });
            console.log(response.data);
            setResult(response.data)
        } catch (error) {
            console.error('Signup failed: ', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data : error.message)
        }
    }

    return (
        <div className="bg-slate-50 relative flex justify-center items-center h-screen w-screen">
            <div className="flex flex-col h-2/3 w-1/4 justify-center bg-white pr-12">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            First Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Last Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="Cena" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="johncena@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Username
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="johnCena" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-password">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-password" type="password" value={password} placeholder="******************" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input className="mr-2 leading-tight" type="checkbox"/>
                        <span className="text-sm">
                            Send me your newsletter!
                        </span>
                    </label>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-blue-500 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button" onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}