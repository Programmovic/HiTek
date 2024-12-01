'use client';

import { useEffect, useRef } from 'react';

export default function ContactMap() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    document.head.appendChild(googleMapScript);

    googleMapScript.onload = () => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 10,
        disableDefaultUI: true,
      });

      new window.google.maps.Marker({
        position: { lat: 40.7128, lng: -74.006 },
        map: map,
      });
    };

    return () => {
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = ''; // Cleanup
      }
    };
  }, []);

  return (
    <section className="rounded-3xl w-full h-96 lg:w-1/2 lg:h-auto">
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
      ></div>
    </section>
  );
}
