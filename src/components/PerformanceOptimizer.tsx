"use client";

import { useEffect } from 'react';
import { 
  preloadCriticalResources, 
  optimizeScrollPerformance, 
  addResourceHints, 
  optimizeImageLoading,
  initPerformanceMonitoring 
} from '@/lib/performance';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Initialize all performance optimizations
    preloadCriticalResources();
    addResourceHints();
    
    const cleanupScroll = optimizeScrollPerformance();
    const cleanupImages = optimizeImageLoading();
    const cleanupMonitoring = initPerformanceMonitoring();

    // Cleanup functions
    return () => {
      cleanupScroll?.();
      cleanupImages?.();
      cleanupMonitoring?.();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
