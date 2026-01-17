import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Got a question, suggestion, or just want to say hi? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/60">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                  <MessageCircle className="h-7 w-7 text-sage-dark" />
                </div>
                <CardTitle className="font-heading text-2xl">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a product suggestion, found an error, or want 
                  to share feedback about our picks, we're always happy to hear 
                  from fellow Singaporeans.
                </p>
                
                <div className="p-6 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    Email us at:
                  </p>
                  <p className="text-lg font-medium text-foreground mb-4">
                    hello@auntiemode.sg
                  </p>
                  <a href="mailto:hello@auntiemode.sg">
                    <Button variant="default">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                  </a>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    What we'd love to hear:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Products you've tried and loved (or hated!)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Categories you'd like us to cover
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Corrections or updates to existing picks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      General feedback on the site
                    </li>
                  </ul>
                </div>
                
                <p className="text-sm text-muted-foreground border-t border-border pt-6">
                  Note: We read every email but may not be able to respond 
                  to all messages individually. We appreciate your understanding!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
