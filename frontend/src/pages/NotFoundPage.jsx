import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-md mx-auto text-center">
          <div className="text-8xl font-heading font-bold text-primary/20 mb-4">
            404
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Aiyo, this page doesn't exist lah! Maybe it was moved, or the 
            link is wrong. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
