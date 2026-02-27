import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroContact from "@/assets/hero-contact.jpg";
import ContactSection from "@/components/home/ContactSection";

const Contact = () => {
  return (
    <Layout>
      <PageHero image={heroContact} title="Contact Us" subtitle="Get in touch with our team for project enquiries and consultations." />
      <ContactSection />
    </Layout>
  );
};

export default Contact;
