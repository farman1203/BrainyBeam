import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Mail, Phone } from 'lucide-react'
import SearchBar from '../../components/common/SearchBar'
import Pagination from '../../components/common/Pagination'
import EmptyState from '../../components/common/EmptyState'
import './AgentList.css'
import axios from 'axios'

export default function AgentList() {
  const [query, setQuery] = useState('')
  const [agent, setAgent] = useState([])
  const [page, setPage] = useState(1)
  const pageSize = 5

  const filtered = agent.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()))
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize)

  useEffect(() => {
    getAgentlist()
  }, [])

  const getAgentlist = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/admin/agent',
        {
          withCredentials: true
        }
      );
      setAgent(res.data.agents),
        console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page-stack-6">
      <div className="page-header-row">
        <div>
          <h1 className="page-title">Agent List</h1>
          <p className="page-subtitle">Manage all registered agents.</p>
        </div>
        <Link
          to="/admin/agents/create"
          className="btn-primary"
        >
          <Plus size={16} /> Create Agent
        </Link>
      </div>

      <div className="agent-list-search-wrap">
        <SearchBar value={query} onChange={(v) => { setQuery(v); setPage(1) }} placeholder="Search agents by name..." />
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No agents found" message="Try adjusting your search." />
      ) : (
        <div className="agent-list-table-card">
          <div className="agent-list-table-scroll">
            <table className="agent-list-table">
              <thead>
                <tr>
                  <th>Agent</th>
                  <th>Contact</th>
                  <th>Properties</th>
                  <th>Leads</th>
                  <th>Joined</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {agent.map((a) => (
                  <tr key={a._id}>
                    <td>
                      <div className="pdv-agent-avatar">
                        {a?.name?.charAt(0).toUpperCase()}
                      </div>
                    </td>
                    <td className="agent-list-contact-cell">
                      <p className="agent-list-contact-row"><Mail size={13} /> {a.email}</p>
                      <p className="agent-list-contact-row"><Phone size={13} /> {a.phone}</p>
                    </td>
                    <td>{a.properties}</td>
                    <td>{a.leads}</td>
                    <td className="agent-list-contact-cell">{a.joined}</td>
                    <td>
                      <span
                        className={`status-pill ${a.status === 'Active' ? 'status-pill--success' : 'status-pill--muted'}`}
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Pagination page={page} totalPages={Math.ceil(filtered.length / pageSize)} onChange={setPage} />
    </div>
  )
}
