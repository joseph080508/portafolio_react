import { Fragment } from "react";
import ContactSection from "../components/Contact/Contact";
import { useLanguage } from "../context/useLanguage";
import SEO from "../components/SEO/SEO";

const Contact = () => {
  const { t } = useLanguage();
  return (
  <Fragment>
    <SEO title={t("seo.contactTitle")} description={t("seo.contactDescription")} />
    <h1 className="sr-only">{t("contact.eyebrow")}</h1>
    <ContactSection />
  </Fragment>
  );
};

export default Contact;
