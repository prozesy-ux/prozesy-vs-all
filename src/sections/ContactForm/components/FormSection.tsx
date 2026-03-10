import { ContactInfo } from "@/sections/ContactForm/components/ContactInfo";

export const FormSection = () => {
  return (
    <div className="relative box-border caret-transparent h-auto max-w-full min-h-[auto] min-w-[auto] w-full z-[99] md:static md:h-full md:max-w-none md:z-auto">
      <ContactInfo />
    </div>
  );
};
