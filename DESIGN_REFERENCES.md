# AX Center 디자인 래퍼런스

> 현재 디자인 방향: **Dark Neon Mystical** — 딥 블랙/다크 배경에 보라+퓨샤 네온 글로우, 강렬한 타이포그래피, 기하학적 구조

---

## 디자인 방향성 키워드

- Dark Tech / AI Aesthetic
- Neon Glow + Deep Purple Palette
- High Contrast Typography (font-black + tight tracking)
- Glassmorphism Cards on Dark Background
- Mystical / Cosmic Energy

---

## 참고 사이트 (직접 URL 추가 예정)

### 전체 레이아웃 / 분위기

| 사이트 | 특징 | URL |
|--------|------|-----|
|  |  |  |
|  |  |  |
|  |  |  |

### 히어로 섹션

| 사이트 | 특징 | URL |
|--------|------|-----|
|  |  |  |
|  |  |  |

### 카드 / 그리드 레이아웃

| 사이트 | 특징 | URL |
|--------|------|-----|
|  |  |  |
|  |  |  |

### 타이포그래피 스타일

| 사이트 | 특징 | URL |
|--------|------|-----|
|  |  |  |
|  |  |  |

---

## 현재 적용된 컬러 팔레트

```
배경 (Base)
  Black:        #000000
  zinc-950:     #09090b
  zinc-900:     #18181b

보라 계열 (Primary Accent)
  violet-700:   #6d28d9
  violet-600:   #7c3aed
  violet-500:   #8b5cf6
  violet-400:   #a78bfa
  violet-300:   #c4b5fd

퓨샤 계열 (Secondary Accent)
  fuchsia-700:  #a21caf
  fuchsia-600:  #c026d3
  fuchsia-500:  #d946ef
  fuchsia-400:  #e879f9
  fuchsia-300:  #f0abfc

텍스트
  White:        #ffffff
  zinc-400:     #a1a1aa  (본문 보조)
  zinc-500:     #71717a  (설명 텍스트)
  zinc-600:     #52525b  (비활성/약조)
```

---

## 글로우 스타일 레퍼런스

현재 사용 중인 shadow 패턴:

```css
/* 네온 버튼 */
box-shadow: 0 0 40px rgba(168, 85, 247, 0.6);

/* 카드 호버 */
box-shadow: 0 0 60px rgba(139, 92, 246, 0.25);

/* 아이콘 호버 */
box-shadow: 0 0 24px rgba(139, 92, 246, 0.5);

/* 센터 오브 (Hero) */
box-shadow: 0 0 80px rgba(168, 85, 247, 0.8), 0 0 160px rgba(168, 85, 247, 0.3);

/* 스탯 라인 (AXFramework) */
box-shadow: 0 0 16px rgba(168, 85, 247, 0.8), 0 0 32px rgba(168, 85, 247, 0.3);
```

---

## 타이포그래피 규칙

| 용도 | 크기 | 굵기 | tracking |
|------|------|------|----------|
| Hero H1 | 48px / 72px | black (900) | -2px |
| Section H2 | 36px / 52~56px | black (900) | -1.5px |
| Card H3 | 20~24px | bold (700) | - |
| Badge/Label | 13px | black (900) | widest (3px) |
| Body | 16~18px | medium (500) | - |
| Sub text | 14~15px | normal | - |

---

## 섹션별 배경 컬러

| 섹션 | 배경 |
|------|------|
| Hero | zinc-950 |
| AXOperatingModel | black |
| Problem | zinc-950 |
| AXFramework | zinc-950 |
| Solutions | zinc-950 |
| InteractiveCaseMap | (미정) |
| CaseStudies | (미정) |
| Insights | (미정) |
| WhyWylie | black |
| Footer | black |

> black vs zinc-950 교차 배치 → 섹션 구분감 형성

---

## 레퍼런스 이미지 / 스크린샷 (로컬 파일 경로 추가 예정)

```
/references/
  hero-inspiration-01.png
  card-layout-01.png
  typography-01.png
  ...
```

---

## 메모 / 디자인 결정 이력

- `2026-03-05`: 전체 섹션 다크 통일, Hero 네온 글로우 강화, font-black + tight tracking 도입
