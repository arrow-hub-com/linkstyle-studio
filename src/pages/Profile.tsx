import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Moon,
  Menu,
  Settings,
  Share2,
  Plus,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Home,
  Compass,
  PlusCircle,
  MessageCircle,
  MoreHorizontal,
  Camera,
  MapPin,
  ShieldCheck,
  CalendarDays,
  CheckCircle2,
  Circle,
  X,
} from "lucide-react";

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

function CollapsibleSection({
  title,
  icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      layout
      className="rounded-2xl border border-[hsl(220_13%_91%)] bg-[hsl(0_0%_100%)] overflow-hidden"
      transition={spring}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-[hsl(220_10%_50%)]">{icon}</span>
          <span className="font-display font-semibold text-[15px] text-[hsl(220_20%_20%)]">
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[hsl(220_10%_60%)]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Profile() {
  const [showNotice, setShowNotice] = useState(true);

  return (
    <div className="min-h-screen bg-[hsl(220_20%_97%)] font-display flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-[hsl(0_0%_100%/0.85)] border-b border-[hsl(220_13%_91%)]"
      >
        <div className="flex items-center justify-between px-5 py-3 max-w-lg mx-auto">
          <h1 className="font-mono font-bold text-lg tracking-[0.2em] text-[hsl(220_20%_15%)]">
            STRILIO
          </h1>
          <div className="flex items-center gap-1">
            <button className="relative p-2.5 rounded-xl hover:bg-[hsl(220_20%_94%)] transition-colors">
              <Bell className="w-5 h-5 text-[hsl(220_10%_40%)]" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[hsl(0_80%_60%)] text-[hsl(0_0%_100%)] text-[9px] font-bold flex items-center justify-center">
                9
              </span>
            </button>
            <button className="p-2.5 rounded-xl hover:bg-[hsl(220_20%_94%)] transition-colors">
              <Moon className="w-5 h-5 text-[hsl(220_10%_40%)]" />
            </button>
            <div className="flex items-center gap-2 ml-1 px-3 py-1.5 rounded-full bg-[hsl(220_20%_94%)] text-[11px] font-medium text-[hsl(220_10%_50%)]">
              NSFW
              <div className="w-8 h-[18px] rounded-full bg-[hsl(220_13%_85%)] relative">
                <div className="absolute left-0.5 top-0.5 w-[14px] h-[14px] rounded-full bg-[hsl(0_0%_100%)] shadow-sm transition-transform" />
              </div>
            </div>
            <button className="p-2.5 rounded-xl hover:bg-[hsl(220_20%_94%)] transition-colors">
              <Menu className="w-5 h-5 text-[hsl(220_10%_40%)]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Notice Banner */}
      <AnimatePresence>
        {showNotice && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mx-4 mt-3 flex items-start gap-3 rounded-xl bg-gradient-to-r from-[hsl(40_90%_95%)] to-[hsl(40_80%_97%)] border border-[hsl(40_60%_85%)] px-4 py-3">
              <span className="shrink-0 text-[10px] font-bold font-mono tracking-wider text-[hsl(25_90%_50%)] bg-[hsl(25_90%_50%/0.12)] px-2 py-0.5 rounded-md mt-0.5">
                NOTICE
              </span>
              <p className="text-[13px] leading-relaxed text-[hsl(30_20%_30%)] flex-1">
                Please correctly set images as NSFW on upload. Nudity or topless and higher.
              </p>
              <button onClick={() => setShowNotice(false)} className="shrink-0 mt-0.5 text-[hsl(30_20%_50%)] hover:text-[hsl(30_20%_30%)] transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24 space-y-4 max-w-lg mx-auto w-full">
        {/* Profile Card */}
        <motion.div
          {...fadeUp}
          className="rounded-2xl border border-[hsl(220_13%_91%)] bg-[hsl(0_0%_100%)] p-6 relative overflow-hidden"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(270_60%_60%)] to-[hsl(200_80%_55%)]" />

          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(220_15%_15%)] to-[hsl(220_15%_30%)] flex items-center justify-center overflow-hidden shadow-lg"
                >
                  <Camera className="w-8 h-8 text-[hsl(0_0%_100%/0.6)]" />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[hsl(var(--primary))] text-[hsl(0_0%_100%)] flex items-center justify-center shadow-md"
                >
                  <Plus className="w-3.5 h-3.5" />
                </motion.button>
              </div>

              {/* Info */}
              <div className="pt-0.5">
                <h2 className="font-display font-bold text-xl text-[hsl(220_20%_15%)] tracking-tight">
                  Strilio Tester
                </h2>
                <p className="text-[13px] text-[hsl(220_10%_50%)] mt-0.5">Tutor</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[hsl(220_10%_60%)]" />
                  <p className="text-[12px] text-[hsl(220_10%_55%)]">
                    Long Beach, California
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl hover:bg-[hsl(220_20%_95%)] transition-colors text-[hsl(220_10%_50%)]"
              >
                <Settings className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl hover:bg-[hsl(220_20%_95%)] transition-colors text-[hsl(220_10%_50%)]"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-5 pt-4 border-t border-[hsl(220_13%_93%)]">
            {[
              { count: 2, label: "Posts" },
              { count: 5, label: "Followers" },
              { count: 5, label: "Following" },
            ].map((stat) => (
              <motion.button
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 group"
              >
                <span className="font-display font-bold text-[15px] text-[hsl(var(--primary))] group-hover:text-[hsl(250_70%_55%)] transition-colors">
                  {stat.count}
                </span>
                <span className="text-[13px] text-[hsl(220_10%_50%)]">
                  {stat.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Profile Completion */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="rounded-2xl border border-[hsl(220_13%_91%)] bg-[hsl(0_0%_100%)] p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-semibold text-[15px] text-[hsl(220_20%_20%)]">
              Complete your profile
            </h3>
            <span className="text-[12px] font-mono text-[hsl(220_10%_55%)]">0 of 3</span>
          </div>
          <p className="text-[13px] text-[hsl(220_10%_55%)] mb-4 leading-relaxed">
            Upload images to unlock search and featured placement.
          </p>

          {/* Progress bar */}
          <div className="w-full h-1.5 rounded-full bg-[hsl(220_20%_93%)] mb-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "0%" }}
              className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(270_60%_60%)]"
            />
          </div>

          <div className="space-y-3">
            {[
              { label: "Search enabled", done: false },
              { label: "Featured eligible", done: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                {item.done ? (
                  <CheckCircle2 className="w-5 h-5 text-[hsl(142_72%_45%)]" />
                ) : (
                  <Circle className="w-5 h-5 text-[hsl(220_13%_82%)]" />
                )}
                <span
                  className={`text-[14px] ${
                    item.done
                      ? "text-[hsl(220_20%_20%)]"
                      : "text-[hsl(220_10%_55%)]"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 w-full py-2.5 rounded-xl border border-[hsl(220_13%_88%)] text-[14px] font-medium text-[hsl(220_20%_20%)] hover:bg-[hsl(220_20%_96%)] transition-colors"
          >
            Complete profile
          </motion.button>
        </motion.div>

        {/* Create + Dashboard */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="flex gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[hsl(220_15%_12%)] text-[hsl(0_0%_100%)] font-display font-semibold text-[15px] shadow-lg shadow-[hsl(220_15%_12%/0.2)]"
          >
            <Plus className="w-5 h-5" />
            Create
            <ChevronDown className="w-4 h-4 opacity-60" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3.5 rounded-2xl border border-[hsl(220_13%_88%)] bg-[hsl(0_0%_100%)] font-display font-semibold text-[15px] text-[hsl(220_20%_20%)] hover:bg-[hsl(220_20%_96%)] transition-colors"
          >
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </div>
          </motion.button>
        </motion.div>

        {/* Collapsible Sections */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="space-y-3"
        >
          <CollapsibleSection
            title="References & Safety"
            icon={<ShieldCheck className="w-5 h-5" />}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[hsl(142_40%_95%)] border border-[hsl(142_30%_88%)]">
                <CheckCircle2 className="w-5 h-5 text-[hsl(142_72%_45%)]" />
                <div>
                  <p className="text-[13px] font-medium text-[hsl(142_30%_25%)]">
                    Email verified
                  </p>
                  <p className="text-[11px] text-[hsl(142_15%_45%)]">
                    Your email has been confirmed
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[hsl(220_20%_96%)] border border-[hsl(220_13%_91%)]">
                <Circle className="w-5 h-5 text-[hsl(220_13%_78%)]" />
                <div>
                  <p className="text-[13px] font-medium text-[hsl(220_20%_30%)]">
                    ID verification
                  </p>
                  <p className="text-[11px] text-[hsl(220_10%_55%)]">
                    Verify your identity for trust badges
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Activity Horizon"
            icon={<CalendarDays className="w-5 h-5" />}
            defaultOpen
          >
            <div>
              <p className="text-[11px] font-mono font-medium tracking-wider text-[hsl(220_10%_55%)] mb-3">
                NEXT 7 DAYS
              </p>
              <div className="flex gap-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div
                    key={i}
                    className={`flex-1 flex flex-col items-center gap-1.5 py-2.5 rounded-xl text-[11px] font-medium ${
                      i === 0
                        ? "bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)]"
                        : "bg-[hsl(220_20%_96%)] text-[hsl(220_10%_55%)]"
                    }`}
                  >
                    <span>{day}</span>
                    <span className="text-[10px] opacity-60">{16 + i}</span>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, ...spring }}
        className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-[hsl(0_0%_100%/0.9)] border-t border-[hsl(220_13%_91%)]"
      >
        <div className="flex items-center justify-around max-w-lg mx-auto px-2 py-2">
          {[
            { icon: Home, label: "Home", active: true },
            { icon: Compass, label: "Explore", active: false },
            { icon: PlusCircle, label: "Create", active: false },
            { icon: MessageCircle, label: "Messages", active: false },
            { icon: MoreHorizontal, label: "More", active: false },
          ].map(({ icon: Icon, label, active }) => (
            <motion.button
              key={label}
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-colors ${
                active
                  ? "text-[hsl(220_20%_15%)]"
                  : "text-[hsl(220_10%_60%)] hover:text-[hsl(220_10%_40%)]"
              }`}
            >
              <Icon className="w-6 h-6" strokeWidth={active ? 2.2 : 1.6} />
              <span className="text-[10px] font-medium">{label}</span>
            </motion.button>
          ))}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pb-1">
          <div className="w-32 h-1 rounded-full bg-[hsl(220_15%_15%/0.15)]" />
        </div>
      </motion.nav>
    </div>
  );
}
