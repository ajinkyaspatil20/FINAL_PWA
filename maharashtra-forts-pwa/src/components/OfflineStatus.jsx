import { useEffect, useState } from 'react';

export default function OfflineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={`status ${isOnline ? 'online' : 'offline'}`}>
      {isOnline ? 'Online' : 'Offline - Using cached data'}
    </div>
  );
}