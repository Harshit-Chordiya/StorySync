export default function LoginPage(params) {
    return(
        <>
            <form className="login">
            <h1>Login </h1>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password"/>
                <button>Login</button>
            </form>
        </>
    );
    
};
