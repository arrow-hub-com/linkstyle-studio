import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkItem, Vibe } from "@/types/vibecheck";

interface PhonePreviewProps {
  links: LinkItem[];
  activeVibe: Vibe;
  displayName: string;
  bio: string;
}

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

export function PhonePreview({
  links,
  activeVibe,
  displayName,
  bio,
}: PhonePreviewProps) {
  return (
    <div className="flex-1 flex items-center justify-center bg-editor p-[5vh]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={spring}
        className={`relative w-[375px] max-h-[80vh] aspect-[9/19.5] rounded-[40px] border-2 border-border overflow-hidden flex flex-col ${activeVibe.className}`}
        style={{ background: "hsl(var(--vibe-bg))" }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-8 pt-4 pb-2">
          <span className="text-[10px] font-mono" style={{ color: "hsl(var(--vibe-text-secondary))" }}>
            9:41
          </span>
          <div className="flex gap-1">
            <div className="w-3 h-1.5 rounded-sm" style={{ background: "hsl(var(--vibe-text-secondary))" }} />
            <div className="w-3 h-1.5 rounded-sm" style={{ background: "hsl(var(--vibe-text-secondary))" }} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-8">
          {/* Profile */}
          <div className="text-center pt-8 pb-6">
            <motion.div
              layout
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold font-display"
              style={{
                background: "hsl(var(--vibe-accent))",
                color: "hsl(var(--vibe-bg))",
              }}
            >
              {displayName.replace("@", "").charAt(0).toUpperCase()}
            </motion.div>
            <motion.h2
              layout
              className="font-display text-lg font-semibold tracking-tight"
              style={{ color: "hsl(var(--vibe-text))" }}
            >
              {displayName}
            </motion.h2>
            <motion.p
              layout
              className="text-xs mt-1 font-display"
              style={{ color: "hsl(var(--vibe-text-secondary))" }}
            >
              {bio}
            </motion.p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {links.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p
                    className="text-sm font-display italic opacity-40"
                    style={{ color: "hsl(var(--vibe-text))" }}
                  >
                    Waiting for your first move
                  </p>
                </motion.div>
              ) : (
                links.map((link) => (
                  <motion.a
                    key={link.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "hsl(var(--vibe-card-hover))",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={spring}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-between backdrop-blur-md font-display ${
                      link.spotlight ? "p-5" : "p-4"
                    }`}
                    style={{
                      background: "hsl(var(--vibe-card))",
                      border: `1px solid hsl(var(--vibe-border))`,
                      borderRadius: "var(--vibe-radius)",
                      color: "hsl(var(--vibe-text))",
                    }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {link.spotlight && (
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-glow"
                          style={{ background: "hsl(var(--vibe-accent))" }}
                        />
                      )}
                      <span
                        className={`font-medium tracking-tight truncate ${
                          link.spotlight ? "text-base" : "text-sm"
                        }`}
                        style={{ textWrap: "balance" } as React.CSSProperties}
                      >
                        {link.title}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </motion.a>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex justify-center pb-3 pt-1">
          <div
            className="w-28 h-1 rounded-full"
            style={{ background: "hsl(var(--vibe-text) / 0.2)" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
