import React, { useEffect, useState } from 'react'
import { LogIn, MessageSquare } from 'lucide-react'
import EmptyState from '../../components/common/EmptyState'
import '../buyer/style/MyInquiries.css'
import axios from 'axios'

export default function MyInquiries() {

  const [inquiry, setInquired] = useState([])

  useEffect(() => {
    getInquiry();
  },[])

  const getInquiry = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/inquiry/buyer',
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setInquired(res.data.inquiries)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title">My Inquiries</h1>
        <p className="page-subtitle">Track the inquiries you've sent to agents.</p>
      </div>

      {inquiry.length === 0 ? (
        <EmptyState icon={MessageSquare} title="No inquiries yet" message="Inquiries you send to agents will appear here." />
      ) : (
        <div className="inquiries-list">
          {inquiry.map((inq) => (
            <div key={inq._id} className="inquiry-card">
              <div>
                <p className="inquiry-property">{inq.property.title}</p>
                <p className="inquiry-agent">To: {inq.agent.name}</p>
                <p className="inquiry-message">"{inq.message}"</p>
              </div>
              <div className="inquiry-meta">
                <span
                  className={`status-pill ${inq.status === 'Responded' ? 'status-pill--success' : 'status-pill--gold'}`}
                >
                  {inq.status}
                </span>
                <p className="inquiry-date">{inq.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
