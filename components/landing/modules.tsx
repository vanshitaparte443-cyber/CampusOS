import { Container } from "@/components/ui/container";
import { CalendarDays, Bell, Bot, ClipboardList, BookOpen } from "lucide-react";
import { sectionPadding, typography, cardStyle } from "@/components/ui/design-system";

const modules = [
  {
    title: "Attendance Engine",
    description:
      "Real-time attendance tracking with automated calculation and faculty control.",
    icon: CalendarDays,
  },
  {
    title: "Timetable System",
    description:
      "Dynamic scheduling system that adapts to departments, batches, and faculty availability.",
    icon: BookOpen,
  },
  {
    title: "Assignment Manager",
    description:
      "Centralized assignment distribution, submission tracking, and evaluation workflow.",
    icon: ClipboardList,
  },
  {
    title: "Communication Layer",
    description:
      "Institution-wide notices, alerts, and department-level announcements.",
    icon: Bell,
  },
  {
    title: "AI Intelligence Layer",
    description:
      "Context-aware assistant for students, faculty, and administrators.",
    icon: Bot,
  },
];

export default function Modules() {
  return (
    <section className={sectionPadding}>
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
        <h2 className={typography.h2}>
            Built as a Modular Operating System
          </h2>
          <p className={typography.body}>
            Every part of CampusOS is designed as an independent system that
            works together seamlessly inside a unified architecture.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 space-y-4">
          {modules.map((module) => (
            <div
              key={module.title}
              className={`${cardStyle} flex items-start gap-4 p-6`}
            >
              <div className="rounded-xl bg-indigo-50 p-3">
                <module.icon className="h-5 w-5 text-indigo-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {module.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-600 leading-6">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}