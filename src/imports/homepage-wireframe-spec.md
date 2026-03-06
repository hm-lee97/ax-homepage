# Wylie AX Center — Homepage Wireframe Specification

---

## FRAME 1: AXC_HOME_DESKTOP_1440

**Canvas:** 1440 × ~7400px | Container: 1200px centered | 12-col / 24px gutter | BG: #F5F5F5

---

### S01 — HEADER (Sticky)
**Height:** 72px | **BG:** #FFFFFF | **Shadow:** 0 2px 8px rgba(0,0,0,0.08) | **Z:** 100

```
+---------------------------------------------------------------------+
|  [Logo: Wylie AX Center — 120x32px, purple wordmark]               |
|  col 1-2                                                            |
|                                                                     |
|  NAV LINKS (col 4-9, center-aligned, 16px Medium, gap 40px)        |
|  AX 소개 | 솔루션 | 사례 | 인사이트                                  |
|                                                                     |
|  CTA GROUP (col 11-12, right-aligned)                               |
|  [Primary Btn: AX 솔루션 — 140x40px, fill #9932CC, text #FFF]      |
+---------------------------------------------------------------------+
```
**Components:** `NavBar`, `LogoLockup`, `NavLink x 4`, `ButtonPrimary`
**Motion:** BG fades to white + shadow appears on scroll >72px (200ms ease)

---

### S02 — HERO
**Height:** 100vh (min 800px) | **BG:** #1A1A1A | **Overflow:** hidden

```
LEFT COLUMN (col 1-6, vertically centered, padding-top 120px)
-------------------------------------------------------------
[Eyebrow Tag — 14px Cap, #9932CC, letter-spacing 2px, margin-bottom 24px]
"세상에서 가장 강력한 보랏빛, 우리는 퍼플페르소나입니다"

[H1 — 56px Bold, #FFFFFF, line-height 1.2, max-width 540px]
"Wylie AX Center —
고객 경험의 모든
순간을 최적화하다"

[Sub1 — 20px Medium, #9932CC, margin-top 24px]
"세상에 없던 새로운 판을 만듭니다"

[Sub2 — 16px Regular, #B0B0B0, margin-top 12px, max-width 480px]
"데이터 기반 전략에서 사용자 중심 설계까지,
Total eXperience 컨설팅"

[CTA GROUP — margin-top 48px]
  [ButtonPrimary: "AX 솔루션 보기" — 200x52px, #9932CC fill]

[Trust Strip — margin-top 64px, flex row, gap 32px]
  [Stat: "18년" / Caption "컨설팅 경험"]
  [Divider 1px #333]
  [Stat: "200+" / Caption "성공 사례"]
  [Divider 1px #333]
  [Stat: "98%" / Caption "고객 만족도"]
  (All stats: 32px Bold #FFD700, Caption 14px #888)

RIGHT COLUMN (col 7-12, vertically centered)
--------------------------------------------
[AX Architecture Diagram — 560x480px, dark card #0D0D0D, border-radius 16px]

  Center Node: "AX Core" (72x72px circle, fill #9932CC, 16px Bold #FFF)

  4 Connected Nodes (each 120x80px rounded rect, #1E1E1E border #333):
    +---------------+   <--top-->   +---------------+
    |  Strategy     |               |  Experience   |
    |  . Vision     |               |  . Journey    |
    |  . Roadmap    |               |  . UX Design  |
    +---------------+               +---------------+
           | connector lines SVG, stroke #9932CC 40% |
    +---------------+   <--bot-->   +---------------+
    |  Platform     |               |  Growth       |
    |  . Cloud/SaaS |               |  . Analytics  |
    |  . Integration|               |  . Optimization|
    +---------------+               +---------------+

  [Tooltip on hover — each node — 200x100px, #2A2A2A, border-radius 8px]
  Client: / Problem: / Approach: / Result: placeholder lines

BG DECORATION: radial gradient from #9932CC 5% opacity at center-right
```
**Components:** `HeroEyebrow`, `HeroH1`, `HeroSub`, `ButtonPrimary`, `HeroStat x 3`, `AXArchDiagram`, `NodeCard x 4`, `HoverTooltip`
**Motion:** Left col — fade+translateY(-20px) 300ms; Diagram nodes — stagger fade 200ms each

