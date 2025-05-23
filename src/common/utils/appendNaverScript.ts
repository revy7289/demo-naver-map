export function appendNaverScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve(); // block SSR

  if (document.getElementById("naver-map-script")) return Promise.resolve(); // block duplicate

  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.id = "naver-map-script";
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
      import.meta.env.VITE_NAV_CLI
    }&submodules=geocoder`;

    script.onload = () => res();
    script.onerror = () => rej(new Error("fail to load naver-map-script"));
    document.head.appendChild(script);
  });
}
