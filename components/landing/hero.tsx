import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import HeroDashboard from "./hero-dashboard";
import {
  ArrowRight,
  Sparkles,
  Bot,
  CalendarDays,
  GraduationCap,
  Bell,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-100 blur-3xl opacity-50" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700">
              <Sparkles className="h-4 w-4" />
              Academic Operating System
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-zinc-900 lg:text-7xl leading-[1.05]">
              The Operating System
              <span className="block text-indigo-600">
                for Modern Universities
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-600">
            Unify academics, administration, and campus operations into a single system.
            From attendance and scheduling to communication and workflows, CampusOS keeps every part of your university connected in real time.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl px-7">
                Explore System
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button size="lg" variant="outline" className="rounded-xl px-7">
              View Architecture
              </Button>
            </div>

            {/* Highlights */}
            <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-zinc-600">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
                Unified Academic Records
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-indigo-600" />
                Live Operational Insights
              </div>

              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-indigo-600" />
                AI-Assisted Workflows
              </div>

              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-indigo-600" />
                Institutional Scale
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center lg:justify-end">

            {/* background glow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-[420px] w-[420px] rounded-full bg-indigo-100 blur-3xl opacity-40" />
            </div>

            {/* dashboard frame */}
            <div className="relative w-full max-w-md">

              <div className="rounded-3xl p-[1px] bg-gradient-to-b from-zinc-200 to-zinc-100 shadow-2xl">
                <div className="rounded-3xl bg-white overflow-hidden">
                  <HeroDashboard />
                </div>
              </div>

              {/* floating label */}
              <div className="absolute -top-4 left-6">
                <div className="rounded-full bg-white border border-zinc-200 shadow-sm px-3 py-1 text-[11px] text-zinc-600">
                  CampusOS • Live Environment
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}