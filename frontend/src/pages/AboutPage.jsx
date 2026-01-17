import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About AuntieMode
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real recommendations from someone who actually lives in an HDB 
              and knows what works in Singapore homes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
              The Auntie Behind the Picks
            </h2>
            
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                You know that helpful auntie who always knows where to get the best 
                deals, which products actually work, and isn't shy about telling you 
                when something's not worth your money? That's the spirit behind 
                AuntieMode Picks.
              </p>
              
              <p className="leading-relaxed">
                We live in Singapore. We deal with the same humidity, the same compact 
                HDB spaces, and the same "wah, so expensive" moments at the checkout. 
                We understand that not everyone has time to scroll through hundreds of 
                reviews to find what actually works.
              </p>
              
              <p className="leading-relaxed">
                So we do the homework for you. We test products, read the fine print, 
                and only recommend things we'd actually tell our own family to buy. 
                No sponsored reviews disguised as honest opinions. No exaggerated claims. 
                Just practical recommendations from one Singaporean home to another.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* How We Pick */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
            How We Choose Our Picks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/60">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Problem-First Approach
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We start with the problem, not the product. What's the actual 
                  issue you're trying to solve? Then we find what actually fixes it.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/60">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-sage/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-sage-dark" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Singapore Context
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Products that work overseas don't always work here. We consider 
                  our climate, home sizes, and local availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/60">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-taupe-light/50 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-taupe" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Value Over Hype
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We don't chase trends or viral products. We look for things that 
                  genuinely improve daily life at a fair price.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Our Promise */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Our Promise to You
            </h2>
            
            <div className="space-y-4">
              {[
                'We only recommend products we\'d tell our own family to buy',
                'We disclose all affiliate relationships clearly',
                'We don\'t accept payment for reviews or placements',
                'We update our picks when better options come along',
                'We listen to feedback and fix our mistakes',
              ].map((promise, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sage-dark shrink-0 mt-0.5" />
                  <p className="text-foreground">{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ready to Find What Works?
            </h2>
            <p className="text-muted-foreground mb-6">
              Browse our curated collections or get our weekly picks delivered 
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collections">
                <Button size="lg">
                  Browse Collections
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
