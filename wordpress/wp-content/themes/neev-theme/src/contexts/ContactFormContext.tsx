import { createContext, useCallback, useContext, useState, ReactNode } from "react";

export type ContactSource =
  | "hero"
  | "navbar"
  | "footer"
  | "final-cta"
  | "oracle"
  | "salesforce"
  | "servicenow"
  | "workato"
  | "enterprise-application-services"
  | "enterprise-integration-services"
  | "product-engineering"
  | "it-security-transformation"
  | "data-analytics"
  | "application-management-services"
  | "virtual-captive-center"
  | "testing-services"
  | "life-sciences"
  | "healthcare"
  | "cpg-retail"
  | "hi-tech"
  | "banking-financial-services"
  | "about-us"
  | "general";

interface ContactFormContextValue {
  isOpen: boolean;
  source: ContactSource;
  openContactForm: (source?: ContactSource) => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextValue | undefined>(undefined);

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<ContactSource>("general");

  const openContactForm = useCallback((src: ContactSource = "general") => {
    setSource(src);
    setIsOpen(true);
  }, []);

  const closeContactForm = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactFormContext.Provider value={{ isOpen, source, openContactForm, closeContactForm }}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const ctx = useContext(ContactFormContext);
  if (!ctx) throw new Error("useContactForm must be used within ContactFormProvider");
  return ctx;
};