---

### S03 — AX OPERATING MODEL
**Height:** 640px | **BG:** #FFFFFF | **Padding:** 120px vertical

```
[Section Label — 14px Cap #9932CC, center, margin-bottom 16px]
"AX OPERATING MODEL"

[H2 — 40px Bold #1A1A1A, center, max-width 600px, mx-auto]
"AX Operating Model"

[Body — 16px Regular #333, center, max-width 680px, mx-auto, margin-top 24px]
"AX Operating Model은 전략(Strategy), 경험(Experience), 플랫폼(Platform),
성장(Growth)을 하나의 실행 체계로 연결합니다.
단계별 개선이 아닌 통합된 피드백 루프로 지속적 혁신을 구현합니다."

[Diagram Block — margin-top 64px, 960x320px, centered]

  Connector bar (horizontal SVG, full width, stroke #E0E0E0 2px dashed)

  Node Row (flex, space-between, 4 nodes):
  +------------+  ->  +------------+  ->  +------------+  ->  +------------+
  |  Strategy  |      | Experience |      |  Platform  |      |   Growth   |
  | 80x80 icon |      |            |      |            |      |            |
  | Title 18px |      |            |      |            |      |            |
  | Desc 14px  |      |            |      |            |      |            |
  +------------+      +------------+      +------------+      +------------+
  (Each node: 200x180px, border-radius 12px, border 1px #E8E8E8)
  (Center "AX Core" badge 40x40 floats above connector midpoint, fill #9932CC)

  Hover state: hovered node -> bg #9932CC10, border #9932CC, connector lines highlight to #9932CC
```
**Components:** `SectionLabel`, `SectionH2`, `BodyCopy`, `ModelDiagram`, `ModelNode x 4`, `AXCoreBadge`

---

### S04 — PROBLEM
**Height:** 600px | **BG:** #F5F5F5 | **Padding:** 120px vertical

```
[H2 — 40px Bold #1A1A1A, center]
"디지털 경험은 여전히 단절되어 있습니다"

[Sub — 16px #555, center, max-width 560px, mt-16px]
"채널·데이터·UX·운영이 따로 움직이면 개선이 누적되지 않습니다."

[3-Card Row — col 1-4 / 5-8 / 9-12, gap 24px, margin-top 64px]

Card Template (each 376x280px, BG #FFFFFF, border-radius 16px, padding 40px):
+------------------------------------+
| [Icon 48x48px — outline style]     |
|                                    |
| [Card H3 — 22px Semibold #1A1A1A] |
|  "채널은 늘었지만                   |
|   경험은 단절됩니다"                |
|                                    |
| [Desc — 14px #555, 2 lines]       |
|  ████████████████████             |
|  ████████████████                 |
+------------------------------------+

  Card 1: Icon=ChannelSplit  "채널은 늘었지만 경험은 단절됩니다"
  Card 2: Icon=DataDelay     "데이터는 있지만 의사결정이 느립니다"
  Card 3: Icon=RepeatFail    "개선이 반복되지 않습니다"

  Hover: box-shadow 0 8px 32px rgba(153,50,204,0.12), translateY(-4px) 200ms
```
**Components:** `SectionH2`, `SubCopy`, `ProblemCard x 3`, `IconOutline x 3`

---

### S05 — AX FRAMEWORK
**Height:** 680px | **BG:** #FFFFFF | **Padding:** 120px vertical

