import { FrozeverseShell } from "../components/frozeverse-shell";

export default function GameplayPage() {
  return (
    <FrozeverseShell
      activePath="/gameplay"
      title={
        <>
          Fast Combat
          <br />
          Deep Progression
        </>
      }
      description="Chain movement skills, capture elemental relics, and evolve your squad through raids, duels, and world events."
      ctaLabel="Watch Gameplay"
      sectionLabel="Gameplay Systems"
      sceneVariant="scene-gameplay"
      cards={[
        {
          eyebrow: "Combat Loop",
          title: "Dash, cast, and counter",
          copy: "Every encounter blends action movement with cooldown-based abilities and summon timing.",
        },
        {
          eyebrow: "Progression",
          title: "Build your legend",
          copy: "Upgrade classes, relics, and companions to unlock higher-tier regions and boss realms.",
        },
      ]}
      sideNote="Controller and keyboard tuned"
      bottomLabel="Competitive modes"
    />
  );
}
