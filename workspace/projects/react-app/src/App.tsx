import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <nav>
        <div className="nav-brand">react-app</div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}

function Home() {
  return (
    <div className="page">
      <h1>Home</h1>
      <p>
        This is a React + TypeScript + Vite starter with React Router, served
        behind a reverse proxy at <code>/app</code>.
      </p>
      <div className="card">
        <h2>Stack</h2>
        <ul>
          <li>React 19</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>React Router</li>
        </ul>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>This route demonstrates client-side navigation at <code>/app/dashboard</code>.</p>
      <div className="grid">
        <div className="card">
          <h3>Routes</h3>
          <p className="stat">2</p>
        </div>
        <div className="card">
          <h3>Components</h3>
          <p className="stat">4</p>
        </div>
        <div className="card">
          <h3>Status</h3>
          <p className="stat ok">Live</p>
        </div>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="page">
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