```
LEFT COLUMN (col 1-5)
----------------------
[Section Label — 14px Cap #9932CC]
"TOTAL EXPERIENCE FRAMEWORK"

[H2 — 40px Bold #1A1A1A, mt-16px]
"Total eXperience란?"

[Bullet List — mt-40px, gap 24px]
Each bullet (flex row, gap 16px):
  [Check Icon 24px #9932CC] [Text 16px #333]

  v 데이터 기반 인사이트
  v 사용자 중심 UX/UI 설계
  v 안정적인 플랫폼 구축
  v 지속적인 성과 최적화

RIGHT COLUMN (col 7-12)
------------------------
[4-Step Diagram — 560x400px]

Vertical step flow with connecting line (left 28px from edge):

  +--- Step 1 -----------------------------------------------+
  |  [Num badge 40x40 fill #9932CC "01"]                      |
  |  [Label 18px Bold "Data"]                                 |
  |  [Desc 14px #555 — 1 line placeholder]                    |
  +----------------------------------------------------------+
       | connector 32px stroke #9932CC30
  +--- Step 2 -----------------------------------------------+
  |  [Num badge "02"] [Label "UX"]                            |
  +----------------------------------------------------------+
       |
  +--- Step 3 -----------------------------------------------+
  |  [Num badge "03"] [Label "Platform"]                      |
  +----------------------------------------------------------+
       |
  +--- Step 4 -----------------------------------------------+
  |  [Num badge "04"] [Label "Growth"]                        |
  +----------------------------------------------------------+

  Active/hover step: badge fill #9932CC, row bg #9932CC08, bold label
  Inactive: badge fill #E8E8E8, label #999
```
**Components:** `SectionLabel`, `H2`, `BulletItem x 4`, `StepDiagram`, `StepRow x 4`, `StepBadge`

---

### S06 — SOLUTIONS
**Height:** 760px | **BG:** #1A1A1A | **Padding:** 120px vertical

```
[Section Label — 14px Cap #9932CC, center]
"CORE SERVICES"

[H2 — 40px Bold #FFFFFF, center]
"Wylie AX의 4가지 핵심 서비스"

[Sub — 16px #888, center, mt-16px]
"전략 → 설계 → 구축 → 운영/최적화까지 One-Stop"

[2x2 Card Grid — mt-64px, col 1-6 / 7-12, row-gap 24px]

Card Template (each 588x240px, BG #242424, border-radius 16px, padding 40px):
+------------------------------------------------------+
| [Icon 48px #9932CC]  [Title 22px Bold #FFF]          |
|                      [1-line Desc 14px #888]         |
|                                                      |
| [Tag Row: gap 8px]                                   |
|  [Tag #2A2A2A border #444 12px #BBB "Fromto[X]"]    |
|  [Tag "NEP"]  [Tag "Strategy"]                       |
|                                                      |
| [Link "자세히 보기 >" 14px #9932CC]                  |
|                                                      |
| [Hover reveal — 14px #888, 1 extra desc line]        |
+------------------------------------------------------+

  Card 1 (top-left):  Icon=DataChart  "데이터 & 인사이트"     Tags: Fromto[X] / NEP / Analytics
  Card 2 (top-right): Icon=BuildGrid  "플랫폼 구축"           Tags: Cloud / SaaS / Integration
  Card 3 (bot-left):  Icon=UXPen      "UX/UI 설계"           Tags: Research / Design / Prototype
  Card 4 (bot-right): Icon=CloudSaaS  "클라우드 & SaaS"       Tags: 우리가잇다 / Migration / Ops

  Hover: border 1px #9932CC, box-shadow 0 0 24px rgba(153,50,204,0.2), reveal extra line fade 200ms
```
**Components:** `SectionLabel`, `H2Dark`, `SubCopyMuted`, `SolutionCard x 4`, `TagChip`, `HoverReveal`

---

### S07 — INTERACTIVE CASE MAP
**Height:** 760px | **BG:** #F5F5F5 | **Padding:** 120px vertical

