import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const EnquiryForm = ({ title = "Enquire Now", subtitle = "Fill in your details and we'll get back to you within 24 hours.", className = "" }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", city: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Enquiry submitted!", description: "Our team will contact you shortly." });
      setForm({ name: "", phone: "", email: "", course: "", city: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className={`premium-card p-6 md:p-8 ${className}`}>
      {title && <h3 className="font-heading text-lg font-semibold mb-1">{title}</h3>}
      {subtitle && <p className="text-sm text-muted-foreground mb-5">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium mb-1 block text-muted-foreground">Name *</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} className="rounded-lg h-10" />
          </div>
          <div>
            <label className="text-xs font-medium mb-1 block text-muted-foreground">Phone *</label>
            <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" maxLength={15} className="rounded-lg h-10" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium mb-1 block text-muted-foreground">Email *</label>
            <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" maxLength={255} className="rounded-lg h-10" />
          </div>
          <div>
            <label className="text-xs font-medium mb-1 block text-muted-foreground">City</label>
            <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Your city" maxLength={100} className="rounded-lg h-10" />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium mb-1 block text-muted-foreground">Course Interest</label>
          <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
            <SelectTrigger className="rounded-lg h-10">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cpt">Certified Personal Trainer (CPT)</SelectItem>
              <SelectItem value="nutrition">Certified Nutrition Coach</SelectItem>
              <SelectItem value="sports-nutrition">Certified Sports Nutrition Course</SelectItem>
              <SelectItem value="strength">Strength and Conditioning</SelectItem>
              <SelectItem value="other">Other / Not Sure</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="btn-yellow !rounded-xl max-w-[340px] w-full h-12 text-base font-heading font-semibold flex items-center justify-center"
            disabled={submitting}
          >
            <Send className="mr-2" size={18} />
            {submitting ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
