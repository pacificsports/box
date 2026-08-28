/* 손님용 박스 조회에 쓰는 Supabase 공개(anon) 키.
   이 키로 할 수 있는 건 box_info(박스번호) 함수 하나뿐이다 — 표를 직접 읽거나
   목록을 뽑는 것은 막혀 있다. psflowx.com 소스에도 이미 들어 있는 같은 키다.

   ▶ 넣는 법: 아래 따옴표 사이에 Supabase → Settings → API → anon public 키를 붙여넣는다. */
window.PS_BOX_KEY = '';
