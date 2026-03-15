import { useVibeCheck } from "@/hooks/useVibeCheck";
import { EditorSidebar } from "@/components/vibecheck/EditorSidebar";
import { PhonePreview } from "@/components/vibecheck/PhonePreview";

const Index = () => {
  const {
    links,
    activeVibe,
    setActiveVibe,
    displayName,
    setDisplayName,
    bio,
    setBio,
    addLink,
    removeLink,
    toggleSpotlight,
    updateLink,
  } = useVibeCheck();

  const handleReorderLinks = (reordered: typeof links) => {
    // Direct state replacement via parent — Reorder.Group gives us the new array
    // We need to expose setLinks or use reorderLinks differently
  };

  return (
    <div className="flex min-h-screen bg-background">
      <EditorSidebar
        links={links}
        activeVibe={activeVibe}
        displayName={displayName}
        bio={bio}
        onSetVibe={setActiveVibe}
        onSetDisplayName={setDisplayName}
        onSetBio={setBio}
        onAddLink={addLink}
        onRemoveLink={removeLink}
        onToggleSpotlight={toggleSpotlight}
        onUpdateLink={updateLink}
        onReorderLinks={handleReorderLinks}
      />
      <PhonePreview
        links={links}
        activeVibe={activeVibe}
        displayName={displayName}
        bio={bio}
      />
    </div>
  );
};

export default Index;
