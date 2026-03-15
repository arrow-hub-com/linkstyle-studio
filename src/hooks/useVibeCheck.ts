import { useState, useCallback } from "react";
import { LinkItem, Vibe, VIBES } from "@/types/vibecheck";

const generateId = () => Math.random().toString(36).substring(2, 9);

const DEFAULT_LINKS: LinkItem[] = [
  { id: generateId(), title: "My Portfolio", url: "https://portfolio.dev", spotlight: true },
  { id: generateId(), title: "Latest Project", url: "https://github.com/me/project", spotlight: false },
  { id: generateId(), title: "Photography", url: "https://unsplash.com/@me", spotlight: false },
];

export function useVibeCheck() {
  const [links, setLinks] = useState<LinkItem[]>(DEFAULT_LINKS);
  const [activeVibe, setActiveVibe] = useState<Vibe>(VIBES[0]);
  const [displayName, setDisplayName] = useState("@yourusername");
  const [bio, setBio] = useState("Design-literate creator");

  const addLink = useCallback((title: string, url: string) => {
    setLinks((prev) => [
      ...prev,
      { id: generateId(), title, url, spotlight: false },
    ]);
  }, []);

  const removeLink = useCallback((id: string) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const toggleSpotlight = useCallback((id: string) => {
    setLinks((prev) =>
      prev.map((l) => (l.id === id ? { ...l, spotlight: !l.spotlight } : l))
    );
  }, []);

  const updateLink = useCallback((id: string, updates: Partial<LinkItem>) => {
    setLinks((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...updates } : l))
    );
  }, []);

  const reorderLinks = useCallback((newOrder: LinkItem[]) => {
    setLinks(newOrder);
  }, []);

  return {
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
    reorderLinks,
  };
}
