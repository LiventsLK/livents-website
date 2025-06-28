// src/hooks/useOnClickOutside.js

import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };

      // Listen for mousedown events instead of click to catch the event earlier
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener); // For mobile support

      // This is the cleanup function that runs when the component unmounts
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to the dependency array
    // It will re-run the effect if these change
    [ref, handler]
  );
}