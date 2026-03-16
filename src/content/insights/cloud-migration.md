---
title: "Zero-Downtime 마이그레이션을 위한 클라우드 아키텍처 전략"
date: "2025-02-20"
category: "Engineering"
thumbnail: "https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzcyNjY1NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
summary: "무중단 배포와 블루-그린 전략으로 레거시 시스템을 클라우드 네이티브로 전환하는 실전 가이드."
---

## 왜 무중단이 중요한가

금융, 의료, 공공 도메인의 엔터프라이즈 시스템은 단 몇 분의 다운타임도 허용되지 않는 경우가 많습니다. 레거시 시스템을 클라우드로 전환할 때 가장 큰 위험 요소 중 하나가 바로 서비스 중단입니다.

## 블루-그린 배포 전략

블루-그린(Blue-Green) 배포는 두 개의 동일한 프로덕션 환경을 운용하는 방식입니다.

```
[Blue 환경] ← 현재 트래픽
[Green 환경] ← 새 버전 배포 중
          ↓ 검증 완료
[Green 환경] ← 트래픽 전환
[Blue 환경] ← 대기 (롤백 준비)
```

핵심 장점:
- **즉시 롤백**: 문제 발생 시 트래픽을 Blue로 되돌리면 끝
- **실환경 테스트**: Green에서 실제 트래픽 일부로 검증 가능
- **배포 공포 제거**: 팀이 더 자주, 더 작은 단위로 배포

## 데이터베이스 마이그레이션 전략

애플리케이션보다 까다로운 것이 DB 마이그레이션입니다. **Expand-Contract 패턴**을 권장합니다.

1. **Expand**: 구 스키마와 신 스키마를 동시에 지원하는 코드 배포
2. **Migrate**: 데이터를 신 스키마로 점진적으로 이전
3. **Contract**: 구 스키마 지원 코드 제거

## Wylie의 접근법

Wylie AX Center는 마이그레이션을 기술 프로젝트가 아닌 **비즈니스 리스크 관리 프로젝트**로 접근합니다. 기술적 완성도만큼이나 이해관계자 커뮤니케이션과 롤백 시나리오 준비가 성공의 핵심입니다.
