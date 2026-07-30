import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Mail, Phone } from 'lucide-react'
import SearchBar from '../../components/common/SearchBar'
import Pagination from '../../components/common/Pagination'
import EmptyState from '../../components/common/EmptyState'
import './AgentList.css'

export default function AgentList() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 5

  const filtered = agents.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()))
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize)

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
                {paged.map((a) => (
                  <tr key={a.id}>
                    <td>
                      <div className="agent-list-name-cell">
                        <img src={a.avatar} alt={a.name} className="agent-list-avatar" />
                        <span className="agent-list-name">{a.name}</span>
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
