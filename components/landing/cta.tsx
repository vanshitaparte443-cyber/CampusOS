import { Container } from "@/components/ui/container";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sectionPadding, typography, cardStyle } from "@/components/ui/design-system";

export default function CTA() {
  return (
    <section className={sectionPadding}>
      <Container>
        <div className={`${cardStyle} relative overflow-hidden px-10 py-16`}>
          {/* soft glow background */}
          <div className={`absolute inset-0 -z-10`}>
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-100 blur-3xl opacity-40" />
          </div>

          {/* content */}
          <div className={`max-w-2xl`}>
            
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700">
              <Sparkles className="h-4 w-4" />
              Start Building
            </div>

            <h2 className={`mt-6 ${typography.h2}`}>
            Bring your entire campus
            
              <span className={`block text-indigo-600`}>
                Into one connected system
              </span>
            </h2>

            <p className={`mt-4 ${typography.body}`}>
            CampusOS replaces fragmented tools with a unified platform for students, faculty, and administrators — built for scale and clarity.
            </p>

            {/* buttons */}
            <div className={`mt-8 flex flex-wrap gap-4`}>
              <Button size="lg" className={`rounded-xl px-7`}>
                Get Started
                <ArrowRight className={`ml-2 h-5 w-5`} />
              </Button>

              <Button size="lg" variant="outline" className={`rounded-xl px-7`}>
                Request Demo
              </Button>
            </div>

          </div>

          {/* right subtle visual hint */}
          <div className={`absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block`}>
            <div className={`h-40 w-40 rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm`} />
          </div>

        </div>
      </Container>
    </section>
  );
}