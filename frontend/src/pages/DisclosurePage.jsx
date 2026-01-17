import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Info, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const DisclosurePage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Affiliate Disclosure
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transparency is important to us. Here's how we make money and 
              what that means for you.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-border/60 mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Info className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">
                    The Short Version
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  When you click on product links on AuntieMode Picks and make a purchase, 
                  we may earn a small commission from the retailer (like Shopee). 
                  <strong> This costs you nothing extra</strong> — you pay the same price 
                  whether you use our link or not.
                </p>
              </CardContent>
            </Card>

            <div className="prose max-w-none space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  How Affiliate Links Work
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Many of the product links on this site are "affiliate links." This means:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• When you click a link and buy something, we get a small percentage of the sale</li>
                  <li>• The price you pay is exactly the same as if you found the product yourself</li>
                  <li>• The retailer (Shopee, etc.) pays the commission, not you</li>
                  <li>• We clearly mark all affiliate links on our site</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Why We Use Affiliate Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Running a website takes time and money. Affiliate commissions help us:
                </p>
                <ul className="space-y-2 text-muted-foreground mt-4">
                  <li>• Keep the site running without charging you</li>
                  <li>• Spend time researching and testing products</li>
                  <li>• Update content regularly with new finds</li>
                  <li>• Remain independent (we don't accept paid placements)</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Commitment
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Earning commission doesn't influence our recommendations. Our promise:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• We only recommend products we genuinely believe are useful</li>
                  <li>• We don't promote products just because they offer higher commissions</li>
                  <li>• We don't accept payment from brands for positive reviews</li>
                  <li>• If we change our mind about a product, we update our recommendation</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Questions?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about our affiliate relationships or how 
                  we choose products, please reach out.
                </p>
                <Link to="/contact">
                  <Button variant="outline">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
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

export default DisclosurePage;
