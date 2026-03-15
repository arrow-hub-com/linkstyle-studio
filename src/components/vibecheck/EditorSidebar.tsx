import { useState } from "react";
import { Plus, GripVertical, Trash2, Star, X } from "lucide-react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { LinkItem, Vibe, VIBES } from "@/types/vibecheck";

interface EditorSidebarProps {
  links: LinkItem[];
  activeVibe: Vibe;
  displayName: string;
  bio: string;
  onSetVibe: (vibe: Vibe) => void;
  onSetDisplayName: (name: string) => void;
  onSetBio: (bio: string) => void;
  onAddLink: (title: string, url: string) => void;
  onRemoveLink: (id: string) => void;
  onToggleSpotlight: (id: string) => void;
  onUpdateLink: (id: string, updates: Partial<LinkItem>) => void;
  onReorderLinks: (links: LinkItem[]) => void;
}

export function EditorSidebar({
  links,
  activeVibe,
  displayName,
  bio,
  onSetVibe,
  onSetDisplayName,
  onSetBio,
  onAddLink,
  onRemoveLink,
  onToggleSpotlight,
  onUpdateLink,
  onReorderLinks,
}: EditorSidebarProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleAdd = () => {
    if (newTitle.trim() && newUrl.trim()) {
      onAddLink(newTitle.trim(), newUrl.trim());
      setNewTitle("");
      setNewUrl("");
      setIsAdding(false);
    }
  };

  return (
    <div className="w-[400px] h-screen flex flex-col bg-background border-r border-border">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h1 className="font-display text-xl font-bold tracking-tight text-foreground">
          VibeCheck
        </h1>
        <p className="text-xs text-muted-foreground mt-1 tracking-wide">
          Your corner of the internet, calibrated.
        </p>
      </div>

      {/* Profile */}
      <div className="p-6 border-b border-border space-y-3">
        <label className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Identity
        </label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => onSetDisplayName(e.target.value)}
          className="w-full bg-editor-surface border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary font-display"
          placeholder="@username"
        />
        <input
          type="text"
          value={bio}
          onChange={(e) => onSetBio(e.target.value)}
          className="w-full bg-editor-surface border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary font-display"
          placeholder="A short bio"
        />
      </div>

      {/* Vibe Selector */}
      <div className="p-6 border-b border-border">
        <label className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-3 block">
          Select your frequency
        </label>
        <div className="flex gap-2">
          {VIBES.map((vibe) => (
            <button
              key={vibe.id}
              onClick={() => onSetVibe(vibe)}
              className={`relative flex-1 h-10 rounded-lg border-2 transition-all duration-150 ${
                activeVibe.id === vibe.id
                  ? "border-foreground scale-105"
                  : "border-border hover:border-muted-foreground"
              }`}
              style={{ background: vibe.preview }}
              title={vibe.name}
            >
              {activeVibe.id === vibe.id && (
                <motion.div
                  layoutId="vibe-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground"
                />
              )}
            </button>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground mt-2 text-center">
          {activeVibe.name}
        </p>
      </div>

      {/* Links */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-2">
        <label className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-3 block">
          Destinations
        </label>

        <Reorder.Group
          axis="y"
          values={links}
          onReorder={onReorderLinks}
          className="space-y-2"
        >
          <AnimatePresence mode="popLayout">
            {links.map((link) => (
              <Reorder.Item
                key={link.id}
                value={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex items-center gap-2 bg-editor-surface border border-border rounded-lg p-3 group cursor-grab active:cursor-grabbing"
              >
                <GripVertical className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <input
                    type="text"
                    value={link.title}
                    onChange={(e) =>
                      onUpdateLink(link.id, { title: e.target.value })
                    }
                    className="w-full bg-transparent text-sm text-foreground font-medium truncate focus:outline-none"
                  />
                  <input
                    type="text"
                    value={link.url}
                    onChange={(e) =>
                      onUpdateLink(link.id, { url: e.target.value })
                    }
                    className="w-full bg-transparent text-[11px] text-muted-foreground truncate focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => onToggleSpotlight(link.id)}
                  className={`p-1 rounded transition-colors ${
                    link.spotlight
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Toggle spotlight"
                >
                  <Star
                    className="w-3.5 h-3.5"
                    fill={link.spotlight ? "currentColor" : "none"}
                  />
                </button>
                <button
                  onClick={() => onRemoveLink(link.id)}
                  className="p-1 rounded text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>

        {/* Add form */}
        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-editor-surface border border-border rounded-lg p-3 space-y-2 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground uppercase tracking-wider">
                    New destination
                  </span>
                  <button
                    onClick={() => setIsAdding(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Title"
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                />
                <input
                  type="text"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                />
                <button
                  onClick={handleAdd}
                  className="w-full bg-primary text-primary-foreground rounded-md py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Add destination
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom add button */}
      {!isAdding && (
        <div className="p-4 border-t border-border backdrop-blur-xl">
          <button
            onClick={() => setIsAdding(true)}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            Add a destination
          </button>
        </div>
      )}
    </div>
  );
}
