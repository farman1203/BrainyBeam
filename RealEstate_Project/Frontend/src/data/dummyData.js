// ---------------------------------------------------------
// Static dummy data used throughout the UI.
// In a real app this would come from an API.
// ---------------------------------------------------------

export const properties = [
  {
    id: 'p1',
    title: 'Sunrise Meadows Villa',
    city: 'Ahmedabad',
    locality: 'Bopal',
    price: 12500000,
    bhk: 4,
    area: 2800,
    type: 'Villa',
    status: 'Active',
    agent: 'Rahul Mehta',
    agentId: 'a1',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    description:
      'A spacious 4BHK villa surrounded by green landscaping, offering a private garden, double-height living room, and modern interiors built for comfortable family living.',
    amenities: ['Swimming Pool', 'Clubhouse', 'Power Backup', 'Gated Security', 'Garden', 'Parking'],
    lat: 23.0225,
    lng: 72.4693,
  },
  {
    id: 'p2',
    title: 'Skyline Residency Tower',
    city: 'Ahmedabad',
    locality: 'Prahlad Nagar',
    price: 8600000,
    bhk: 3,
    area: 1750,
    type: 'Apartment',
    status: 'Active',
    agent: 'Rahul Mehta',
    agentId: 'a1',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80',
    ],
    description:
      'Premium 3BHK apartment on a high floor with skyline views, modular kitchen, and access to a fully-equipped clubhouse and rooftop lounge.',
    amenities: ['Gym', 'Lift', 'Kids Play Area', 'Power Backup', 'CCTV', 'Parking'],
    lat: 23.0129,
    lng: 72.5064,
  },
  {
    id: 'p3',
    title: 'Palm Grove Bungalow',
    city: 'Surat',
    locality: 'Vesu',
    price: 21000000,
    bhk: 5,
    area: 4200,
    type: 'Bungalow',
    status: 'Active',
    agent: 'Priya Shah',
    agentId: 'a2',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    ],
    description:
      'An expansive 5BHK independent bungalow with a private lawn, home office, and premium fittings throughout — ideal for large families.',
    amenities: ['Private Lawn', 'Home Theatre', 'Servant Room', 'Power Backup', 'Parking', 'Gated Security'],
    lat: 21.1391,
    lng: 72.7797,
  },
  {
    id: 'p4',
    title: 'Riverside Elite Flats',
    city: 'Surat',
    locality: 'Adajan',
    price: 6200000,
    bhk: 2,
    area: 1150,
    type: 'Apartment',
    status: 'Active',
    agent: 'Priya Shah',
    agentId: 'a2',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
    ],
    description:
      'Cozy 2BHK flat near the riverfront, perfect for small families and young professionals, with quick access to schools and markets.',
    amenities: ['Lift', 'Parking', 'Power Backup', 'CCTV'],
    lat: 21.1959,
    lng: 72.7933,
  },
  {
    id: 'p5',
    title: 'Green Valley Plots',
    city: 'Gandhinagar',
    locality: 'Sector 21',
    price: 4500000,
    bhk: 0,
    area: 2000,
    type: 'Plot',
    status: 'Active',
    agent: 'Rahul Mehta',
    agentId: 'a1',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&q=80',
      'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=1200&q=80',
    ],
    description:
      'A clear-title residential plot in a rapidly developing sector, ideal for custom home construction with wide approach roads.',
    amenities: ['Gated Security', 'Wide Roads', 'Underground Wiring'],
    lat: 23.2156,
    lng: 72.6369,
  },
  {
    id: 'p6',
    title: 'Orchid Business Suites',
    city: 'Ahmedabad',
    locality: 'SG Highway',
    price: 9800000,
    bhk: 0,
    area: 1400,
    type: 'Commercial',
    status: 'Active',
    agent: 'Priya Shah',
    agentId: 'a2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80',
    ],
    description:
      'Grade-A office suite on SG Highway with column-free floor plates, central AC, and dedicated parking — ready to move in.',
    amenities: ['Central AC', 'Parking', 'Power Backup', 'CCTV', 'Cafeteria'],
    lat: 23.0395,
    lng: 72.5066,
  },
]

export const agents = [
  {
    id: 'a1',
    name: 'Rahul Mehta',
    email: 'rahul.mehta@estatelane.com',
    phone: '+91 98765 43210',
    properties: 3,
    leads: 12,
    joined: 'Jan 12, 2024',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    id: 'a2',
    name: 'Priya Shah',
    email: 'priya.shah@estatelane.com',
    phone: '+91 91234 56780',
    properties: 3,
    leads: 9,
    joined: 'Mar 4, 2024',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/100?img=32',
  },
  {
    id: 'a3',
    name: 'Aman Verma',
    email: 'aman.verma@estatelane.com',
    phone: '+91 99887 66554',
    properties: 0,
    leads: 2,
    joined: 'Jun 18, 2024',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/100?img=51',
  },
]

