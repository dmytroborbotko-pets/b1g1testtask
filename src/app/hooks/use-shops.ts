'use client';

import { useState, useEffect } from 'react';
import { shopService } from '@/app/services/shop-service';
import { Shop } from '@/app/types/shop';

export function useShops() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchShops = async () => {
      try {
        const data = await shopService.getShops();
        if (isMounted) {
          setShops(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch shops');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchShops();

    return () => {
      isMounted = false;
    };
  }, []);

  return { shops, loading, error };
} 