import './Dashboard.css'

function Dashboard() {
  const member = {
    name: 'Muneeb',
    email: 'muneeb@gmail.com',
    plan: 'Quarterly',
    joiningDate: 'October 7, 2026',
    expiryDate: 'January 7, 2027',
    feeStatus: 'Paid',
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>FIT<span>ZONE</span></h2>
        <p className="sidebar-label">MEMBER MENU</p>
        <a href="#overview">Dashboard</a>
        <a href="#profile">My Profile</a>
        <a href="#membership">My Membership</a>
        <a href="#payments">Payments</a>
        <a href="#workout">Workout Plan</a>
        <a href="#attendance">Attendance</a>
        <a href="#home">Logout</a>
      </aside>

      <main className="dashboard-main" id="overview">
        <header className="dashboard-header">
          <div>
            <p className="muted">MEMBER PORTAL</p>
            <h1>Welcome, {member.name}!</h1>
          </div>
          <div className="avatar">M</div>
        </header>

        <section className="dashboard-cards">
          <div className="stat-card">
            <p>Membership Plan</p>
            <h2>{member.plan}</h2>
          </div>
          <div className="stat-card">
            <p>Membership Status</p>
            <h2 className="active-status">Active</h2>
          </div>
          <div className="stat-card">
            <p>Fee Status</p>
            <h2 className="active-status">{member.feeStatus}</h2>
          </div>
        </section>

        <section className="info-card" id="profile">
          <h2>My Profile</h2>
          <div className="info-row">
            <span>Full Name</span>
            <strong>{member.name}</strong>
          </div>
          <div className="info-row">
            <span>Email Address</span>
            <strong>{member.email}</strong>
          </div>
          <div className="info-row">
            <span>Joining Date</span>
            <strong>{member.joiningDate}</strong>
          </div>
          <div className="info-row" id="membership">
            <span>Membership Expiry</span>
            <strong>{member.expiryDate}</strong>
          </div>
        </section>

        <section className="info-card" id="payments">
          <h2>Payment Overview</h2>
          <p>Your current membership fee is marked as {member.feeStatus}.</p>
          <button className="dashboard-button">View Payments</button>
        </section>

        <footer className="dashboard-footer">
          © 2026 FITZONE Gym Management System
        </footer>
      </main>
    </div>
  )
}

export default Dashboard