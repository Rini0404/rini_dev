import { useEffect, MutableRefObject } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapOptions {
  accessToken: string;
  style: string;
  initialCenter: [number, number];
  initialZoom: number;
  targetCenter: [number, number];
  targetZoom: number;
}

const useMapboxMap = (
  mapContainer: MutableRefObject<null | HTMLDivElement>,
  showMap: boolean,
  options: MapOptions
) => {
  useEffect(() => {
    if (showMap && mapContainer.current) {
      mapboxgl.accessToken = options.accessToken;
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: options.style,
        center: options.initialCenter,
        zoom: options.initialZoom,
      });

      map.on('load', () => {
        map.flyTo({
          center: options.targetCenter,
          zoom: options.targetZoom,
          essential: true,
        });
      });
    }
  }, [showMap, mapContainer, options]);
};

export default useMapboxMap;
