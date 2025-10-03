export default function Home() {
  return (
    <main className="min-h-svh w-full bg-background">
      <section className="relative overflow-hidden py-12">
        <div className="absolute -left-1/4 -top-12 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-1/4 -bottom-12 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md animate-pulse-3d">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8"
                aria-hidden
              >
                <path d="M3 3a1 1 0 000 2h2.153a2 2 0 011.789 1.106l.468.937A2 2 0 009.2 8h1.6a2 2 0 001.79-1.957l-.468-3.743A2 2 0 0010.143 0H3a1 1 0 000 2h7.143a1 1 0 01.995.9l.468 3.743A1 1 0 0110.8 8H9.2a1 1 0 01-.894-.553l-.468-.937A4 4 0 005.153 3H3z" />
                <path d="M4 10a1 1 0 011-1h10a1 1 0 011 1v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              CA Track Pro
            </h1>
            <p className="mt-2 text-muted-foreground">
              Professional CA Articleship management for tracking work, skills, and team assignments
            </p>

            <div className="mt-6 inline-flex items-center gap-3">
              <button className="rounded-md bg-primary px-5 py-3 text-primary-foreground shadow-md transition-colors hover:bg-primary/90">
                Get Started
              </button>
              <button className="rounded-md border border-border px-5 py-3 text-foreground shadow-sm hover:bg-accent">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card-professional p-6">
              <h3 className="text-lg font-semibold text-foreground">Work Tracking</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Assign, track, and complete tasks with skill mapping.
              </p>
            </div>
            <div className="card-professional p-6">
              <h3 className="text-lg font-semibold text-foreground">Team Management</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage articles, mentors, and client assignments in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
