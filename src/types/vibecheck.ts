export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: string;
  spotlight: boolean;
}

export interface Vibe {
  id: string;
  name: string;
  className: string;
  preview: string; // accent color for the swatch
}

export const VIBES: Vibe[] = [
  { id: "onyx", name: "Onyx", className: "vibe-onyx", preview: "hsl(263.4 70% 50.4%)" },
  { id: "arctic", name: "Arctic", className: "vibe-arctic", preview: "hsl(220 90% 56%)" },
  { id: "ember", name: "Ember", className: "vibe-ember", preview: "hsl(24 95% 53%)" },
  { id: "moss", name: "Moss", className: "vibe-moss", preview: "hsl(142 72% 45%)" },
  { id: "lavender", name: "Lavender", className: "vibe-lavender", preview: "hsl(270 80% 65%)" },
];
