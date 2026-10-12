import { useState } from 'react';
import api from './api';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(false);

  const goToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const member = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      gender: formData.get('gender'),
      date_of_birth: formData.get('date_of_birth') || null,
      address: formData.get('address') || null,
      joining_date: new Date().toISOString().slice(0, 10),
      status: 'active',
    };

    setLoading(true);

    try {
      const response = await api.post('/members', member);

      alert(`Registration successful! Member ID: ${response.data.id}`);
      form.reset();
    } catch (error) {
      console.error(error.response?.data || error);

      if (error.response?.data?.errors) {
        alert(
          Object.values(error.response.data.errors).flat().join('\n')
        );
      } else {
        alert(
          error.response?.data?.message ||
            'Registration failed. Check that Laravel and MySQL are running.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={() => setActiveSection('home')}
        >
          FIT<span>ZONE</span>
        </a>

        <nav>
          {[
            'home',
            'about',
            'services',
            'membership',
            'trainers',
            'contact',
          ].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          <a
            href="#registration"
            className="nav-join"
            onClick={() => setActiveSection('registration')}
          >
            Join Now
          </a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">YOUR FITNESS JOURNEY STARTS HERE</p>

          <h1>
            BUILD YOUR
            <br />
            <span>STRONGEST</span>
            <br />
            SELF.
          </h1>

          <p>
            Train harder, feel stronger, and become the best version of
            yourself with FITZONE.
          </p>

          <button
            className="primary-btn"
            onClick={() => goToSection('registration')}
          >
            Join FITZONE
          </button>

          <button
            className="outline-btn"
            onClick={() => goToSection('services')}
          >
            Explore Services
          </button>
        </div>
      </section>

      <section id="about" className="section">
        <p className="eyebrow">ABOUT FITZONE</p>
        <h2>MORE THAN A GYM</h2>

        <p className="section-text">
          FITZONE is a place to build strength, improve your health, and reach
          your fitness goals. Whether you are a beginner or an experienced
          athlete, we are here to help.
        </p>

        <div className="stats">
          <div>
            <h3>500+</h3>
            <p>Members</p>
          </div>
          <div>
            <h3>10+</h3>
            <p>Expert Trainers</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Motivation</p>
          </div>
        </div>
      </section>

      <section id="services" className="section dark-section">
        <p className="eyebrow">WHAT WE OFFER</p>
        <h2>OUR SERVICES</h2>

        <div className="card-grid">
          <article className="feature-card">
            <div className="card-icon">🏋️</div>
            <h3>Strength Training</h3>
            <p>Build muscle, improve strength, and train with confidence.</p>
          </article>

          <article className="feature-card">
            <div className="card-icon">🏃</div>
            <h3>Cardio Training</h3>
            <p>Improve stamina and support your overall fitness.</p>
          </article>

          <article className="feature-card">
            <div className="card-icon">💪</div>
            <h3>Personal Training</h3>
            <p>Work toward your goals with a structured training plan.</p>
          </article>
        </div>
      </section>

      <section id="membership" className="section">
        <p className="eyebrow">CHOOSE YOUR PLAN</p>
        <h2>MEMBERSHIP PLANS</h2>

        <div className="card-grid">
          <article className="plan-card">
            <h3>Monthly</h3>
            <p className="price">PKR 5,000</p>
            <p>One month of gym access.</p>
            <button
              className="primary-btn"
              onClick={() => goToSection('registration')}
            >
              Choose Plan
            </button>
          </article>

          <article className="plan-card featured-plan">
            <p className="eyebrow">POPULAR</p>
            <h3>Quarterly</h3>
            <p className="price">PKR 13,000</p>
            <p>Three months of gym access.</p>
            <button
              className="primary-btn"
              onClick={() => goToSection('registration')}
            >
              Choose Plan
            </button>
          </article>

          <article className="plan-card">
            <h3>Yearly</h3>
            <p className="price">PKR 45,000</p>
            <p>Twelve months of gym access.</p>
            <button
              className="primary-btn"
              onClick={() => goToSection('registration')}
            >
              Choose Plan
            </button>
          </article>
        </div>

        <p className="section-text">
          These are sample prices. Payment processing and membership-plan
          storage are not connected yet.
        </p>
      </section>

      <section id="trainers" className="section dark-section">
        <p className="eyebrow">MEET THE TEAM</p>
        <h2>OUR TRAINERS</h2>

        <div className="card-grid">
          <article className="feature-card">
            <div className="card-icon">👨‍🏫</div>
            <h3>Strength Coach</h3>
            <p>Guidance for strength and muscle-building workouts.</p>
          </article>

          <article className="feature-card">
            <div className="card-icon">🏃‍♂️</div>
            <h3>Fitness Coach</h3>
            <p>Support for cardio, endurance, and general fitness.</p>
          </article>

          <article className="feature-card">
            <div className="card-icon">🥗</div>
            <h3>Wellness Coach</h3>
            <p>Practical guidance for healthy habits and consistency.</p>
          </article>
        </div>
      </section>

      <section id="registration" className="section registration-section">
        <p className="eyebrow">TAKE THE FIRST STEP</p>
        <h2>JOIN FITZONE</h2>

        <p className="section-text">
          Fill in your details to register as a gym member.
        </p>

        <form className="join-form" onSubmit={handleRegistration}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            autoComplete="name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            autoComplete="tel"
            required
          />

          <select name="gender" defaultValue="" required>
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="date_of_birth">Date of Birth</label>
          <input type="date" id="date_of_birth" name="date_of_birth" />

          <textarea name="address" placeholder="Address" rows="3" />

          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register Now'}
          </button>
        </form>
      </section>

      <section id="login" className="section dark-section">
        <p className="eyebrow">WELCOME BACK</p>
        <h2>MEMBER LOGIN</h2>

        <p className="section-text">
          Member login is a future feature. Authentication has not been
          connected yet.
        </p>

        <button
          className="outline-btn"
          onClick={() => goToSection('registration')}
        >
          Register as a Member
        </button>
      </section>

      <section id="contact" className="section">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>CONTACT US</h2>

        <p className="section-text">
          Have questions about joining FITZONE? Contact your gym administrator.
        </p>

        <div className="contact-details">
          <p>
            <strong>Location:</strong> Karachi, Pakistan
          </p>
          <p>
            <strong>Email:</strong> info@fitzone.example
          </p>
          <p>
            <strong>Hours:</strong> Contact the gym for current hours
          </p>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">
          FIT<span>ZONE</span>
        </a>
        <p>Build strength. Build confidence. Build yourself.</p>
        <p>© {new Date().getFullYear()} FITZONE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;