export const leads = [
  { id: 'l1', buyer: 'Karan Patel', property: 'Sunrise Meadows Villa', phone: '+91 90000 11122', status: 'New' },
  { id: 'l2', buyer: 'Neha Joshi', property: 'Skyline Residency Tower', phone: '+91 90000 22233', status: 'Contacted' },
  { id: 'l3', buyer: 'Vikram Rao', property: 'Palm Grove Bungalow', phone: '+91 90000 33344', status: 'Site Visit Scheduled' },
  { id: 'l4', buyer: 'Ishita Desai', property: 'Riverside Elite Flats', phone: '+91 90000 44455', status: 'Negotiation' },
  { id: 'l5', buyer: 'Manav Shah', property: 'Green Valley Plots', phone: '+91 90000 55566', status: 'Closed' },
  { id: 'l6', buyer: 'Ritu Sharma', property: 'Orchid Business Suites', phone: '+91 90000 66677', status: 'Lost' },
  { id: 'l7', buyer: 'Devansh Trivedi', property: 'Sunrise Meadows Villa', phone: '+91 90000 77788', status: 'New' },
  { id: 'l8', buyer: 'Aarushi Nair', property: 'Skyline Residency Tower', phone: '+91 90000 88899', status: 'Contacted' },
]

export const leadStatuses = ['New', 'Contacted', 'Site Visit Scheduled', 'Negotiation', 'Closed', 'Lost']

export const siteVisits = [
  { id: 'v1', buyer: 'Vikram Rao', property: 'Palm Grove Bungalow', date: '2026-07-29', time: '10:30 AM', status: 'Upcoming' },
  { id: 'v2', buyer: 'Karan Patel', property: 'Sunrise Meadows Villa', date: '2026-07-29', time: '2:00 PM', status: 'Upcoming' },
  { id: 'v3', buyer: 'Neha Joshi', property: 'Skyline Residency Tower', date: '2026-07-30', time: '11:00 AM', status: 'Upcoming' },
  { id: 'v4', buyer: 'Manav Shah', property: 'Green Valley Plots', date: '2026-07-25', time: '4:00 PM', status: 'Completed' },
]

export const timeSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM']

export const inquiries = [
  { id: 'i1', property: 'Sunrise Meadows Villa', agent: 'Rahul Mehta', date: 'Jul 20, 2026', status: 'Responded', message: 'Interested in a weekend site visit.' },
  { id: 'i2', property: 'Riverside Elite Flats', agent: 'Priya Shah', date: 'Jul 22, 2026', status: 'Pending', message: 'Asked about loan assistance and pricing.' },
  { id: 'i3', property: 'Orchid Business Suites', agent: 'Priya Shah', date: 'Jul 24, 2026', status: 'Pending', message: 'Requested floor plan and lease terms.' },
]

export const savedPropertyIds = ['p1', 'p4', 'p6']
export const recentlyViewedIds = ['p2', 'p3', 'p5']

export const recentActivities = [
  { id: 1, text: 'Agent Priya Shah added a new property "Orchid Business Suites"', time: '2 hours ago' },
  { id: 2, text: 'Lead "Ishita Desai" moved to Negotiation stage', time: '5 hours ago' },
  { id: 3, text: 'New agent Aman Verma registered', time: '1 day ago' },
  { id: 4, text: 'Buyer Karan Patel scheduled a site visit', time: '1 day ago' },
  { id: 5, text: 'Property "Green Valley Plots" marked as Closed', time: '2 days ago' },
]

export const amenitiesList = [
  'Swimming Pool', 'Gym', 'Clubhouse', 'Power Backup', 'Gated Security',
  'Parking', 'Lift', 'Garden', 'CCTV', 'Kids Play Area', 'Central AC', 'Cafeteria',
]

export const cities = ['Ahmedabad', 'Surat', 'Gandhinagar', 'Vadodara', 'Rajkot']
export const propertyTypes = ['Apartment', 'Villa', 'Bungalow', 'Plot', 'Commercial']

export const currentUser = {
  admin: { name: 'Admin User', email: 'admin@estatelane.com', role: 'Admin', avatar: 'https://i.pravatar.cc/100?img=68' },
  agent: { name: 'Rahul Mehta', email: 'rahul.mehta@estatelane.com', role: 'Agent', avatar: 'https://i.pravatar.cc/100?img=12', phone: '+91 98765 43210' },
  buyer: { name: 'Karan Patel', email: 'karan.patel@gmail.com', role: 'Buyer', avatar: 'https://i.pravatar.cc/100?img=15', phone: '+91 90000 11122' },
}

export const formatPrice = (price) => {
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`
  if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`
  return `₹${price.toLocaleString('en-IN')}`
}
