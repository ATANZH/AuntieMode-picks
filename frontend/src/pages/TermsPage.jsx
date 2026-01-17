import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, FileText } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const TermsPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-taupe-light/50 flex items-center justify-center">
                <FileText className="h-5 w-5 text-taupe" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Legal Information
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Terms of Use
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By using AuntieMode Picks, you agree to these terms. 
              Please read them carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose max-w-none space-y-8">
            
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                1. Informational Purpose Only
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The content on AuntieMode Picks (SG) is provided for informational 
                purposes only. Our product recommendations represent our opinions 
                based on research and experience. We are not professional advisors, 
                and our recommendations should not be taken as expert advice.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                2. Product Information Accuracy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We make reasonable efforts to ensure product information is accurate. 
                However:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Prices may change without notice</li>
                <li>• Product availability varies and may change</li>
                <li>• Product features or specifications may be updated by manufacturers</li>
                <li>• We cannot guarantee that information is always current or complete</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Always verify current pricing, availability, and specifications on 
                the retailer's website before making a purchase.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                3. External Links
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our site contains links to third-party websites (retailers, 
                newsletter services, etc.). Please note:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We are not responsible for the content of external sites</li>
                <li>• External sites have their own terms, policies, and practices</li>
                <li>• Clicking a link does not imply our endorsement of that site's policies</li>
                <li>• Your interactions with external sites are governed by their terms</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                4. Affiliate Relationships
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We participate in affiliate programs. When you click on product links 
                and make purchases, we may earn commissions. This does not affect the 
                price you pay. Please see our{' '}
                <Link to="/disclosure" className="text-primary hover:underline">
                  Affiliate Disclosure
                </Link>{' '}
                for more details.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We are not liable for any damages arising from your use of this site</li>
                <li>• We are not responsible for products you purchase through our links</li>
                <li>• We make no warranties about product performance or suitability</li>
                <li>• Any product issues should be addressed with the retailer directly</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless otherwise noted, content on this site (text, graphics, logos) 
                is owned by AuntieMode Picks. You may not reproduce, distribute, or 
                use our content without permission. Product images and trademarks 
                belong to their respective owners.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these terms from time to time. Continued use of the 
                site after changes constitutes acceptance of the new terms. We 
                encourage you to review this page periodically.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                8. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about these terms, please contact us.
              </p>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;
