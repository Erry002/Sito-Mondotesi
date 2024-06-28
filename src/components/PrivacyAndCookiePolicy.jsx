import React, { useEffect } from 'react';

const PrivacyAndCookiePolicy = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.iubenda.com/iubenda.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    const onLoad = () => loadScript();

    if (window.addEventListener) {
      window.addEventListener('load', onLoad, false);
    } else if (window.attachEvent) {
      window.attachEvent('onload', onLoad);
    } else {
      window.onload = onLoad;
    }

    return () => {
      if (window.removeEventListener) {
        window.removeEventListener('load', onLoad, false);
      } else if (window.detachEvent) {
        window.detachEvent('onload', onLoad);
      }
    };
  }, []);

  return (
    <div className='flex flex-col gap-4 sm:flex-row'>
      <a
        href="https://www.iubenda.com/privacy-policy/95327545"
        className="iubenda-black iubenda-noiframe iubenda-embed"
        title="Privacy Policy"
      >
        Privacy Policy
      </a>
      <a
        href="https://www.iubenda.com/privacy-policy/95327545/cookie-policy"
        className="iubenda-black iubenda-noiframe iubenda-embed"
        title="Cookie Policy"
      >
        Cookie Policy
      </a>
    </div>
  );
};

export default PrivacyAndCookiePolicy;
