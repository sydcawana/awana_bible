// ============================================================
// 장면판 데이터: 창세기 1–11장 "창조와 노아"
// 다른 책을 더하려면 이 파일처럼 SCENE_BOOKS에 하나 더 넣으면 된다.
//
// 장마다:
//   chapter, title, summary(한 줄), layers[], animation, speech, quiz, hintAt
//   layers[]: { id, art, delay?, anim? }
//     art   = 그림 이름. ASSETS에 파일 경로가 있으면 그 그림(PNG/SVG)을 쓰고,
//             없으면 scene.html 안의 기본 도형 그림을 쓴다.
//     delay = 이 장 애니메이션 안에서 몇 초 뒤에 나타날지
//     anim  = fade | grow | rise | drop | walk | fly | build (기본 fade)
//   set: 이 장을 읽으면 바뀌는 장면 상태 (예: 물 높이). 앞 장의 변화를 '변형'할 때 쓴다.
//   showIf / hideIf (layers 안): 상태에 따라 보이거나 숨는다.
//   speech: { who, text } 또는 여러 개 [{...},{...}] (차례로 나온다)
//   quiz:   { q, options:[{icon,text}], answer(0|1), hint }
//   hintAt: 이 장에서 바뀔 자리 (바로 앞 장까지 읽었을 때 반짝이는 '?'로 예고)
//   transient: true 이면 애니메이션 동안만 보인다 (예: 동물들이 방주로 들어가 사라짐)
// ============================================================
(window.SCENE_BOOKS = window.SCENE_BOOKS || []).push({
  id: 'genesis-1-11',
  book: '창세기',
  title: '창조와 노아',
  icon: '🌍',
  from: 1,
  to: 11,
  intro: '땅이 혼돈하고 공허하며…',
  ending: { badge: '창조와 노아 완성!', next: { title: '아브라함의 여정', ready: false } },

  // 나중에 진짜 그림으로 바꿀 때 여기만 채우면 된다. 예: sun: 'assets/genesis/sun.png'
  // (그림 크기는 scene.html의 ART_BOX에 적힌 자리 크기에 맞추면 된다)
  ASSETS: {},

  chapters: [
    {
      chapter: 1, title: '빛이 있으라', summary: '하나님이 엿새 동안 세상을 지으셨어요.',
      animation: 'steps',
      layers: [
        { id: 'light',   art: 'light',   delay: 0,   anim: 'fade' },
        { id: 'sky',     art: 'sky',     delay: 0.5, anim: 'fade' },
        { id: 'sea',     art: 'sea',     delay: 1.0, anim: 'rise' },
        { id: 'land',    art: 'land',    delay: 1.4, anim: 'rise' },
        { id: 'sun',     art: 'sun',     delay: 1.9, anim: 'grow' },
        { id: 'moon',    art: 'moon',    delay: 2.1, anim: 'grow' },
        { id: 'stars',   art: 'stars',   delay: 2.3, anim: 'fade' },
        { id: 'plants',  art: 'plants',  delay: 2.6, anim: 'grow' },
        { id: 'fish',    art: 'fish',    delay: 2.9, anim: 'fade' },
        { id: 'birds',   art: 'birds',   delay: 3.1, anim: 'fly' },
        { id: 'animals', art: 'animals', delay: 3.3, anim: 'grow', hideIf: 'flood' }
      ],
      speech: { who: 'sun', text: '첫 출근이에요!' },
      quiz: { q: '하나님이 맨 처음 만드신 것은?', options: [{ icon: '💡', text: '빛' }, { icon: '🌳', text: '나무' }], answer: 0,
              hint: '"빛이 있으라!" 하고 말씀하셨어요.' },
      hintAt: { x: 180, y: 150 }
    },
    {
      chapter: 2, title: '에덴동산', summary: '하나님이 사람을 지으시고 에덴동산에 두셨어요.',
      layers: [
        { id: 'river',   art: 'river',   delay: 0,   anim: 'fade', hideIf: 'oldWorldGone' },
        { id: 'trees2',  art: 'edenTrees', delay: 0.4, anim: 'grow', hideIf: 'oldWorldGone' },
        { id: 'gate',    art: 'gate',    delay: 0.8, anim: 'fade', hideIf: 'oldWorldGone' },
        { id: 'adam',    art: 'people',  delay: 1.2, anim: 'grow', hideIf: 'oldWorldGone' },
        { id: 'hippo',   art: 'hippo',   delay: 1.6, anim: 'grow', hideIf: 'oldWorldGone' }
      ],
      speech: { who: 'adam', text: '너는… 하마!' },
      quiz: { q: '아담이 동물들에게 해 준 것은?', options: [{ icon: '🏷️', text: '이름 짓기' }, { icon: '🎂', text: '생일 파티' }], answer: 0,
              hint: '아담이 동물을 부르는 대로 그 이름이 되었어요.' },
      hintAt: { x: 80, y: 395 }
    },
    {
      chapter: 3, title: '뱀과 열매', summary: '먹지 말라던 열매를 먹고 동산을 떠났어요.',
      set: { gateClosed: true },
      layers: [
        { id: 'snake',   art: 'snake',   delay: 0,   anim: 'grow', hideIf: 'oldWorldGone' },
        { id: 'fruit',   art: 'fruit',   delay: 0.5, anim: 'drop', hideIf: 'oldWorldGone' }
      ],
      speech: { who: 'snake', text: '딱 한 입만~' },
      quiz: { q: '뱀이 먹어 보라고 한 것은?', options: [{ icon: '🍎', text: '먹지 말라던 열매' }, { icon: '🍕', text: '피자' }], answer: 0,
              hint: '동산 가운데 나무의 열매였어요.' },
      hintAt: { x: 110, y: 372 }
    },
    {
      chapter: 4, title: '가인과 아벨', summary: '아벨은 양을, 가인은 곡식을 드렸어요.',
      layers: [
        { id: 'altars',  art: 'altars',  delay: 0,   anim: 'rise', hideIf: 'oldWorldGone' },
        { id: 'flame',   art: 'flame',   delay: 0.9, anim: 'grow', hideIf: 'oldWorldGone' }
      ],
      speech: { who: 'abel', text: '가장 좋은 걸 드릴래요!' },
      quiz: { q: '아벨이 하나님께 드린 것은?', options: [{ icon: '🐑', text: '첫 새끼 양' }, { icon: '🌾', text: '곡식' }], answer: 0,
              hint: '아벨은 양을 치는 사람이었어요.' },
      hintAt: { x: 296, y: 412 }
    },
    {
      chapter: 5, title: '므두셀라 969살', summary: '아담부터 노아까지 자손이 이어졌어요.',
      layers: [
        { id: 'family',  art: 'family',  delay: 0,   anim: 'walk', hideIf: 'oldWorldGone' },
        { id: 'cake',    art: 'cake',    delay: 1.2, anim: 'grow', hideIf: 'oldWorldGone' }
      ],
      speech: { who: 'grandpa', text: '초가 969개… 숨차!' },
      quiz: { q: '므두셀라는 몇 살까지 살았을까?', options: [{ icon: '🎂', text: '969살' }, { icon: '🎈', text: '10살' }], answer: 0,
              hint: '성경에서 가장 오래 산 사람이에요!' },
      hintAt: { x: 207, y: 420 }
    },
    {
      chapter: 6, title: '방주를 지어요', summary: '노아가 큰 배, 방주를 지었어요.',
      set: { ark: 'frame' },
      layers: [
        { id: 'ark',     art: 'ark',     delay: 0,   anim: 'build' },
        { id: 'noah',    art: 'noah',    delay: 0.4, anim: 'grow', hideIf: 'oldWorldGone' }
      ],
      speech: { who: 'noah', text: '뚝딱뚝딱! 맑은 날에 배?' },
      quiz: { q: '하나님이 노아에게 만들라고 하신 것은?', options: [{ icon: '🚢', text: '방주' }, { icon: '🏰', text: '성' }], answer: 0,
              hint: '물 위에 뜨는 아주 큰 배예요.' },
      hintAt: { x: 195, y: 334 }
    },
    {
      chapter: 7, title: '40일 동안 비', summary: '동물들이 둘씩 타고, 물이 땅을 덮었어요.',
      animation: 'flood',
      set: { ark: 'done', flood: true, oldWorldGone: true },
      layers: [
        { id: 'pairs',   art: 'pairs',   delay: 0,   anim: 'walk', transient: true },
        { id: 'rain',    art: 'rain',    delay: 1.3, anim: 'fade', showIf: 'flood' }
      ],
      speech: { who: 'giraffe', text: '천장이… 목이…!' },
      quiz: { q: '동물들은 방주에 어떻게 들어갔을까?', options: [{ icon: '🐾', text: '둘씩 짝지어' }, { icon: '🏃', text: '혼자 한 마리씩' }], answer: 0,
              hint: '암컷과 수컷, 짝을 지어 들어갔어요.' },
      hintAt: { x: 250, y: 60 }
    },
    {
      chapter: 8, title: '비둘기와 올리브잎', summary: '물이 빠지고 비둘기가 올리브잎을 물어 왔어요.',
      set: { flood: false, afterFlood: true, ark: 'rest' },
      layers: [
        { id: 'dove',    art: 'dove',    delay: 1.2, anim: 'fly' }
      ],
      speech: { who: 'dove', text: '올리브잎 배달 왔어요!' },
      quiz: { q: '땅이 말랐는지 알아보려고 노아가 보낸 새는?', options: [{ icon: '🕊️', text: '비둘기' }, { icon: '🦜', text: '앵무새' }], answer: 0,
              hint: '올리브잎을 물고 돌아온 하얀 새예요.' },
      hintAt: { x: 300, y: 205 }
    },
    {
      chapter: 9, title: '무지개 약속', summary: '하나님이 무지개로 약속하셨어요.',
      animation: 'highlight',
      layers: [
        { id: 'rainbow', art: 'rainbow', delay: 0,   anim: 'fade' },
        { id: 'noahOut', art: 'noahFamily', delay: 0.8, anim: 'grow' }
      ],
      speech: { who: 'noahOut', text: '와~ 약속의 무지개!' },
      quiz: { q: '하나님이 약속의 표시로 보여 주신 것은?', options: [{ icon: '🌈', text: '무지개' }, { icon: '🌠', text: '별똥별' }], answer: 0,
              hint: '비가 그친 뒤 하늘에 뜨는 일곱 빛깔이에요.' },
      hintAt: { x: 180, y: 150 }
    },
    {
      chapter: 10, title: '온 땅으로 퍼져요', summary: '노아의 자손들이 온 땅에 퍼졌어요.',
      layers: [
        { id: 'villages', art: 'villages', delay: 0, anim: 'grow' },
        { id: 'walkers',  art: 'walkers',  delay: 0.3, anim: 'fade', hideIf: 'scattered' }
      ],
      speech: { who: 'kid', text: '우린 저쪽 동네로 이사!' },
      quiz: { q: '노아의 자손들은 어떻게 살았을까?', options: [{ icon: '🗺️', text: '여러 곳으로 퍼졌어요' }, { icon: '🏠', text: '한 집에만 살았어요' }], answer: 0,
              hint: '나라와 마을이 여러 개 생겼어요.' },
      hintAt: { x: 60, y: 430 }
    },
    {
      chapter: 11, title: '바벨탑', summary: '탑을 쌓다가 말이 달라져 흩어졌어요.',
      animation: 'babel',
      set: { scattered: true },
      layers: [
        { id: 'tower',   art: 'tower',   delay: 0,   anim: 'build' },
        { id: 'builders', art: 'builders', delay: 1.6, anim: 'fade' }
      ],
      speech: [{ who: 'worker1', text: '벽돌 줘!' }, { who: 'worker2', text: '…바나나요?' }],
      quiz: { q: '바벨탑을 쌓던 사람들에게 생긴 일은?', options: [{ icon: '🗣️', text: '말이 서로 달라졌어요' }, { icon: '🍦', text: '아이스크림이 생겼어요' }], answer: 0,
              hint: '서로 말을 알아들을 수 없게 되었어요.' },
      hintAt: { x: 120, y: 300 }
    }
  ]
});
