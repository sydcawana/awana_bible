// ============================================================
// 장면판 데이터: 창세기 1–11장 "창조와 노아"
// 다른 책을 더하려면 이 파일처럼 SCENE_BOOKS에 하나 더 넣으면 된다.
//
// images: 장 번호 → 그 장부터 보여 줄 그림. (그림이 없는 장은 바로 앞 그림을 그대로 쓴다)
//   src    = 그림 파일 (세로 3:4, size와 같은 크기 기준)
//   reveal = 새 그림이 나타나는 방식: radial(빛이 퍼지듯) | rise(아래에서 차오름) | fall(위에서 걷힘) | fade
//   effect = 그림 위에 얹는 움직임: rain(비) | glow(은은한 빛)
//   shake  = 나타난 뒤 화면이 흔들림 (바벨탑)
//   그림 사이의 장은 반짝임 + 말풍선으로 보상한다. 그림을 더 만들면 여기에 한 줄만 추가하면 된다.
//
// chapters[]: chapter, title, summary(한 줄), speech, quiz, hintAt
//   speech: [{ text, at:[x,y], dir:'up'|'down' }]  at = 말하는 인물 위치 (그림 픽셀 기준)
//   quiz:   { q, options:[{icon,text}], answer(0|1), hint }
//   hintAt: 이 장에서 바뀔 자리 (바로 앞 장까지 읽었을 때 반짝이는 '?'로 예고)
// ============================================================
(window.SCENE_BOOKS = window.SCENE_BOOKS || []).push({
  id: 'genesis-1-11',
  book: '창세기',
  title: '창조와 노아',
  icon: '🌍',
  from: 1,
  to: 11,
  intro: '땅이 혼돈하고 공허하며…',
  size: [765, 1024],
  images: {
    0:  { src: 'images/genesis/scene-00.webp', effect: 'glow' },
    1:  { src: 'images/genesis/scene-01.webp', reveal: 'radial' },
    3:  { src: 'images/genesis/scene-03.webp', reveal: 'fade' },
    7:  { src: 'images/genesis/scene-07.webp', reveal: 'rise', effect: 'rain' },
    9:  { src: 'images/genesis/scene-09.webp', reveal: 'fall' },
    11: { src: 'images/genesis/scene-11.webp', reveal: 'fade', shake: true }
  },
  // 완성 연출 그림 (없으면 9장 그림을 쓴다). 예: 'images/genesis/scene-end.webp'
  ending: { image: null, badge: '창조와 노아 완성!', next: { title: '아브라함의 여정', ready: false } },

  chapters: [
    { chapter: 1, title: '빛이 있으라', summary: '하나님이 엿새 동안 세상을 지으셨어요.',
      speech: [{ text: '첫 출근이에요!', at: [150, 225], dir: 'down' }],
      quiz: { q: '하나님이 맨 처음 만드신 것은?', options: [{ icon: '💡', text: '빛' }, { icon: '🌳', text: '나무' }], answer: 0,
              hint: '"빛이 있으라!" 하고 말씀하셨어요.' },
      hintAt: [382, 300] },
    { chapter: 2, title: '에덴동산', summary: '하나님이 사람을 지으시고 동산에 두셨어요.',
      speech: [{ text: '내 이름이… 하마?', at: [590, 765] }],
      quiz: { q: '아담이 동물들에게 해 준 것은?', options: [{ icon: '🏷️', text: '이름 짓기' }, { icon: '🎂', text: '생일 파티' }], answer: 0,
              hint: '아담이 부르는 대로 동물의 이름이 되었어요.' },
      hintAt: [590, 790] },
    { chapter: 3, title: '뱀과 열매', summary: '먹지 말라던 열매를 먹고 동산을 떠났어요.',
      speech: [{ text: '딱 한 입만~', at: [140, 690] }],
      quiz: { q: '뱀이 먹어 보라고 한 것은?', options: [{ icon: '🍎', text: '먹지 말라던 열매' }, { icon: '🍕', text: '피자' }], answer: 0,
              hint: '동산 가운데 나무의 열매였어요.' },
      hintAt: [210, 780] },
    { chapter: 4, title: '가인과 아벨', summary: '아벨은 양을, 가인은 곡식을 드렸어요.',
      speech: [{ text: '아벨은 양치기래요!', at: [482, 755] }],
      quiz: { q: '아벨이 하나님께 드린 것은?', options: [{ icon: '🐑', text: '첫 새끼 양' }, { icon: '🌾', text: '곡식' }], answer: 0,
              hint: '아벨은 양을 치는 사람이었어요.' },
      hintAt: [482, 780] },
    { chapter: 5, title: '므두셀라 969살', summary: '아담부터 노아까지 자손이 이어졌어요.',
      speech: [{ text: '969살 생일 축하해요!', at: [150, 225], dir: 'down' }],
      quiz: { q: '므두셀라는 몇 살까지 살았을까?', options: [{ icon: '🎂', text: '969살' }, { icon: '🎈', text: '10살' }], answer: 0,
              hint: '성경에서 가장 오래 산 사람이에요!' },
      hintAt: [150, 140] },
    { chapter: 6, title: '방주를 지어요', summary: '노아가 큰 배, 방주를 지었어요.',
      speech: [{ text: '배를 짓는대요! 나도 탈래!', at: [700, 655] }],
      quiz: { q: '하나님이 노아에게 만들라고 하신 것은?', options: [{ icon: '🚢', text: '방주' }, { icon: '🏰', text: '성' }], answer: 0,
              hint: '물 위에 뜨는 아주 큰 배예요.' },
      hintAt: [705, 700] },
    { chapter: 7, title: '40일 동안 비', summary: '동물들이 둘씩 타고, 물이 땅을 덮었어요.',
      speech: [{ text: '천장이… 목이…!', at: [238, 560] }],
      quiz: { q: '동물들은 방주에 어떻게 들어갔을까?', options: [{ icon: '🐾', text: '둘씩 짝지어' }, { icon: '🏃', text: '혼자 한 마리씩' }], answer: 0,
              hint: '암컷과 수컷, 짝을 지어 들어갔어요.' },
      hintAt: [380, 640] },
    { chapter: 8, title: '비둘기와 올리브잎', summary: '물이 빠지고 비둘기가 올리브잎을 물어 왔어요.',
      speech: [{ text: '비둘기야, 땅 찾았니?', at: [478, 695] }],
      quiz: { q: '땅이 말랐는지 알아보려고 노아가 보낸 새는?', options: [{ icon: '🕊️', text: '비둘기' }, { icon: '🦜', text: '앵무새' }], answer: 0,
              hint: '올리브잎을 물고 돌아온 하얀 새예요.' },
      hintAt: [478, 715] },
    { chapter: 9, title: '무지개 약속', summary: '하나님이 무지개로 약속하셨어요.',
      speech: [{ text: '올리브잎 배달 왔어요!', at: [395, 390] }, { text: '와~ 약속의 무지개!', at: [455, 760] }],
      quiz: { q: '하나님이 약속의 표시로 보여 주신 것은?', options: [{ icon: '🌈', text: '무지개' }, { icon: '🌠', text: '별똥별' }], answer: 0,
              hint: '비가 그친 뒤 하늘에 뜨는 일곱 빛깔이에요.' },
      hintAt: [382, 240] },
    { chapter: 10, title: '온 땅으로 퍼져요', summary: '노아의 자손들이 온 땅에 퍼졌어요.',
      speech: [{ text: '우린 저쪽으로 이사 가요!', at: [515, 725] }],
      quiz: { q: '노아의 자손들은 어떻게 살았을까?', options: [{ icon: '🗺️', text: '여러 곳으로 퍼졌어요' }, { icon: '🏠', text: '한 집에만 살았어요' }], answer: 0,
              hint: '나라와 마을이 여러 개 생겼어요.' },
      hintAt: [515, 750] },
    { chapter: 11, title: '바벨탑', summary: '탑을 쌓다가 말이 달라져 흩어졌어요.',
      speech: [{ text: '벽돌 줘!', at: [255, 590] }, { text: '…바나나요?', at: [238, 735] }],
      quiz: { q: '바벨탑을 쌓던 사람들에게 생긴 일은?', options: [{ icon: '🗣️', text: '말이 서로 달라졌어요' }, { icon: '🍦', text: '아이스크림이 생겼어요' }], answer: 0,
              hint: '서로 말을 알아들을 수 없게 되었어요.' },
      hintAt: [230, 520] }
  ]
});
