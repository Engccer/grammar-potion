# Grammar Potion Lab — 통합 앱 제작 노트

## 구조

Word Bomb 통합 앱과 동일 패턴:
- 레슨 선택 랜딩 → 지연 오디오 로딩 → 게임 → 레슨 복귀
- `GRAMMAR_LESSONS` 배열 (모든 레슨 데이터)
- `audio_L<N>.js` (레슨별 TTS, `var`로 선언, 동적 script 주입)
- `sfx_data.js` (공유 SFX + feedback_correct/wrong)
- localStorage `grammar_potion_scores` (레슨별 점수·완료 챕터)

## 레슨별 오디오 소스

| 레슨 | TTS 엔진 | 음성 | 포맷 |
|------|---------|------|------|
| L1 | ElevenLabs v3 | Seojin | MP3 (audio/mpeg) |
| L2 | ElevenLabs v3 | Seojin | MP3 (audio/mpeg) |

두 레슨 모두 Seojin(`BaW4Cx7nYOh1XNVQBrK2`) 보이스로 통일. 한국어 중심 나레이션, intro는 영어+한국어 혼합. 이전 Gemini Kore WAV 원본은 `audio/L1-gemini-backup/`에 보관.

feedback_correct/wrong은 sfx_data.js에 Gemini Kore WAV로 포함 (효과음이라 L1 재생성 대상 아님).

## 새 레슨 추가 절차

1. Grammar Plus 워크시트 파싱 (HWP → MD)
2. `grammar_data.js`의 `GRAMMAR_LESSONS` 배열에 새 레슨 추가
3. TTS 생성 → `audio_L<N>.js` 작성 (`var AUDIO_L<N> = {...};`)
   - feedback_correct/wrong 제외 (sfx_data.js에 이미 있음)
4. 오디오 원본 백업: `audio/L<N>/`
5. `git add audio_L<N>.js grammar_data.js && git commit && git push`
6. index.html 수정 불필요

## 배포

- 통합 앱: https://engccer.github.io/grammar-potion/
- 레포: Engccer/grammar-potion
- 레거시 (독립 앱): grammar-potion-L1, grammar-potion-L2
