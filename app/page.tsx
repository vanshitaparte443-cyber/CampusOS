import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
          🚀 Modern University ERP
        </p>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
          CampusOS
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
          The Operating System for Modern Universities. Manage attendance,
          academics, assignments, communication, and administration in one
          intelligent platform.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg">Get Started</Button>

          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>
    </main>
  );
}