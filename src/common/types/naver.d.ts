declare namespace naver {
  namespace maps {
    class LatLng {
      constructor(lat: number | string, lng: number | string);
    }
    interface MapOptions {
      center: LatLng;
      zoom: number;
    }
    class Map {
      constructor(el: HTMLElement, options: MapOptions);
    }
  }
}
