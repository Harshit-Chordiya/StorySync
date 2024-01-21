import {useState} from 'react';
export default function RegisterPage() {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
   async function register(ev)
    {
        ev.preventDefault();
       await fetch('http://localhost:4000/register',{
            method:'POST',
            body: JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
        })
    }
    return(
        <>
        <form className="register" onSubmit={register}>
        <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={x => setusername(x.target.value)} />
            <input type="text" placeholder="password" value={password} onChange={x => setpassword(x.target.value)}/>
            <button>Register</button>
        </form>
    </>
    );
    
};
