import './Register.css'

function Register() {
  return (
    <div className="register-page">
      <form className="register-form" onSubmit={(e) => e.preventDefault()}>
        <h1>Join <span>FITZONE</span></h1>
        <p>Create your gym membership account</p>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone Number</label>
        <input type="tel" placeholder="03XXXXXXXXX" required />

        <label>Gender</label>
        <select defaultValue="" required>
          <option value="" disabled>Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Date of Birth</label>
        <input type="date" required />

        <label>Address</label>
        <textarea placeholder="Enter your address" rows="3" />

        <label>Password</label>
        <input type="password" placeholder="Create a password" required />

        <button type="submit">Create Account</button>

        <p className="login-text">
          Already have an account? <a href="#login">Login</a>
        </p>
      </form>
    </div>
  )
}

export default Register