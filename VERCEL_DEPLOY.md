# Vercel 모노레포 배포 가이드 (메인 & demo 서브도메인)

동일한 Git 저장소 하나로 Vercel에서 **메인 사이트(기본 도메인)**와 **데모 사이트(서브도메인)**를 각각 독립 배포하는 공식 설정 방법입니다.

---

## 1. Vercel 프로젝트 1: 메인 웹 사이트 (`apps/web`)

1. **Vercel 대시보드**에서 **Add New... > Project** 클릭 후 본 저장소를 Import합니다.
2. 프로젝트 설정:
   - **Project Name**: `webay-web` (또는 원하는 이름)
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `Edit` 클릭 후 **`apps/web`** 선택
     *(⚠️ `Include source files outside of the Root Directory in the Build Step` 옵션은 반드시 체크 유지)*
3. **Deploy** 클릭하여 첫 배포 완료.
4. 배포 완료 후 **Settings > Domains**에서:
   - `yourdomain.com` 및 `www.yourdomain.com` 등록
5. **Settings > Environment Variables**:
   - `NEXT_PUBLIC_DEMO_URL`: `https://demo.yourdomain.com`

---

## 2. Vercel 프로젝트 2: 데모 사이트 (`apps/demo`)

1. **Vercel 대시보드**에서 다시 **Add New... > Project** 클릭 후 **동일한 Git 저장소**를 한 번 더 Import합니다.
2. 프로젝트 설정:
   - **Project Name**: `webay-demo` (또는 원하는 이름)
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `Edit` 클릭 후 **`apps/demo`** 선택
     *(⚠️ `Include source files outside of the Root Directory in the Build Step` 옵션은 반드시 체크 유지)*
3. **Deploy** 클릭하여 첫 배포 완료.
4. 배포 완료 후 **Settings > Domains**에서:
   - **`demo.yourdomain.com`** 서브도메인 등록
5. **Settings > Environment Variables**:
   - `NEXT_PUBLIC_MAIN_URL`: `https://yourdomain.com`

---

## 3. (권장) 불필요한 빌드 건너뛰기 (Vercel Ignored Build Step)

각 프로젝트의 **Settings > Git > Ignored Build Step**에서 아래 명령어를 등록하면, 변경사항이 없는 앱의 불필요한 Vercel 빌드를 자동으로 건너뜁니다:

- `webay-web` 프로젝트:
  ```bash
  npx turbo-ignore
  ```
- `webay-demo` 프로젝트:
  ```bash
  npx turbo-ignore
  ```

---

## 4. 로컬 개발 명령어 (pnpm)

```bash
# 두 앱 동시 실행 (web: 3000 포트, demo: 3001 포트)
pnpm dev

# 메인 앱만 단독 실행
pnpm dev:web

# 데모 앱만 단독 실행
pnpm dev:demo

# 전체 프로젝트 빌드 테스트
pnpm build
```
