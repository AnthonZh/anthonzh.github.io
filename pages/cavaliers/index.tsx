import Slideshow from "@/components/slideshow";
import DefaultLayout from "@/layouts/default";

const images = [
  "/cavaliers/24CAVALIERS-27-L.jpg",
  "/cavaliers/2025.8.9_smohlermedia-1205-X3.jpg",
  "/cavaliers/2025.8.9_smohlermedia-1211-X3.jpg",
  "/cavaliers/cstevens-8096-M.jpg",
  "/cavaliers/cstevens-18729-M.jpg",
  "/cavaliers/Julie Finals-042-M.jpg",
  "/cavaliers/Julie Finals-111-M.jpg",
  "/cavaliers/RW-CAV-25-finals-run-147-X3.jpg",
  "/cavaliers/RW-CAV-25-finals-run-152-X3.jpg",
  "/cavaliers/SPG00436-X3.jpg",
  "/cavaliers/SPG00582-M.jpg",
];

export default function CavaliersPage() {
  return (
    <DefaultLayout>
      <header className="grid gap-10 border-b border-[var(--study-rule)] py-20 md:grid-cols-[8rem_minmax(0,1fr)] md:py-28">
        <p className="study-kicker">Drum Corps</p>
        <div>
          <h1 className="study-heading text-6xl leading-[0.92] sm:text-7xl md:text-8xl">
            The Cavaliers
          </h1>
          <p className="mt-7 max-w-2xl font-display text-2xl leading-snug text-[var(--study-ink)] sm:text-3xl">
            In 2024 and 2025, I marched with the Cavaliers Drum and Bugle Corps,
            where I made some of the best memories of my life.
          </p>
        </div>
      </header>

      <section className="grid gap-10 py-16 md:grid-cols-[8rem_minmax(0,1fr)] md:py-24">
        <p className="study-kicker text-[var(--study-slate)]">2024–2025</p>
        <div className="max-w-3xl">
          <p className="study-prose">
            Being part of this wonderful organization brought me so much joy and
            camaraderie. Drum Corps International is a niche activity, so if you
            are curious to learn more, the video below does a good job
            explaining what it is.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--study-rule)] py-8 md:py-12">
        <div className="aspect-video w-full overflow-hidden bg-black">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
            className="h-full w-full"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/j53QbDBKFB0?si=xy8XBgxWaqXn7WnS"
            title="An introduction to Drum Corps International"
          />
        </div>
      </section>

      <section className="grid gap-10 py-16 md:grid-cols-[8rem_minmax(0,1fr)] md:py-24">
        <p className="study-kicker text-[var(--study-copper)]">
          What I learned
        </p>
        <div className="max-w-3xl">
          <p className="study-prose">
            From this experience, I learned to be a better team member, leader,
            and worker. I learned about resilience and pushing through adversity
            to make something bigger than myself. The Cavaliers hold a special
            place in my heart. The people there supported me during the summers
            I marched and in my personal endeavors. Their support continues to
            motivate me in my work and personal life.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--study-rule)] py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="study-kicker">Photos</p>
            <h2 className="study-heading mt-3 text-4xl sm:text-5xl">
              The Cavaliers, 2024–2025
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-5 text-[var(--study-faint)] sm:block">
            Photos courtesy of the Cavaliers media team
          </p>
        </div>
        <div>
          <Slideshow images={images} interval={4500} />
        </div>
      </section>
    </DefaultLayout>
  );
}