```
[H2 — 40px Bold #1A1A1A, center, mb-64px]
"Case Map — 산업 x 역량으로 탐색하기"

TWO-COLUMN LAYOUT
------------------
LEFT FILTER PANEL (col 1-2, 240px wide, sticky top 120px)

  [Panel BG #FFFFFF, border-radius 12px, padding 24px, border 1px #E8E8E8]

  [Label 12px Cap #999 mb-12] "INDUSTRY"
  [FilterChip row, wrap, gap 8px]
    [전체 — active: fill #9932CC text #FFF] [금융] [마케팅] [플랫폼]

  [Divider 1px #F0F0F0 my-24px]

  [Label 12px Cap #999 mb-12] "CAPABILITY"
  [FilterChip row, wrap, gap 8px]
    [Strategy] [UX] [Platform] [AI] [Marketing]

  [Reset Link — 12px #9932CC mt-24px] "필터 초기화"

RIGHT MAP AREA (col 3-12)

  [Map Container — 920x520px, BG #FFFFFF, border-radius 16px, border 1px #E8E8E8, relative]

  Axis Labels:
    X-axis: "Experience <---------------------------> Platform" (14px #999, bottom center)
    Y-axis: "Strategy" (top) / "Execution" (bottom) (14px #999, rotated, left center)

  Axis Lines: thin 1px #EEEEEE, centered cross

  Quadrant Labels (14px #DDDDDD, each quadrant corner):
    TL "Strategy x Experience" | TR "Strategy x Platform"
    BL "Execution x Experience" | BR "Execution x Platform"

  Case Nodes (8-10 nodes, each 40x40px circle):
    Default: fill #9932CC30, border 2px #9932CC, 14px Bold #9932CC initials
    Hover: scale 1.2, fill #9932CC, text #FFF -> show Tooltip

  [Tooltip — 220x140px, BG #1A1A1A border-radius 10px, padding 16px]
    Client:   ████████
    Problem:  ██████████████
    Approach: ████████████
    Result:   ██████ (14px #FFF, label 12px #999)
    [Click "자세히 보기" 12px #9932CC]

  Sample node positions (approximate % from TL):
    Node A: 20%,25%  Node B: 45%,15%  Node C: 70%,20%
    Node D: 15%,60%  Node E: 50%,50%  Node F: 80%,45%
    Node G: 30%,75%  Node H: 65%,70%  Node I: 85%,80%
```
**Components:** `FilterPanel`, `FilterChip`, `CaseMap`, `AxisLabel`, `QuadLabel`, `CaseNode x 9`, `CaseTooltip`, `CaseModal`

---

### S08 — CASE STUDIES + MODAL
**Height:** 840px | **BG:** #FFFFFF | **Padding:** 120px vertical

```
[H2 — 40px Bold, center] "Wylie AX의 성공 사례"

[Tab Bar — mt-40px, center, gap 0, border-bottom 2px #E8E8E8]
  [Tab 120x48px — 16px Medium]
  [전체 — active: border-bottom 2px #9932CC, text #9932CC]  [금융]  [마케팅]  [플랫폼]

[6-Card Grid — mt-48px, 3 columns col 1-4/5-8/9-12, row-gap 32px]

Card Template (each 376x320px, BG #F5F5F5, border-radius 12px, overflow hidden):
+----------------------------------+
| [Image Placeholder 376x200px     |  <- 16:9 ratio, BG #DDDDDD
|  "Client Logo + Project Visual"] |
+----------------------------------+
| [Client Name — 14px Bold #9932CC]|
| [Summary — 16px #333, 1 line]   |
| [Tags: 12px chips, 2-3 tags]    |
| [CTA "사례 보기 >" 14px #9932CC] |
+----------------------------------+

Hover: image scales 1.05 (overflow hidden), shadow 0 8px 24px rgba(0,0,0,0.12)
Click -> opens Case Modal (overlay)

-------------------------------------------------------------------
CASE MODAL TEMPLATE
-------------------------------------------------------------------
[Overlay: 100vw x 100vh, BG rgba(0,0,0,0.72), z-index 200]
[Modal Panel: 880xauto, BG #FFFFFF, border-radius 20px, padding 64px, centered]

  [Close — X icon 24px, top-right 24px, #999, hover #1A1A1A]
  [ESC key / overlay click dismisses]

  MODAL HEADER:
    [Client Name — 24px Bold #1A1A1A]
    [Project Title — 16px #555 mt-8px]
    [Tag chips row — mt-16px, gap 8px, 12px #9932CC border]

  MODAL BODY (mt-40px, two-col 60/40 split):
    LEFT (528px):
      [Section: "Overview" — 14px Cap #9932CC mb-12px]
      [3-line body 16px #333 — placeholder]

      [Section: "Problem" — 14px Cap #9932CC mb-12px mt-32px]
      [2-4 line body 16px #333]

      [Section: "Approach" — 14px Cap #9932CC mb-12px mt-32px]
      Step cards (3 items, flex col, gap 12px):
        [StepNum 14px Bold #9932CC] [Step desc 14px #555]

    RIGHT (288px):
      [KPI Cards — 3 stacked, each 288x88px, BG #F5F5F5, border-radius 10px, padding 20px]
        [KPI value — 32px Bold #FFD700] [KPI label 14px #555]
        e.g. "uparrow 42%" / "전환율 개선"

      [Tech Stack — mt-32px]
        [Label 12px Cap #999] "TECH STACK"
        [Tag chips row — 12px #555 BG #EEEEEE]

  MODAL FOOTER (mt-48px, flex end):
    [Link "< 사례 목록" 14px #999]
```
**Components:** `TabBar`, `TabItem x 4`, `CaseCard x 6`, `CaseImagePlaceholder`, `CaseModal`, `ModalOverlay`, `KPICard x 3`, `StepItem x 3`, `TechTag`

