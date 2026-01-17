import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  ExternalLink, 
  Grid3X3, 
  Mail,
  ChevronRight 
} from 'lucide-react';
import { getCollectionBySlug, collections } from '@/data/collections';
import Layout from '@/components/layout/Layout';

const CollectionDetailPage = () => {
  const { slug } = useParams();
  const collection = getCollectionBySlug(slug);

  // Find related collections (excluding current)
  const relatedCollections = collections
    .filter(c => c.slug !== slug)
    .slice(0, 3);

  if (!collection) {
    return (
      <Layout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-4">
            Collection Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            Sorry, we couldn't find the collection you're looking for.
          </p>
          <Link to="/collections">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link to="/collections" className="text-muted-foreground hover:text-foreground transition-colors">
              Collections
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium truncate">
              {collection.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Collection Header */}
      <section className="relative">
        <div className="absolute inset-0 h-64 sm:h-80">
          <img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8">
          <Link 
            to="/collections" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collections
          </Link>
          
          <Badge variant="secondary" className="mb-4 bg-background/90 backdrop-blur-sm">
            <Grid3X3 className="h-3.5 w-3.5 mr-1.5" />
            {collection.items.length} items
          </Badge>
          
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {collection.title}
          </h1>
          
          <p className="text-lg text-primary-foreground/90 max-w-2xl leading-relaxed">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collection.items.map((item, index) => (
              <Card 
                key={item.id} 
                className="group flex flex-col h-full border-border/60 hover:border-primary/30 transition-all duration-200"
              >
                <CardContent className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <Badge variant="outline" className="shrink-0 text-xs">
                      #{index + 1}
                    </Badge>
                    {item.priceRange && (
                      <span className="text-sm font-semibold text-primary">
                        {item.priceRange}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2 leading-snug">
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
      <section className="py-12 bg-sage-light/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <Mail className="h-10 w-10 text-sage-dark mx-auto mb-4" />
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">
              Like what you see?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get our weekly "Basket of the Week" with more curated picks 
              delivered straight to your inbox.
            </p>
            <a
              href="https://YOUR_SUBSTACK_URL.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="sage">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe Free
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Collections */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            More Collections
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCollections.map((relatedCollection) => (
              <Link 
                key={relatedCollection.id} 
                to={`/collections/${relatedCollection.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border/60 hover:border-primary/30 transition-all duration-200">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={relatedCollection.image}
                      alt={relatedCollection.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <Badge 
                      variant="secondary" 
                      className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm text-xs"
                    >
                      {relatedCollection.itemCount} items
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {relatedCollection.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center">
            <Link to="/collections">
              <Button variant="outline">
                <Grid3X3 className="mr-2 h-4 w-4" />
                View All Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CollectionDetailPage;
