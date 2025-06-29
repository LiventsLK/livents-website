// src/hooks/useOnClickOutside.js

import { useEffect } from 'react';

// The hook now accepts a second ref for the button that toggles the menu
export default function useOnClickOutside(menuRef, buttonRef, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking menu's element or descendent elements
      if (!menuRef.current || menuRef.current.contains(event.target)) {
        return;
      }
      
      // ✅ THE FIX: Also do nothing if clicking the button's element
      if (!buttonRef.current || buttonRef.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [menuRef, buttonRef, handler]); // Add buttonRef to the dependency array
}