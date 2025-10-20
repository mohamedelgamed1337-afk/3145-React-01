export default function SignIn () {
    return (<div>
        <ul>
        <li><h2>Sign In</h2></li>
        <li><label>UserName</label></li>
        <input type="text" required placeholder="NotTheRealOneForSafity" maxLength="8"/>
        <br></br>
        <br></br>
        <li><label>Password</label></li>
        <input type="password" placeholder="Write a complex pass" minLength="8" maxLength="30"/>
        <br></br>
            <li><button>Submit</button><button>Cancel</button></li>
            </ul>
        </div>
    )
}
