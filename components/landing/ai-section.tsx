import { Container } from "@/components/ui/container";
import { Bot, Sparkles, BrainCircuit } from "lucide-react";
import { sectionPadding, typography, cardStyle, hoverCard } from "@/components/ui/design-system";

export default function AiSection() {
  return (
    <section className={sectionPadding}>
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700">
            <Sparkles className="h-4 w-4" />
            Intelligence Layer
          </div>
          <h2 className={`mt-6 ${typography.h2}`}>
          CampusOS is more than software.
          
            <span className="block text-indigo-600">
            It’s an intelligent academic system.
            </span>
          </h2>
          <p className={`mt-4 ${typography.body}`}>
          Every module in CampusOS uses contextual intelligence to understand academic activity, schedules, and institutional workflows in real time.
          </p>
        </div>

        {/* AI Core Card */}
        <div className={`${cardStyle} mt-14 p-10 bg-gradient-to-b from-white to-zinc-50`}>          
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-indigo-50 p-4">
              <BrainCircuit className="h-6 w-6 text-indigo-600" />
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                Context-Aware Academic Intelligence
              </h3>

              <p className="text-sm text-zinc-600 leading-6 mt-1">
                Understands campus activity without manual input
              </p>
            </div>
          </div>

          {/* Capability rows */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            
            <div className={`${cardStyle} ${hoverCard} p-5`}>
              <h4 className="font-medium text-zinc-900">Smart Summaries</h4>
              <p className="mt-2 text-sm text-zinc-600">
                Auto-generates summaries of notices, classes, and assignments.
              </p>
            </div>

            
            <div className={`${cardStyle} ${hoverCard} p-5`}>
              <h4 className="font-medium text-zinc-900">Predictive Alerts</h4>
              <p className="mt-2 text-sm text-zinc-600">
                Notifies students before deadlines, attendance risks, and schedule conflicts.
              </p>
            </div>
            <div className={`${cardStyle} ${hoverCard} p-5`}>
              <h4 className="font-medium text-zinc-900">Campus Memory</h4>
              <p className="mt-2 text-sm text-zinc-600">
                Learns patterns of academic activity across semesters.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom subtle strip */}
        <div className="mt-10 flex items-center gap-3 text-sm text-zinc-500">
          <Bot className="h-4 w-4 text-indigo-600" />
          AI operates silently across all CampusOS modules
        </div>
      </Container>
    </section>
  );
}