'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import {
  trackToolView,
  trackToolStart,
  trackToolComplete,
  trackToolResultShown,
} from 'lib/analytics';

export function useToolAnalytics(toolGaName) {
  const sourcePage = usePathname() || '/dental-guides';
  const startedRef = useRef(false);

  useEffect(() => {
    trackToolView({ tool_name: toolGaName, source_page: sourcePage });
  }, [toolGaName, sourcePage]);

  const markStart = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackToolStart({ tool_name: toolGaName, source_page: sourcePage });
  }, [toolGaName, sourcePage]);

  const fireComplete = useCallback(
    (payload) => {
      trackToolComplete({
        tool_name: toolGaName,
        source_page: sourcePage,
        ...payload,
      });
    },
    [toolGaName, sourcePage]
  );

  const fireResultShown = useCallback(
    (payload) => {
      trackToolResultShown({
        tool_name: toolGaName,
        source_page: sourcePage,
        ...payload,
      });
    },
    [toolGaName, sourcePage]
  );

  return { markStart, fireComplete, fireResultShown };
}
