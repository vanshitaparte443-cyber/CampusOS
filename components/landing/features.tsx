import { Container } from "@/components/ui/container";
import {
  GraduationCap,
  CalendarDays,
  Bell,
  Bot,
} from "lucide-react";
import {
  sectionPadding,
  typography,
} from "@/components/ui/design-system";

export default function Features() {
  return (
    <section className={sectionPadding}>
      <Container>

        {/* Header */}
        <div className="max-w-2xl">
          <h2 className={typography.h2}>
            University Operations, Unified as Systems
          </h2>

          <p className={`mt-4 ${typography.body}`}>
            CampusOS replaces fragmented tools with a unified operating system for academics, communication, and administration.
          </p>
        </div>

        {/* SYSTEM LAYOUT */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">

          {/* LEFT — SYSTEM LIST */}
          <div className="space-y-6">

            <div className="border-l-2 border-indigo-500 pl-4">
              <div className="flex items-center gap-2 text-zinc-900 font-semibold tracking-tight">
                <GraduationCap className="h-4 w-4 text-indigo-600" />
                Academic Operations
              </div>
              <p className="text-sm text-zinc-600 leading-6 mt-1">
                Attendance, grading, courses, and student lifecycle management.
              </p>
              <div className="text-xs text-indigo-600 mt-1">Active</div>
            </div>

            <div className="border-l-2 border-indigo-500 pl-4">
              <div className="flex items-center gap-2 text-zinc-900 font-semibold tracking-tight">
                <CalendarDays className="h-4 w-4 text-indigo-600" />
                Scheduling Engine
              </div>
              <p className="text-sm text-zinc-600 leading-6 mt-1">
                Real-time timetable coordination across departments and faculty.
              </p>
              <div className="text-xs text-indigo-600 mt-1">Synced</div>
            </div>

            <div className="border-l-2 border-indigo-500 pl-4">
              <div className="flex items-center gap-2 text-zinc-900 font-semibold tracking-tight">
                <Bell className="h-4 w-4 text-indigo-600" />
                Communication Layer
              </div>
              <p className="text-sm text-zinc-600 leading-6 mt-1">
                Notices, alerts, and institutional announcements in one stream.
              </p>
              <div className="text-xs text-indigo-600 mt-1">Live</div>
            </div>

            <div className="border-l-2 border-indigo-500 pl-4">
              <div className="flex items-center gap-2 text-zinc-900 font-semibold tracking-tight">
                <Bot className="h-4 w-4 text-indigo-600" />
                Intelligence Layer
              </div>
              <p className="text-sm text-zinc-600 leading-6 mt-1">
                AI-powered insights across attendance, schedules, and academic data.
              </p>
              <div className="text-xs text-indigo-600 mt-1">Tracking</div>
            </div>

          </div>

          {/* RIGHT — DESCRIPTION BLOCK */}
          <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
            <h3 className="text-lg font-semibold text-zinc-900">
              Operational Architecture
            </h3>

            <p className="mt-4 text-sm text-zinc-600 leading-6">
              Instead of isolated features, CampusOS is designed as a connected
              operating system. Each module functions as part of a larger academic
              infrastructure where data flows in real time across departments.
            </p>

            <p className="mt-4 text-sm text-zinc-600 leading-6">
              This structure ensures universities operate with clarity, consistency, and coordination instead of fragmented systems.
            </p>

            <div className="mt-6 text-xs text-zinc-500">
              Architecture Layer • v1.0 System Design
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}