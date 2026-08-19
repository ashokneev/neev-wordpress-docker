import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContactForm, ContactSource } from "@/contexts/ContactFormContext";

const AREAS_OF_INTEREST = [
  { value: "general", label: "General Inquiry" },
  { value: "enterprise-application-services", label: "Enterprise Application Services" },
  { value: "enterprise-integration-services", label: "Enterprise Integration Services" },
  { value: "product-engineering", label: "Product Engineering" },
  { value: "it-security-transformation", label: "IT & Security Transformation" },
  { value: "data-analytics", label: "Data & Analytics" },
  { value: "application-management-services", label: "Application Management Services" },
  { value: "virtual-captive-center", label: "Virtual Captive Center" },
  { value: "oracle", label: "Oracle" },
  { value: "salesforce", label: "Salesforce" },
  { value: "servicenow", label: "ServiceNow" },
  { value: "workato", label: "Workato" },
  { value: "life-sciences", label: "Life Sciences" },
  { value: "healthcare", label: "Healthcare" },
  { value: "cpg-retail", label: "CPG & Retail" },
];

const SOURCE_TO_AREA: Partial<Record<ContactSource, string>> = {
  oracle: "oracle",
  salesforce: "salesforce",
  servicenow: "servicenow",
  workato: "workato",
  "enterprise-application-services": "enterprise-application-services",
  "enterprise-integration-services": "enterprise-integration-services",
  "product-engineering": "product-engineering",
  "it-security-transformation": "it-security-transformation",
  "data-analytics": "data-analytics",
  "application-management-services": "application-management-services",
  "virtual-captive-center": "virtual-captive-center",
  "life-sciences": "life-sciences",
  healthcare: "healthcare",
  "cpg-retail": "cpg-retail",
};

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  workEmail: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().min(1, "Company is required").max(150),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  areaOfInterest: z.string().min(1, "Please select an area"),
  message: z.string().trim().min(10, "Please share a few details (10+ chars)").max(2000),
  // honeypot — must remain empty
  website: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

const ContactFormModal = () => {
  const { isOpen, closeContactForm, source } = useContactForm();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      company: "",
      phone: "",
      areaOfInterest: SOURCE_TO_AREA[source] ?? "general",
      message: "",
      website: "",
    },
  });

  const areaOfInterest = watch("areaOfInterest");

  // Sync area of interest when modal opens with a new source
  useEffect(() => {
    if (isOpen) {
      const preset = SOURCE_TO_AREA[source] ?? "general";
      setValue("areaOfInterest", preset);
      setSubmitted(false);
    }
  }, [isOpen, source, setValue]);

  const onSubmit = async (data: FormValues) => {
    // Honeypot trip — silently succeed
    if (data.website && data.website.length > 0) {
      setSubmitted(true);
      return;
    }

    const areaLabel =
      AREAS_OF_INTEREST.find((a) => a.value === data.areaOfInterest)?.label ?? data.areaOfInterest;

    // Mailto fallback so leads aren't lost until backend is wired
    const subject = `New inquiry — ${areaLabel}`;
    const body = [
      `Name: ${data.fullName}`,
      `Work Email: ${data.workEmail}`,
      `Company: ${data.company}`,
      data.phone ? `Phone: ${data.phone}` : null,
      `Area of Interest: ${areaLabel}`,
      `Source: ${source}`,
      `Page: ${typeof window !== "undefined" ? window.location.href : ""}`,
      "",
      "Message:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:info@neevsystems.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's mail client as a safety net
    try {
      window.location.href = mailto;
    } catch {
      // ignore
    }

    // Console-log payload shape for the future backend wire-up
    // eslint-disable-next-line no-console
    console.info("[contact-form] submission", {
      ...data,
      source,
      areaLabel,
      page: typeof window !== "undefined" ? window.location.href : "",
    });

    toast.success("Thanks! We'll be in touch within one business day.");
    setSubmitted(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeContactForm();
      // Reset after close animation
      setTimeout(() => {
        reset();
        setSubmitted(false);
      }, 250);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-xl p-0 gap-0 border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/10 max-h-[90vh] overflow-y-auto">
        {/* Indigo hairline top accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent dark:via-indigo-500/50" />

        {submitted ? (
          <div className="px-6 sm:px-8 py-12 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">Thank you!</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Your message is on its way. We'll be in touch within one business day.
            </p>
            <Button
              className="mt-8 rounded-xl px-6"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="px-6 sm:px-8 pt-6 sm:pt-8 pb-2">
              <DialogTitle className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Let's start a conversation
                </span>
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Tell us about your needs and we'll route you to the right expert.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 space-y-4">
              {/* Honeypot field — visually hidden */}
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label>
                  Website
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-destructive">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="workEmail">
                    Work Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="workEmail"
                    type="email"
                    placeholder="jane@company.com"
                    autoComplete="email"
                    {...register("workEmail")}
                  />
                  {errors.workEmail && (
                    <p className="text-xs text-destructive">{errors.workEmail.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="company">
                    Company <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="company"
                    placeholder="Acme Inc."
                    autoComplete="organization"
                    {...register("company")}
                  />
                  {errors.company && (
                    <p className="text-xs text-destructive">{errors.company.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 555 000 0000"
                    autoComplete="tel"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="areaOfInterest">
                  Area of Interest <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={areaOfInterest}
                  onValueChange={(v) => setValue("areaOfInterest", v, { shouldValidate: true })}
                >
                  <SelectTrigger id="areaOfInterest">
                    <SelectValue placeholder="Choose an area" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    {AREAS_OF_INTEREST.map((a) => (
                      <SelectItem key={a.value} value={a.value}>
                        {a.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.areaOfInterest && (
                  <p className="text-xs text-destructive">{errors.areaOfInterest.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">
                  How can we help? <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us a bit about your project or question..."
                  rows={4}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-[11px] text-muted-foreground/80 text-center pt-1">
                By submitting, you agree to be contacted by Neev Systems regarding your inquiry.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
