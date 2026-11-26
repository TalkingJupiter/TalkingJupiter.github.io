import Nav from "@/components/ui/Nav";
import Story from "@/components/story/Story";

export const metadata = {
  title: "My Story | Batuhan Sencer",
  description:
    "How Batuhan Sencer got into HPC, energy-aware ML systems, and research at Texas Tech.",
};

export default function StoryPage() {
  return (
    <>
      <Nav />
      <Story />
    </>
  );
}