---

### S09 — INSIGHTS
**Height:** 720px | **BG:** #F5F5F5 | **Padding:** 120px vertical

```
[Section Header Row — flex between, align-center, mb-64px]
  LEFT:
    [H2 — 40px Bold #1A1A1A] "AX Insights"
    [Sub — 16px #555 mt-12px]
    "AI와 경험 설계가 만드는 디지털 전환 인사이트"
  RIGHT:
    [Link "전체 보기 >" — 16px #9932CC]

[3-Card Row — col 1-4/5-8/9-12, gap 24px]

Card Template (each 376x400px, BG #FFFFFF, border-radius 16px, overflow hidden):
+----------------------------------+
| [Hero Image 376x200px — #DDDDDD] |
+----------------------------------+
| [Category Tag — 12px #9932CC]    |
|  e.g. "AI & Experience"          |
|                                  |
| [Title — 20px Semibold #1A1A1A   |
|  max 2 lines, line-height 1.4]   |
|  "████████████████               |
|   ████████████"                  |
|                                  |
| [Summary — 14px #555, 2-3 lines] |
|  ████████████████                |
|  ███████████████████             |
|  ████████████                    |
|                                  |
| [CTA "Read insight >" 14px #9932CC] |
+----------------------------------+

Hover: shadow 0 8px 24px rgba(0,0,0,0.10), image scale 1.04

-------------------------------------------------------------------
INSIGHT ARTICLE TEMPLATE BLOCK (separate frame reference)
-------------------------------------------------------------------
Frame: AXC_INSIGHT_ARTICLE_1440 (reference, 1440xauto)

  [ArticleHero — full-width 1440x480px image placeholder, overlay gradient]
    [Article Title H1 56px #FFF, bottom-left, max-width 720px]
    [Meta row: Category / Date / Read time — 14px #CCC]

  [ArticleBody — col 2-8, mt 80px]
    [Lead paragraph 20px #333 — 3 lines]
    [Body paragraphs 16px #333 — repeated blocks]
    [Pull quote — border-left 4px #9932CC, 22px Italic #9932CC, mx-64px my-48px]
    [Image block — full col width, caption 14px #888]

  [Related Articles — mt-120px]
    [H3 "관련 인사이트" 28px]
    [3 MiniCards — col 1-4/5-8/9-12, 376x160px]
```
**Components:** `SectionHeader`, `H2`, `SubCopy`, `ViewAllLink`, `InsightCard x 3`, `CategoryTag`, `ArticleHero`, `ArticleBody`, `PullQuote`, `RelatedCard x 3`

---

### S10 — WHY WYLIE
**Height:** 560px | **BG:** #FFFFFF | **Padding:** 120px vertical

```
[H2 — 40px Bold #1A1A1A, center, mb-64px] "Why Wylie"

[5-Card Row — equal-width, col each ~216px, gap 24px]

Card Template (each ~216x280px, BG #F5F5F5, border-radius 16px, padding 32px, text-center):
+-----------------+
| [Icon 56x56px   |
|  circle fill    |
|  #9932CC20,     |
|  icon #9932CC]  |
|                 |
| [Number — 40px  |
|  Bold #FFD700]  |
|  e.g. "18년"    |
|                 |
| [Title — 16px   |
|  Bold #1A1A1A]  |
|  "18년의 경험"  |
|                 |
| [Desc — 14px    |
|  #555, 2 lines] |
+-----------------+

  Card 1: Icon=Clock     Num="18년"  Title="18년의 경험"
  Card 2: Icon=AI chip   Num="AI"    Title="AI 기술 리더십"
  Card 3: Icon=Puzzle    Num="1"     Title="통합 솔루션(One-Stop)"
  Card 4: Icon=Shield    Num="A+"    Title="기업 신뢰도"
  Card 5: Icon=Target    Num="ROI"   Title="성과 중심"

  Hover: bg #9932CC08, border 1px #9932CC, icon bg #9932CC, icon #FFF — 200ms
```
**Components:** `SectionH2`, `WhyCard x 5`, `IconCircle`, `KPINumber`, `CardTitle`, `CardDesc`

