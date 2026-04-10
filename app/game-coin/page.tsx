import { FrozeverseShell } from "../components/frozeverse-shell";

export default function GameCoinPage() {
  return (
    <FrozeverseShell
      activePath="/game-coin"
      title={
        <>
          Power The
          <br />
          Froze Economy
        </>
      }
      description="Use the in-game coin to craft gear, unlock premium missions, reward guild play, and fuel the marketplace."
      ctaLabel="View Token Utility"
      sectionLabel="Game Coin"
      sceneVariant="scene-coin"
      cards={[
        {
          eyebrow: "Rewards",
          title: "Play-to-earn loops",
          copy: "Daily contracts, ranked ladders, and co-op missions feed a sustainable stream of utility rewards.",
        },
        {
          eyebrow: "Sinks",
          title: "Healthy circulation",
          copy: "Crafting, upgrades, fast travel, and item fusion create long-term demand across the ecosystem.",
        },
      ]}
      sideNote="Built for player retention"
      bottomLabel="Token utility"
    />
  );
}
