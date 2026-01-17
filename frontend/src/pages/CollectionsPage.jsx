import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Grid3X3 } from 'lucide-react';
import { collections } from '@/data/collections';
import Layout from '@/components/layout/Layout';

const CollectionsPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              <Grid3X3 className="h-3.5 w-3.5 mr-1.5" />
              {collections.length} Collections
            </Badge>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              All Collections
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Browse our curated collections of practical home and lifestyle products. 
              Each collection is organized by room or purpose to help you find exactly 
              what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <Link 
                key={collection.id} 
                to={`/collections/${collection.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border/60 hover:border-primary/30 transition-all duration-200 hover:shadow-lg">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs">
                        {collection.itemCount} items
                      </Badge>
                      <div className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-4 w-4 text-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-heading text-base font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors leading-snug">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {collection.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-2">
            Can't find what you're looking for?
          </p>
          <Link 
            to="/contact" 
            className="text-primary font-medium hover:underline inline-flex items-center gap-1"
          >
            Let us know what you need
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CollectionsPage;
