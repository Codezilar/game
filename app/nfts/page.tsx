import { FrozeverseShell } from "../components/frozeverse-shell";

export default function NftsPage() {
  return (
    <FrozeverseShell
      activePath="/nfts"
      title={
        <>
          Own Rare
          <br />
          Digital Relics
        </>
      }
      description="Collect hero skins, mounts, artifacts, and forged companions with scarcity tiers anchored to seasonal drops."
      ctaLabel="Explore Collection"
      sectionLabel="NFT Vault"
      sceneVariant="scene-nfts"
      cards={[
        {
          eyebrow: "Scarcity",
          title: "Curated supply",
          copy: "Genesis relics and event mints stay intentionally limited to keep each drop meaningful.",
        },
        {
          eyebrow: "Utility",
          title: "Assets that unlock play",
          copy: "Exclusive cosmetics, questlines, and staking perks tie ownership back into the game universe.",
        },
      ]}
      sideNote="Wallet onboarding simplified"
      bottomLabel="Verified collections"
    />
  );
}