---

### S11 — FOOTER
**Height:** 280px | **BG:** #0D0D0D | **Padding:** 80px vertical

```
TOP ROW (flex between, align-top, mb-48px):

  COL 1 (240px):
    [Logo — 120x32px, white variant]
    [Tagline 14px #666 mt-16px]
    "Total eXperience Consulting"
    [Copyright 12px #444 mt-24px]
    "c 2024 Wylie AX Center. All rights reserved."

  COL 2-3 (160px each, gap 80px):
    [Nav Group 1: "서비스" label 12px Cap #9932CC mb-16px]
      [Links: 14px #666, gap 12px, hover #FFF]
      AX 컨설팅 / 데이터 & 인사이트 / UX/UI 설계 / 플랫폼 구축

    [Nav Group 2: "회사" label 12px Cap #9932CC mb-16px]
      소개 / 사례 / 인사이트 / 채용

  COL 4 (160px):
    [Nav Group 3: "지원" label 12px Cap #9932CC mb-16px]
      개인정보처리방침 / 이용약관

  COL 5 (160px, right-align):
    [Social icons 32px, gap 16px: LinkedIn / Instagram / YouTube]
    Each: 32x32px circle #333, icon #888
    Hover: bg #9932CC, icon #FFF
```
**Components:** `FooterLogo`, `FooterNav x 3`, `FooterSocial`

---
---

## FRAME 2: AXC_HOME_TABLET_1024

**Canvas:** 1024 × ~9600px | Container: 896px | 8-col / 24px gutter | Section padding: 80px

```
SECTION ADAPTATIONS FROM DESKTOP -> TABLET:
============================================

S01 HEADER (Height: 64px)
  Logo left (col 1-2) | Nav collapses -> Hamburger icon (col 8)
  [HamburgerBtn 40x40px right-aligned]
  [MobileNav Drawer — slides in from right, 320px wide, BG #1A1A1A]
    [Nav links stacked, 18px, gap 24px, padding 40px]
    [Primary CTA button below nav links]

S02 HERO (Height: 100vh, min 700px)
  Layout shifts to SINGLE COLUMN, stacked
  Top: text block (col 1-8, padding-top 80px)
    H1 -> 44px Bold
    Sub text -> 15px
    CTA: single primary button full-width
    Trust strip -> 3 stats, reduced gap 24px
  Bottom: AX Diagram (col 1-8, height 360px, margin-top 48px)
    Nodes rearranged: 2x2 grid layout at 50% scale

S03 AX OPERATING MODEL (Height: 560px)
  Header: centered, same
  Diagram: 4 nodes in 2x2 grid (not linear row)
    Each node 200x160px, BG #F5F5F5
    Center AXCore badge repositioned to grid center (absolute)

S04 PROBLEM (Height: 680px)
  3 cards -> SINGLE COLUMN stacked, each col 1-8
  Card height 200px, flex-row layout inside card (icon left, text right)

S05 AX FRAMEWORK (Height: 720px)
  Stacked: text block TOP (col 1-8), step diagram BELOW (col 1-8)
  Step diagram horizontal -> still vertical steps, full width

S06 SOLUTIONS (Height: 840px)
  2x2 grid -> 1x4 stacked column
  Each card col 1-8, height 200px, flex-row layout

S07 CASE MAP (Height: 720px)
  Filter panel: horizontal chips row ABOVE map (not sidebar)
    [Industry chips] then [Capability chips] in 2 rows, col 1-8
  Map: col 1-8, height 480px, same axes
  Nodes slightly larger 48x48 for touch targets

S08 CASE STUDIES (Height: 920px)
  Tabs: scrollable horizontal, col 1-8
  Grid: 2x3 (2 columns), each card col 1-4 / 5-8, row-gap 24px
  Case Modal: 680px wide, padding 48px

S09 INSIGHTS (Height: 800px)
  Section header: stacked (H2 full-width, "전체 보기" below right)
  Cards: 1 featured (col 1-8, horizontal card 896x220px)
         2 small below (col 1-4 / 5-8, 420x320px)

S10 WHY WYLIE (Height: 640px)
  5 cards -> wrap into 3-2 layout
    Row 1: 3 cards (~268px each)
    Row 2: 2 cards centered (268px each)

S11 FOOTER (Height: 360px)
  Top row: 2 rows
    Row 1: Logo (col 1-3) + Social icons (col 6-8)
    Row 2: 3 nav groups in flex-row, space-between
  Copyright: left-aligned, no bottom row
```

