import './Login.css'

function Login() {
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h1>FIT<span>ZONE</span></h1>
        <h2>Welcome Back!</h2>
        <p>Login to your gym account</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>

        <p className="signup-text">
          Don't have an account? <a href="#register">Register</a>
        </p>
      </form>
    </div>
  )
}

export default Login