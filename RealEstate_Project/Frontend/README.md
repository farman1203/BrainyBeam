# Estatelane — Real Estate Listing & Lead Management (Frontend UI)

A clean, responsive React UI for a real estate listing & lead management system, with three role-based panels: **Admin**, **Agent**, and **Buyer**. Frontend only — all data is static/dummy, no backend.

## Tech Stack
- React 18 (functional components + hooks only)
- React Router v6 (all navigation)
- Tailwind CSS (styling)
- Lucide React (icons)
- Vite (build tool)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser. Visit `/login` and use the role switch (Admin / Agent / Buyer) to jump into any panel — there is no real authentication, it's UI only.

Build for production:
```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
  components/common/     Reusable UI: Navbar, Sidebar, Footer, PropertyCard,
                          SearchBar, FilterSidebar, ComparisonTable,
                          LeadStatusCard, DashboardCard, LoadingSkeleton,
                          EmptyState, Pagination, PropertyDetailsView
  layouts/                AuthLayout (login/register split screen),
                          DashboardLayout (navbar + sidebar + footer shell)
  pages/
    auth/                 Login, Register
    admin/                Dashboard, CreateAgent, AgentList
    agent/                Dashboard, MyProperties, AddProperty, EditProperty,
                          PropertyDetails, Leads (Kanban), SiteVisitSchedule,
                          Profile, PropertyForm (shared by Add/Edit)
    buyer/                Dashboard, BrowseProperties, PropertyDetails,
                          CompareProperties, SavedProperties, MyInquiries, Profile
  data/dummyData.js       All static dummy data + helpers (e.g. formatPrice)
  App.jsx                 All React Router routes
  main.jsx                App entry point
```

## Notes
- All forms (Login, Register, Create Agent, Add/Edit Property, Profile) are UI-only — submitting shows a success message but does not persist data.
- The Google Map on the Property Details page is a styled placeholder.
- Image upload on the Add/Edit Property form is UI-only (no real upload).
- Routing between roles is manual: pick a role on the Login page to see that panel.
