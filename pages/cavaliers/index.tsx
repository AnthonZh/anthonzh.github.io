import { title } from "@/components/primitives";
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

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>The Cavaliers</h1>
        </div>
      </section>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <p className="indent-8">
          In 2024 and 2025, I had the opportunity to march at the Cavaliers Drum
          and Bugle Corps. Being a part of this wonderful organization has
          brought me so much joy and camaderie, as well as some of the best
          memories of my life. Drum Corps International is a niche activity, if
          you are curious to learn more, this video below does a good job at at
          explaining what this amazing activity is.
        </p>
        <div className="flex items-center justify-center gap-8 p-8">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
            height="250vw"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/j53QbDBKFB0?si=xy8XBgxWaqXn7WnS"
            title="YouTube video player"
            width="445vh"
          />
        </div>
        <p className="indent-8">
          From this experience, I have learned to be a better team member,
          leader, and worker. I have learned about resilience and pushing
          through adversity to make something bigger than myself. I have made a
          point to remember these lessons, and the Cavaliers will always hold
          hold a special place in my heart. Marching a Drum and Bugle Corps is
          not easy, no matter where you go. The people at the Cavaliers have
          supported me not just in the summers I marched with them, but also all
          my personal endeavors. They are the reason I always push myself to
          become the best version of myself, no matter the circumstance.
        </p>
        <div className="flex flex-col items-center justify-center p-8 gap-4">
          <Slideshow images={images} interval={4500} />
          <p>Some cool pictures from the amazing Cavaliers media team.</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
