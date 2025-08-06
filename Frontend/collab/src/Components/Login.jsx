

const login = ()=>{

    return (

        
            <>
            <form>
                <h1>Login</h1>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    

                    
                </div>
            </form>
            </>
        
    )
}


export default login;
