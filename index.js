function Body(){
    return(
        <div className="container">
            <h2>Please Login</h2>
            <div className="input">
                <input className="email" type='text' placeholder="Email" />
                <input className="password" type='password' placeholder='Password'/>
                <button type="submit">Login</button>
            </div>
            <p> Don't have an account? Register</p>
        </div>
    )
}
function App(){
    return(
        <div className="app">
            <Body />
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))