import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Shield } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const PrivacyPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-sage/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-sage-dark" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Your Privacy Matters
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in keeping things simple. Here's what data we collect 
              (spoiler: not much) and how we handle it.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose max-w-none space-y-8">
            
            <div className="p-6 bg-sage-light/30 rounded-lg border border-sage/20">
              <h2 className="font-heading text-xl font-bold text-foreground mb-3 mt-0">
                The Simple Version
              </h2>
              <p className="text-foreground leading-relaxed mb-0">
                We don't use tracking cookies. We don't use analytics. We don't 
                collect your browsing data. The only information we have is what 
                you voluntarily give us (like your email for the newsletter).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                What We Don't Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unlike most websites, we specifically don't collect:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Tracking cookies or third-party cookies</li>
                <li>• Analytics data about your browsing behaviour</li>
                <li>• Personal information beyond what you provide</li>
                <li>• Device fingerprints or tracking identifiers</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Newsletter Subscription
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you subscribe to our newsletter:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>What we collect:</strong> Your email address only</li>
                <li><strong>Why:</strong> To send you our weekly "Basket of the Week" newsletter</li>
                <li><strong>Who handles it:</strong> We use Substack to manage our newsletter</li>
                <li><strong>Their policies:</strong> Your email is subject to <a href="https://substack.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Substack's Privacy Policy</a></li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Affiliate Links
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you click on product links:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You'll be redirected to the retailer's website (e.g., Shopee)</li>
                <li>• The retailer may set their own cookies and track your activity</li>
                <li>• We receive anonymised information about purchases (not your personal details)</li>
                <li>• Please review the retailer's privacy policy for their practices</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                How to Opt Out
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Newsletter:</strong> Every email includes an unsubscribe link. 
                Click it anytime to stop receiving emails and have your address removed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Affiliate tracking:</strong> Use your browser's private/incognito 
                mode when clicking links, or clear cookies after visiting retailer sites.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Contact About Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about your data or want to request deletion 
                of any information we may have, please contact us.
              </p>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If we make significant changes to how we handle your data, we'll 
                update this page and note the date of the change below.
              </p>
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

export default PrivacyPage;
