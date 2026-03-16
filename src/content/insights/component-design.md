---
title: "데이터에 기반한 컴포넌트 설계 가이드"
date: "2025-01-15"
category: "Design System"
thumbnail: "https://images.unsplash.com/photo-1771930629966-3c6fb074bded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbW9kZXJuJTIwdWl8ZW58MXx8fHwxNzcyNjk1NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
summary: "사용자 행동 데이터를 설계 의사결정에 연결하는 체계적인 컴포넌트 시스템 구축 방법론."
---

## 디자인 시스템의 진짜 문제

많은 조직이 디자인 시스템을 구축하지만, 실제로 팀이 일관되게 사용하는 경우는 드뭅니다. 이유는 단순합니다. **실제 사용 패턴을 반영하지 않았기 때문입니다.**

## 사용자 행동 데이터를 설계에 연결하기

컴포넌트를 만들기 전에 반드시 답해야 할 질문들:

- 이 컴포넌트를 사용자가 얼마나 자주 사용하는가?
- 어떤 컨텍스트에서 등장하는가?
- 실패 케이스는 무엇인가?

**클릭 히트맵**, **세션 레코딩**, **A/B 테스트** 데이터가 이 질문에 답을 줍니다.

## 컴포넌트 분류 체계

Wylie가 제안하는 컴포넌트 분류:

| 레벨 | 이름 | 예시 |
|------|------|------|
| L1 | Primitive | Button, Input, Icon |
| L2 | Composite | Form, Card, Modal |
| L3 | Pattern | SearchBar, DataTable |
| L4 | Template | DashboardLayout |

## 데이터 기반 개선 사이클

```
측정 → 분석 → 가설 → 설계 → 검증 → 반영
```

이 사이클이 없으면 디자인 시스템은 초기 스냅샷에 머물다 점점 현실과 괴리됩니다.

## 핵심 원칙

좋은 컴포넌트 시스템은 **개발 편의**와 **사용자 경험** 모두를 만족해야 합니다. 둘 중 하나만 추구하는 시스템은 결국 어느 쪽도 만족시키지 못합니다.