---
---

## FRAME 3: AXC_HOME_MOBILE_390

**Canvas:** 390 × ~11800px | Container: 358px (16px side margin) | 4-col / 16px gutter | Section padding: 60px

```
SECTION ADAPTATIONS -> MOBILE:
================================

S01 HEADER (Height: 56px, sticky)
  [Logo 96x24px — left] [Hamburger 40x40 — right]
  BG #FFFFFF, shadow on scroll
  [Drawer nav: full-screen overlay, BG #1A1A1A]
    [X close top-right]
    [Nav links stacked 20px Bold, gap 32px, center-aligned]
    [Primary CTA button full-width, mt-48px]

S02 HERO (Height: auto ~640px, BG #1A1A1A)
  SINGLE COLUMN, padding-top 60px
  [Eyebrow — 12px Cap, #9932CC, letter-spacing 1.5px]
  [H1 — 36px Bold #FFF, line-height 1.25]
    "Wylie AX Center —
    고객 경험의 모든
    순간을 최적화하다"
  [Sub1 — 16px #9932CC, mt-16px]
  [Sub2 — 14px #888, mt-8px]
  [CTA Button — full-width 358x48px, mt-40px]
    Primary: #9932CC fill, "AX 솔루션 보기"
  [Trust Strip — mt-48px, flex-row 3 items, space-between]
    (24px Bold #FFD700 stats, 12px #888 captions)
  [AX Diagram — mt-48px, 358x280px, 2x2 node grid, simplified]

S03 AX OPERATING MODEL (Height: ~520px)
  H2 -> 32px, left-aligned
  Body 14px, 3 lines
  Diagram: 4 nodes in 2-col grid, each 160x120px, gap 12px
  Center badge floats at grid center

S04 PROBLEM (Height: ~540px)
  H2 -> 28px
  3 cards stacked, each col 1-4, 358xauto
    Card padding 24px, flex-col (icon top, text below)
    Icon 40px, title 18px, desc 13px

S05 AX FRAMEWORK (Height: ~560px)
  Stacked single col
  H2 -> 28px, 4 bullets (icon+text), mt-32px
  Step diagram: 4 steps vertical, full-width 358px each step 72px h

S06 SOLUTIONS (Height: ~800px)
  H2 -> 28px
  4 cards stacked, each 358x200px, flex-col, padding 28px
  Tags: 2 per card visible (3rd hidden)
  Tap to reveal extra line, second tap to navigate

S07 CASE MAP (Height: ~680px)
  Filter: horizontal scroll chips row (overflow-x scroll)
    [Industry chips] above map, single scrollable row
    [Capability chips] second row
  Map: 358x380px, same axes
    Nodes 44x44px (larger touch target)
    Tooltip: bottom sheet style (slides up from bottom 240px)

S08 CASE STUDIES (Height: ~960px)
  Tabs: horizontal scroll, 4 tabs
  Grid: 1 column stacked, each card 358xauto
    Image 358x201px (16:9), info below
    4 cards visible, "더 보기" link below
  Case Modal -> full-screen (100vw x 100vh), scroll inside

S09 INSIGHTS (Height: ~760px)
  Section header stacked
  H2 -> 28px
  3 cards: horizontal scroll carousel (overflow-x snap)
    Each card 300x340px, snap-align start
    Scroll indicator dots below

S10 WHY WYLIE (Height: ~640px)
  H2 -> 28px, center
  5 cards: horizontal scroll carousel
    Each card 200x240px, snap

S11 FOOTER (Height: ~400px)
  Logo + tagline centered (col 1-4)
  Nav: accordion collapsible groups
    [서비스 v] expands to show links
    [회사 v]
    [지원 v]
  Social icons: centered row
  Copyright: centered, 12px #444
```

