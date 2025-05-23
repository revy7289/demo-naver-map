# React + Vite // + Naver Map api 연동 실습

NaverMap comp 분리

- global ambient type 선언하여 window에 객체 추가
- comp 내부에서 ref 생성하므로 재사용 가능
- script injection하는 코드를 util함수로 분리 <br />
  (중복방지 및, script가 load 되어야 map이 load되는 비동기 처리 방식 구현)
