import { FrozeverseShell } from "../components/frozeverse-shell";

export default function MarketplacePage() {
  return (
    <FrozeverseShell
      activePath="/marketplace"
      title={
        <>
          Trade Across
          <br />
          Frozen Worlds
        </>
      }
      description="Buy, sell, and discover skins, relics, mounts, and resources inside an in-universe market terminal."
      ctaLabel="Open Marketplace"
      sectionLabel="Marketplace Hub"
      sceneVariant="scene-marketplace"
      cards={[
        {
          eyebrow: "Discovery",
          title: "Curated item lanes",
          copy: "Surface trending drops, top creators, and rare inventory with elegant filters and seasonal highlights.",
        },
        {
          eyebrow: "Trust",
          title: "Transparent history",
          copy: "Each item carries provenance, ownership trails, and rarity context before players commit to a trade.",
        },
      ]}
      sideNote="Live listing engine"
      bottomLabel="Global trading"
    />
  );
}
