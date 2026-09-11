# Webay Monorepo

Turborepo 및 pnpm 기반 Next.js 멀티 앱 모노레포 프로젝트입니다.

## 아키텍처 구조 (Architecture)

```text
├── apps/
│   ├── web/                   # 메인 웹 서비스 (기본 도메인용 Next.js 앱: @webay/web)
│   └── demo/                  # 데모 인터랙티브 사이트 (서브도메인 demo.*용 Next.js 앱: @webay/demo)
├── packages/
│   ├── ui/                    # 공통 UI 컴포넌트 라이브러리 (@webay/ui)
│   ├── typescript-config/     # 공통 TypeScript 설정 (@webay/typescript-config)
│   └── eslint-config/         # 공통 ESLint 설정 (@webay/eslint-config)
├── package.json               # 루트 워크스페이스 및 통합 스크립트
├── turbo.json                 # Turborepo 빌드/개발 파이프라인
├── pnpm-workspace.yaml        # pnpm 워크스페이스 설정
├── pnpm-lock.yaml             # pnpm 락파일
└── VERCEL_DEPLOY.md           # Vercel 루트/서브도메인 독립 배포 가이드
```

## 시작하기 (Getting Started)

의존성 설치:

```bash
pnpm install
```

개발 서버 실행:

```bash
# 전체 앱 동시 실행 (web: 3000 포트, demo: 3001 포트)
pnpm dev

# 특정 앱만 단독 실행
pnpm dev:web
pnpm dev:demo
```

전체 프로덕션 빌드:

```bash
pnpm build
```

타입 체크 및 린트:

```bash
pnpm check-types
pnpm lint
```

## Vercel 배포 설정 (메인 도메인 & demo 서브도메인)

상세 설정 방법은 [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)를 참고하세요.
- **메인 도메인 (`yourdomain.com`)**: Vercel Root Directory를 `apps/web`으로 지정
- **데모 서브도메인 (`demo.yourdomain.com`)**: Vercel Root Directory를 `apps/demo`로 지정
