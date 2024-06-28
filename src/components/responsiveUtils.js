import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isTablet;
};

export const useOrientation = () => {
  const [isOrientation, setIsOrientation] = useState(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')

  useEffect(() => {
    const handleResize = () => {
      setIsOrientation(window.innerWidth >= 768 && window.innerWidth < 1440);
    };

    window.addEventListener('portrait', handleResize);

    return () => {
      window.removeEventListener('landscape', handleResize);
    };
  }, []);

    return isOrientation;
}



//-------------inizio componente funzionante
// import { useState, useEffect } from 'react';

// export const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

// const getDeviceSize = () => {
//   const width = window.innerWidth;
//   if (width < 768) {
//     return 'mobile';
//   } else if (width >= 768 && width < 1024) {
//     return 'tablet';
//   } else {
//     return 'desktop';
//   }
// };

//   return isMobile;
// };
//------------fine componente funzionante