---
---

## GLOBAL COMPONENT LIBRARY REFERENCE

```
ATOMS
-----
ColorToken: Primary=#9932CC / Neutral-900=#1A1A1A / Neutral-700=#333333
            Neutral-100=#F5F5F5 / Accent=#FFD700 / White=#FFFFFF
            Error=#FF4444 / Success=#44BB44

TypographyScale:
  H1    56px / Bold  / line-height 1.15 / tracking -0.5px
  H2    40px / Bold  / line-height 1.2
  H3    28px / Semi  / line-height 1.3
  H4    22px / Semi  / line-height 1.4
  Body  16px / Reg   / line-height 1.6
  Small 14px / Reg   / line-height 1.5
  Cap   12px / Med   / line-height 1 / tracking 2px / UPPERCASE

SpacingScale: 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 120px

BorderRadius: sm=8px / md=12px / lg=16px / xl=20px / full=9999px

Shadow:
  Card:   0 2px 8px rgba(0,0,0,0.08)
  Hover:  0 8px 32px rgba(153,50,204,0.12)
  Modal:  0 24px 64px rgba(0,0,0,0.32)

MOLECULES
---------
ButtonPrimary   [fill #9932CC / text #FFF / h 52px / radius 8px / px 32px]
ButtonText      [no bg / text #9932CC / underline on hover]
TagChip         [h 28px / px 12px / radius 9999px / 12px text]
FilterChip      [h 32px / px 16px / active: fill #9932CC text #FFF]
SectionLabel    [12px Cap / #9932CC / tracking 2px]
NavLink         [16px Med / #333 / hover #9932CC / active underline]

ORGANISMS
---------
NavBar (sticky), HeroSection, AXDiagram, ModelDiagram, ProblemCards,
FrameworkSection, SolutionCards, CaseMapInteractive, CaseStudyGrid,
CaseModal, InsightsGrid, WhyWylieCards, SiteFooter

MOTION
------
Fade in on scroll:     opacity 0->1, translateY 20->0, 300ms ease-out
Stagger children:      delay 80ms per child
Hover card elevation:  translateY -4px, shadow increase, 200ms ease
Hover icon color:      color transition 200ms
Modal open:            opacity 0->1 + scale 0.96->1, 250ms ease-out
Modal close:           reverse, 200ms
Tooltip:               fade 150ms, translateY 4->0
Tab indicator:         sliding underline, 200ms ease
Filter active:         bg fill sweep, 150ms
```

---

## FIGMA LAYER STRUCTURE (per frame)

```
AXC_HOME_DESKTOP_1440
+-- Frame [1440 x 7400]
    +-- HEADER [sticky, z:100]
    +-- S02_HERO [100vh]
    +-- S03_AX_OPERATING_MODEL [640]
    +-- S04_PROBLEM [600]
    +-- S05_AX_FRAMEWORK [680]
    +-- S06_SOLUTIONS [760]
    +-- S07_CASE_MAP [760]
    +-- S08_CASE_STUDIES [840]
    |   +-- [CaseModal] (hidden, toggle via prototype)
    +-- S09_INSIGHTS [720]
    |   +-- [InsightArticle] (separate frame ref)
    +-- S10_WHY_WYLIE [560]
    +-- S11_FOOTER [280]
```

---

> **Handoff Notes:**
> - All colors use local Figma variables mapped to the token table above.
> - Auto Layout enabled on all card grids; resizing mode = fill container.
> - Prototype connections: CTA buttons -> S08 (scroll to cases); Case cards -> CaseModal (overlay); Tab clicks -> filter state (component property); Hamburger -> NavDrawer (overlay).
> - Interactive components: FilterChip (2 states: default/active), CaseNode (3 states: default/hover/selected).
> - Export slices: Hero diagram SVG, AX Model diagram SVG, Step diagram SVG — all as named exports.
> - Contact/form interactions removed from scope. All "상담 신청" entry points removed.