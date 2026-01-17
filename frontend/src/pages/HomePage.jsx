import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Mail, Sparkles, ShoppingBag } from 'lucide-react';
import { collections, getBasketOfTheWeek } from '@/data/collections';
import Layout from '@/components/layout/Layout';

const HomePage = () => {
  const basketItems = getBasketOfTheWeek();
  const featuredCollections = collections.slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-background to-background" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Curated for Singapore Homes
            </Badge>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Practical home & lifestyle picks that{' '}
              <span className="text-primary">don't waste your money</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              No fancy marketing speak, no sponsored content disguised as reviews. 
              Just honest recommendations from someone who actually lives in an HDB 
              and knows what works.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/collections">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Collections
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://YOUR_SUBSTACK_URL.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Weekly Picks
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzY4NjQ4NjUyfDA&ixlib=rb-4.1.0&q=85&w=1200"
              alt="Clean, organized home interior"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-foreground font-medium text-sm sm:text-base">
                A tidy home starts with the right tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Basket of the Week */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <Badge variant="secondary" className="mb-3">
                <ShoppingBag className="h-3.5 w-3.5 mr-1.5" />
                Updated Weekly
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Basket of the Week
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Our top 6 picks this week - a mix of best-sellers and hidden gems 
                that solve everyday problems.
              </p>
            </div>
            <a
              href="https://YOUR_SUBSTACK_URL.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="outline" size="sm">
                <Mail className="mr-2 h-4 w-4" />
                Get this weekly
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {basketItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group flex flex-col h-full border-border/60 hover:border-primary/30 transition-all duration-200"
              >
                <CardContent className="flex flex-col flex-1 p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <Badge variant="secondary" className="shrink-0">
                      #{index + 1}
                    </Badge>
                    {item.priceRange && (
                      <span className="text-sm font-medium text-primary">
                        {item.priceRange}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 leading-snug">
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {item.note}
                  </p>
                  
                  <div className="mt-auto space-y-2">
                    <a
                      href={item.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="default" size="sm" className="w-full">
                        Shop on Shopee
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </a>
                    <p className="text-xs text-muted-foreground text-center">
                      Affiliate link
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-20 bg-sage-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage/20 mb-6">
              <Mail className="h-7 w-7 text-sage-dark" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Get the "Basket of the Week" in your inbox
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every week, we curate 6-8 practical picks delivered straight to your 
              email. No spam, no daily emails - just useful stuff, once a week.
            </p>
            <a
              href="https://YOUR_SUBSTACK_URL.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="sage">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe on Substack
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              Free newsletter. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Collections */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Latest Collections
              </h2>
              <p className="mt-2 text-muted-foreground">
                Curated picks organized by room and purpose.
              </p>
            </div>
            <Link to="/collections">
              <Button variant="outline" size="sm">
                View All Collections
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCollections.map((collection) => (
              <Link 
                key={collection.id} 
                to={`/collections/${collection.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border/60 hover:border-primary/30 transition-all duration-200 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {collection.itemCount} items
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {collection.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/collections">
              <Button variant="outline" size="lg">
                Browse All 12 Collections
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-20 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-heading text-4xl font-bold text-primary mb-2">12</div>
                <p className="text-muted-foreground">Curated Collections</p>
              </div>
              <div>
                <div className="font-heading text-4xl font-bold text-primary mb-2">90+</div>
                <p className="text-muted-foreground">Hand-picked Products</p>
              </div>
              <div>
                <div className="font-heading text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Honest Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
