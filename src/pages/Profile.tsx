import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Settings,
  Share2,
  Plus,
  ChevronRight,
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
  Zap,
  Star,
  TrendingUp,
  Eye,
} from "lucide-react";

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Profile() {
  const [showNotice, setShowNotice] = useState(true);
  const [activeTab, setActiveTab] = useState<"posts" | "about" | "reviews">("posts");

  return (
    <div className="min-h-screen bg-background font-display flex flex-col">
      {/* Immersive Hero */}
      <div className="relative">
        {/* Cover image area */}
        <div className="h-48 bg-gradient-to-br from-primary/30 via-secondary to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.4),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(270_60%_40%/0.3),transparent_60%)]" />
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }} />
          
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10">
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono font-bold text-sm tracking-[0.3em] text-foreground/90"
            >
              STRILIO
            </motion.h1>
            <div className="flex items-center gap-1">
              <button className="relative p-2 rounded-full bg-foreground/10 backdrop-blur-md hover:bg-foreground/20 transition-colors">
                <Bell className="w-4 h-4 text-foreground/80" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-primary-foreground text-[9px] font-bold flex items-center justify-center">
                  9
                </span>
              </button>
              <button className="p-2 rounded-full bg-foreground/10 backdrop-blur-md hover:bg-foreground/20 transition-colors">
                <Settings className="w-4 h-4 text-foreground/80" />
              </button>
            </div>
          </div>
        </div>

        {/* Avatar overlapping cover */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 z-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
            className="relative"
          >
            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-muted to-secondary border-4 border-background flex items-center justify-center shadow-2xl overflow-hidden rotate-3">
              <Camera className="w-10 h-10 text-muted-foreground/50" />
            </div>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg ring-2 ring-background"
            >
              <Plus className="w-4 h-4" />
            </motion.button>
            {/* Online indicator */}
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[hsl(142_72%_45%)] ring-2 ring-background" />
          </motion.div>
        </div>
      </div>

      {/* Profile Info - centered below avatar */}
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="pt-20 px-5 text-center max-w-lg mx-auto w-full"
      >
        <motion.div variants={fadeIn}>
          <h2 className="font-display font-bold text-2xl text-foreground tracking-tight">
            Strilio Tester
          </h2>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-sm text-muted-foreground">Tutor</span>
            <span className="text-muted-foreground/30">·</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-muted-foreground/60" />
              <span className="text-sm text-muted-foreground">Long Beach, CA</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Row - bold and graphic */}
        <motion.div variants={fadeIn} className="flex items-center justify-center gap-8 mt-6">
          {[
            { count: "2", label: "Posts", icon: Eye },
            { count: "5", label: "Followers", icon: Star },
            { count: "5", label: "Following", icon: TrendingUp },
          ].map((stat) => (
            <motion.button
              key={stat.label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-0.5 group"
            >
              <span className="font-mono font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                {stat.count}
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
                {stat.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div variants={fadeIn} className="flex gap-3 mt-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Create Post
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-3 rounded-2xl border border-border bg-card text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Notice Banner */}
      <AnimatePresence>
        {showNotice && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden max-w-lg mx-auto w-full px-5"
          >
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[hsl(40_80%_50%/0.08)] border border-[hsl(40_60%_50%/0.15)] px-4 py-3">
              <span className="shrink-0 text-[10px] font-bold font-mono tracking-wider text-[hsl(40_90%_60%)] bg-[hsl(40_90%_60%/0.12)] px-2 py-0.5 rounded-md mt-0.5">
                NOTICE
              </span>
              <p className="text-[13px] leading-relaxed text-muted-foreground flex-1">
                Please correctly set images as NSFW on upload. Nudity or topless and higher.
              </p>
              <button onClick={() => setShowNotice(false)} className="shrink-0 mt-0.5 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area */}
      <div className="flex-1 px-5 pt-5 pb-28 space-y-4 max-w-lg mx-auto w-full">
        {/* Tab Navigation */}
        <div className="flex gap-1 p-1 rounded-2xl bg-card border border-border">
          {(["posts", "about", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Profile Completion - reimagined as a glass card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/50 p-5 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display font-bold text-base text-foreground">
                Complete your profile
              </h3>
              <span className="font-mono text-xs text-primary font-bold">0/3</span>
            </div>
            <p className="text-[13px] text-muted-foreground mb-4">
              Upload images to unlock search and featured placement.
            </p>

            {/* Segmented progress */}
            <div className="flex gap-1.5 mb-5">
              {[false, false, false].map((done, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full transition-colors ${
                    done ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <div className="space-y-2.5">
              {[
                { label: "Search enabled", done: false },
                { label: "Featured eligible", done: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/50">
                  <div className="flex items-center gap-3">
                    {item.done ? (
                      <CheckCircle2 className="w-5 h-5 text-[hsl(142_72%_45%)]" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground/40" />
                    )}
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* References & Safety - Card style */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-3xl border border-border bg-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-[hsl(142_72%_45%/0.1)] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[hsl(142_72%_45%)]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[15px] text-foreground">Trust & Safety</h3>
              <p className="text-[11px] text-muted-foreground">1 of 2 verified</p>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[hsl(142_72%_45%/0.06)] border border-[hsl(142_72%_45%/0.12)]">
              <CheckCircle2 className="w-5 h-5 text-[hsl(142_72%_45%)]" />
              <div className="flex-1">
                <p className="text-[13px] font-medium text-foreground">Email verified</p>
                <p className="text-[11px] text-muted-foreground">Confirmed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50">
              <Circle className="w-5 h-5 text-muted-foreground/40" />
              <div className="flex-1">
                <p className="text-[13px] font-medium text-foreground">ID verification</p>
                <p className="text-[11px] text-muted-foreground">Unlock trust badges</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/40" />
            </div>
          </div>
        </motion.div>

        {/* Activity Horizon - reimagined */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl border border-border bg-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[15px] text-foreground">This Week</h3>
              <p className="text-[11px] text-muted-foreground">Activity overview</p>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.04 }}
                className={`flex flex-col items-center gap-2 py-3 rounded-2xl text-[11px] font-medium transition-all ${
                  i === 0
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                }`}
              >
                <span className="font-semibold">{day}</span>
                <span className={`text-[10px] ${i === 0 ? "text-primary-foreground/70" : "opacity-50"}`}>
                  {16 + i}
                </span>
                {i === 0 && <div className="w-1 h-1 rounded-full bg-primary-foreground" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation - floating pill */}
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-4 left-4 right-4 z-50"
      >
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-around bg-card/95 backdrop-blur-xl border border-border rounded-3xl px-2 py-2 shadow-2xl">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Compass, label: "Explore", active: false },
              { icon: PlusCircle, label: "", active: false, isCreate: true },
              { icon: MessageCircle, label: "Messages", active: false },
              { icon: MoreHorizontal, label: "More", active: false },
            ].map(({ icon: Icon, label, active, isCreate }) => (
              <motion.button
                key={label || "create"}
                whileTap={{ scale: 0.85 }}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all ${
                  isCreate
                    ? "bg-primary text-primary-foreground px-5 py-2.5 shadow-lg shadow-primary/30"
                    : active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={isCreate ? "w-6 h-6" : "w-5 h-5"} strokeWidth={active ? 2.2 : 1.6} />
                {label && !isCreate && (
                  <span className="text-[10px] font-medium">{label}</span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
