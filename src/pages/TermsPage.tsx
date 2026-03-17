import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";

const TermsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <PageHeader title="Terms & Conditions" breadcrumb="Terms & Conditions" />

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="prose prose-sm md:prose-base max-w-none">
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Last Updated:</strong> March 1, 2026
              </p>

              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                These Terms and Conditions govern your use of the Mbaya & Kanyoro LLP website and our professional services. By accessing our website or engaging our services, you agree to be bound by these terms.
              </p>

              {[
                {
                  title: "1. Services",
                  content: "Mbaya & Kanyoro LLP provides auditing, tax advisory, accounting, business advisory, company secretarial, and risk assessment services. The scope of each engagement is defined in the relevant engagement letter or service agreement signed between the firm and the client."
                },
                {
                  title: "2. Professional Standards",
                  content: "All services are delivered in accordance with International Standards on Auditing (ISA), International Financial Reporting Standards (IFRS), and applicable Kenyan laws and regulations. Our professionals are governed by the ethical requirements of ICPAK and ACCA."
                },
                {
                  title: "3. Client Obligations",
                  content: "Clients are responsible for providing accurate and complete information necessary for the delivery of services. Clients must ensure timely payment of fees as outlined in engagement letters and must promptly inform us of any changes that may affect the scope of engagement."
                },
                {
                  title: "4. Confidentiality",
                  content: "We maintain strict confidentiality of all client information and will not disclose any client data to third parties without consent, except where required by law or regulatory obligation. This obligation survives the termination of any engagement."
                },
                {
                  title: "5. Limitation of Liability",
                  content: "Our liability in connection with services provided shall be limited to the fees paid for the specific engagement giving rise to the claim. We shall not be liable for any indirect, consequential, or incidental damages arising from the use of our services or website."
                },
                {
                  title: "6. Intellectual Property",
                  content: "All content on this website, including text, graphics, logos, and design, is the property of Mbaya & Kanyoro LLP and is protected by copyright laws. Reproduction or distribution without written consent is prohibited."
                },
                {
                  title: "7. Website Use",
                  content: "This website is provided for informational purposes only. The content does not constitute professional advice. Users should consult directly with our team for advice tailored to their specific circumstances."
                },
                {
                  title: "8. Governing Law",
                  content: "These terms are governed by the laws of Kenya. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Kenya."
                },
                {
                  title: "9. Amendments",
                  content: "We reserve the right to modify these Terms and Conditions at any time. Updated terms will be posted on this page with a revised date."
                },
              ].map((section) => (
                <div key={section.title} className="mb-8">
                  <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-3">{section.title}</h2>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default TermsPage;
