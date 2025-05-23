import { useEffect, useRef } from "react";

export function NaverMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
      import.meta.env.VITE_NAV_CLI
    }&submodules=geocoder`;

    document.head.appendChild(script);
    script.onload = () => {
      if (!window.naver || !mapRef.current) return;

      let map = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng("36.327690", "127.427313"),
        zoom: 20,
      });

      console.log(map);
    };
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "400px" }} ref={mapRef}></div>
  );
}
