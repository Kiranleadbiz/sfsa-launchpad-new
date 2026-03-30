import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const WelcomeOfferPopup = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("offer-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("offer-dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      toast({ title: "🎉 Congratulations!", description: "Your ₹2,000 credits have been reserved!" });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: "hsl(204 100% 8%)" }}
          >
            {/* Top accent */}
            <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, hsl(45 100% 50%), hsl(35 100% 55%))" }} />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={18} />
            </button>

            <div className="p-8 pt-7">
              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-7">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -5, 0] }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                      style={{ background: "hsl(45 100% 50% / 0.15)" }}
                    >
                      <Gift className="text-accent" size={32} />
                    </motion.div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase mb-2">
                      Get <span className="text-accent">₹2,000</span> Free Credits!
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Fill your details & claim free credits redeemable on any SFSA course. Limited time offer!
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Full Name *"
                      maxLength={100}
                      className="rounded-xl h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent"
                    />
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Email Address *"
                      maxLength={255}
                      className="rounded-xl h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent"
                    />
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Phone Number *"
                      maxLength={15}
                      className="rounded-xl h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent"
                    />
                    <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                      <SelectTrigger className="rounded-xl h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent">
                        <SelectValue placeholder="Course Interest (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cpt">Certified Personal Trainer</SelectItem>
                        <SelectItem value="nutrition">Certified Nutrition Coach</SelectItem>
                        <SelectItem value="sports-nutrition">Sports Nutrition Coach</SelectItem>
                        <SelectItem value="strength">Strength & Conditioning</SelectItem>
                        <SelectItem value="other">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button type="submit" className="w-full btn-yellow !h-12 !text-sm !font-bold !rounded-xl" disabled={submitting}>
                      <Send className="mr-2" size={15} />
                      {submitting ? "Claiming..." : "Claim ₹2,000 Free Credits"}
                    </Button>
                  </form>

                  <p className="text-[11px] text-white/25 text-center mt-4">
                    No spam. Your details are safe with us.
                  </p>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{ background: "hsl(45 100% 50% / 0.15)" }}
                  >
                    <Gift className="text-accent" size={36} />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">You're All Set! 🎉</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    Your <span className="text-accent font-bold">₹2,000</span> credits have been reserved. Our team will reach out to help you redeem them on your chosen course.
                  </p>
                  <Button onClick={handleClose} className="btn-yellow !rounded-xl">
                    Start Exploring Courses
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeOfferPopup;
