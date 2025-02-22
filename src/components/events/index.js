// src/components/events/index.js

import React, { Suspense, lazy } from 'react';
import { Card, CardContent } from '../ui/Card';

// Lazy load components for better performance
const CreateEventModal = lazy(() => import('./CreateEventModal'));
const EventDetails = lazy(() => import('./EventDetails'));
const RSVPModal = lazy(() => import('./RSVPModal'));
const LocationSystem = lazy(() => import('./LocationSystem'));

// Loading fallback component
const LoadingCard = () => (
  <Card className="bg-gray-800/50 border-gray-700">
    <CardContent className="p-6">
      <div className="flex items-center justify-center space-x-4">
        <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-300">Loading...</p>
      </div>
    </CardContent>
  </Card>
);

// Error boundary for event components
class EventErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Event component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-6">
            <div className="text-center">
              <i className="fas fa-exclamation-circle text-orange-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Something went wrong</h3>
              <p className="text-gray-300 mb-4">We couldn't load this component</p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg 
                         text-white transition-colors"
              >
                Try Again
              </button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}

// Wrap lazy-loaded components with Suspense and ErrorBoundary
const withErrorBoundary = (WrappedComponent, props) => (
  <EventErrorBoundary>
    <Suspense fallback={<LoadingCard />}>
      <WrappedComponent {...props} />
    </Suspense>
  </EventErrorBoundary>
);

// Export wrapped components
export const getCreateEventModal = (props) => withErrorBoundary(CreateEventModal, props);
export const getEventDetails = (props) => withErrorBoundary(EventDetails, props);
export const getRSVPModal = (props) => withErrorBoundary(RSVPModal, props);
export const getLocationSystem = (props) => withErrorBoundary(LocationSystem, props);

// Export the main Events component
export { default } from './Events';

// Export other utilities and types
export * from './LocationSystem';
export * from './eventTypes';
export * from './eventHelpers';