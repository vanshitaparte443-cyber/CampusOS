export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* TEMP LAYOUT SHELL */}
      <div className="flex">
        
        {/* SIDEBAR (placeholder for now) */}
        <aside className="w-64 border-r bg-white min-h-screen p-4">
          <div className="text-lg font-bold">CampusOS</div>
          <nav className="mt-6 space-y-2 text-sm text-zinc-600">
            <div>Dashboard</div>
            <div>Attendance</div>
            <div>Schedule</div>
            <div>Assignments</div>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
  );
}