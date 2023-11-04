import React, { useEffect } from 'react';

const TradingViewScreenerWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: 490,
      height: 490,
      defaultColumn: 'overview',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      colorTheme: 'dark',
      locale: 'in',
      isTransparent: 'true',
    });

    document.getElementById('tradingview-screener-widget-container').appendChild(script);

    return () => {
      document.getElementById('tradingview-screener-widget-container').removeChild(script);
    };
  }, []);

  return <div id="tradingview-screener-widget-container" />;
};

export default TradingViewScreenerWidget;
