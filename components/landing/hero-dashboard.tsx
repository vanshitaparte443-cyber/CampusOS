"use client";

export default function HeroDashboard() {
  return (
    <div className="w-full h-full rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-4 border-b bg-zinc-50">
        <div>
          <div className="text-sm font-semibold text-zinc-900">
            CampusOS • Student System
          </div>
          <div className="text-xs text-zinc-500">
            Semester VI • Computer Engineering
          </div>
        </div>

        <div className="text-right">
  <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 justify-end">
    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
    System Active • 10:42 AM
  </div>

  <div className="text-[10px] text-zinc-400 mt-1">
    Last sync: 2 sec ago
  </div>
</div>
      </div>

      <div className="p-5 space-y-6">

        {/* ATTENDANCE */}
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>Attendance Status</span>
            <span className="font-semibold text-zinc-900">96%</span>
          </div>

          <div className="mt-2 h-2 w-full rounded-full bg-zinc-100 overflow-hidden">
            <div className="h-2 w-[96%] rounded-full bg-zinc-900 transition-all" />
          </div>

          <div className="mt-2 text-[11px] text-zinc-500">
            Attendance stable • All parameters normal
          </div>
        </div>

        {/* LIVE SCHEDULE */}
        <div>
  <div className="text-xs font-semibold text-zinc-700 mb-3">
  Schedule
  </div>

  <div className="space-y-3 text-xs">

    {/* ACTIVE CLASS */}
    <div className="flex items-center justify-between border-l-2 border-emerald-500 pl-3">
      <div>
        <div className="text-zinc-900 font-medium flex items-center gap-2">
          09:00
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <div className="text-zinc-500">Physics Lecture (Ongoing)</div>
      </div>
      <span className="text-emerald-600 font-medium">ACTIVE</span>
    </div>

    {/* NEXT CLASS */}
    <div className="flex items-center justify-between border-l border-zinc-200 pl-3">
      <div>
        <div className="text-zinc-900 font-medium">11:00</div>
        <div className="text-zinc-500">DBMS Lab</div>
      </div>
      <span className="text-zinc-400">NEXT</span>
    </div>

    {/* UPCOMING CLASS */}
    <div className="flex items-center justify-between border-l border-zinc-200 pl-3">
      <div>
        <div className="text-zinc-900 font-medium">13:30</div>
        <div className="text-zinc-500">AI Lab</div>
      </div>
      <span className="text-zinc-400">UPCOMING</span>
    </div>

  </div>
</div>

        {/* TASK STREAM */}
        <div className="space-y-3">

          <div className="text-xs font-semibold text-zinc-700">
            Academic Queue
          </div>

          <div className="rounded-xl border bg-zinc-50 p-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-zinc-900">
                Assignment Submission
              </div>
              <span className="text-[11px] text-red-500">DUE</span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">
              Software Engineering Report • Due in 18 hours
            </div>
          </div>

          <div className="rounded-xl border bg-zinc-50 p-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-zinc-900">
                Notice Broadcast
              </div>
              <span className="text-[11px] text-emerald-600">NEW</span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">
              Exam schedule updated for Semester VI
            </div>
          </div>

        </div>

        {/* AI SYSTEM LAYER */}
        <div className="rounded-xl border bg-white p-4">

<div className="flex items-center justify-between">
  <div className="text-xs font-semibold text-zinc-900">
    System Activity
  </div>

  <span className="text-[11px] text-indigo-600 font-medium animate-pulse">
    Running
  </span>
</div>

<div className="mt-2 space-y-1 font-mono text-[11px] text-zinc-500">
  <div>[OK] schedule_sync_completed</div>
  <div>[OK] attendance_stream_updated</div>
  <div>[OK] notifications_index_refreshed</div>
</div>

</div>

      </div>
    </div>
  );
}