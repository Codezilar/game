import { FrozeverseShell } from "./components/frozeverse-shell";

export default function Home() {
  return (
    <FrozeverseShell
      title={
        <>
          Your Own Story
          <br />
          In Frozeverse
        </>
      }
      description="Adventure with your Mons in extranland, battle other legends, and earn as you play."
      ctaLabel="Try Now For Free"
      cards={[
        {
          eyebrow: "World Lore",
          title: "Crystal-born factions",
          copy: "Step into frozen biomes, machine ruins, and living portals that react to every mission.",
        },
        {
          eyebrow: "Live Events",
          title: "Season arcs in motion",
          copy: "New raids, story drops, and world bosses reshape the map on a rolling cadence.",
        },
      ]}
      sideNote="Ready for launch squads"
      bottomLabel="Available on the"
    />
  );
}
