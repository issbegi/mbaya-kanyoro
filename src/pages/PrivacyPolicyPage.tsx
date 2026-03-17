import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";

const PrivacyPolicyPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <PageHeader title="Privacy Policy" breadcrumb="Privacy Policy" />

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="prose prose-sm md:prose-base max-w-none">
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Effective Date:</strong> March 1, 2026
              </p>

              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                Mbaya & Kanyoro LLP ("we," "our," or "us") is committed to protecting the privacy of our clients, website visitors, and stakeholders. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information.
              </p>

              {[
                {
                  title: "1. Information We Collect",
                  content: "We may collect personal information including your name, email address, phone number, company name, job title, and financial data that you voluntarily provide when engaging our services, submitting forms, or communicating with us. We may also collect technical data such as IP addresses, browser type, and usage analytics when you visit our website."
                },
                {
                  title: "2. How We Use Your Information",
                  content: "We use your information to provide and improve our professional services, communicate with you about engagements and deliverables, comply with legal and regulatory obligations, send relevant updates and insights (with your consent), and maintain the security and functionality of our website."
                },
                {
                  title: "3. Data Sharing & Disclosure",
                  content: "We do not sell, rent, or trade your personal information to third parties. We may share your data with authorized personnel within the firm, regulatory authorities as required by law, trusted third-party service providers who assist in our operations (under strict confidentiality agreements), and our global network partner GMN International, where relevant to cross-border engagements."
                },
                {
                  title: "4. Data Security",
                  content: "We employ industry-standard security measures including encryption, access controls, and secure hosting to protect your personal information against unauthorized access, alteration, or destruction. Our client portal utilizes end-to-end encryption for all document transfers."
                },
                {
                  title: "5. Data Retention",
                  content: "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and professional standards. Audit and tax records are retained in accordance with Kenya Revenue Authority guidelines and the International Standards on Auditing."
                },
                {
                  title: "6. Your Rights",
                  content: "You have the right to access, correct, or delete your personal information held by us. You may also withdraw your consent for marketing communications at any time. To exercise these rights, please contact us at info@mbaya.co.ke."
                },
                {
                  title: "7. Cookies",
                  content: "Our website may use cookies and similar technologies to enhance your browsing experience and collect analytics data. You can control cookie settings through your browser preferences."
                },
                {
                  title: "8. Changes to This Policy",
                  content: "We may update this Privacy Policy from time to time. Material changes will be communicated via our website. We encourage you to review this policy periodically."
                },
              ].map((section) => (
                <div key={section.title} className="mb-8">
                  <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-3">{section.title}</h2>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}

              <div className="mt-12 p-6 bg-secondary rounded-xl">
                <p className="font-sans text-sm text-foreground font-semibold mb-2">Contact Us</p>
                <p className="font-sans text-sm text-muted-foreground">
                  If you have any questions regarding this Privacy Policy, please contact us at{" "}
                  <a href="mailto:info@mbaya.co.ke" className="text-gold hover:underline">info@mbaya.co.ke</a> or call{" "}
                  <a href="tel:+254722207938" className="text-gold hover:underline">+254 722 207 938</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicyPage;
