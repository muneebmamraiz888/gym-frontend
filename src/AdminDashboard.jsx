import './AdminDashboard.css'

function AdminDashboard() {
  const stats = [
    { title: 'Total Members', value: '250', icon: '👥' },
    { title: 'Active Members', value: '186', icon: '💪' },
    { title: 'Monthly Revenue', value: 'Rs. 450,000', icon: '💰' },
    { title: 'Pending Fees', value: '24', icon: '⚠️' },
  ]

  const activities = [
    { name: 'Ali Ahmed', action: 'Registered as a new member', date: 'Today' },
    { name: 'Sara Khan', action: 'Paid membership fee', date: 'Today' },
    { name: 'Ahmed Raza', action: 'Renewed membership', date: 'Yesterday' },
    { name: 'Usman Malik', action: 'Checked in at gym', date: 'Yesterday' },
  ]

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>FIT<span>ZONE</span></h2>
        <p className="admin-label">ADMIN PANEL</p>

        <a className="selected" href="#overview">📊 Dashboard</a>
        <a href="#members">👥 Members</a>
        <a href="#trainers">🏋️ Trainers</a>
        <a href="#memberships">🎫 Memberships</a>
        <a href="#payments">💳 Payments</a>
        <a href="#attendance">📅 Attendance</a>
        <a href="#reports">📈 Reports</a>
        <a href="#settings">⚙️ Settings</a>
      </aside>

      <main className="admin-main" id="overview">
        <header className="admin-header">
          <div>
            <p className="admin-label">OVERVIEW</p>
            <h1>Admin Dashboard</h1>
            <p className="admin-muted">Welcome back! Here's your gym summary.</p>
          </div>
          <div className="admin-avatar">A</div>
        </header>

        <section className="admin-stats">
          {stats.map((stat) => (
            <div className="admin-stat-card" key={stat.title}>
              <span className="stat-icon">{stat.icon}</span>
              <p>{stat.title}</p>
              <h2>{stat.value}</h2>
            </div>
          ))}
        </section>

        <section className="admin-section" id="members">
          <div className="admin-section-header">
            <h2>Recent Activity</h2>
            <button onClick={() => window.alert('Activity report coming soon!')}>
              View All
            </button>
          </div>

          <div className="activity-list">
            {activities.map((activity) => (
              <div className="activity-row" key={activity.name}>
                <div className="activity-avatar">
                  {activity.name.charAt(0)}
                </div>
                <div className="activity-info">
                  <strong>{activity.name}</strong>
                  <p>{activity.action}</p>
                </div>
                <span className="activity-date">{activity.date}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="admin-section" id="quick-actions">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <button onClick={() => window.alert('Add Member form coming soon!')}>
              + Add Member
            </button>
            <button onClick={() => window.alert('Add Trainer form coming soon!')}>
              + Add Trainer
            </button>
            <button onClick={() => window.alert('Payment module coming soon!')}>
              Record Payment
            </button>
          </div>
        </section>

        <footer className="admin-footer">
          FITZONE Gym Management System © 2026
        </footer>
      </main>
    </div>
  )
}

export default AdminDashboard