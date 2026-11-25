# resume

[resume.woosupar.dev](https://resume.woosupar.dev)의 소스입니다. 박우성의 한 페이지 이력서를 지원 직무에 따라 두 버전으로 냅니다. 프로젝트 자세한 내용은 [woosupar.dev](https://woosupar.dev)에 있습니다.

| 주소 | 내용 |
|---|---|
| `/devops/` | 클라우드, DevOps 엔지니어용 |
| `/network/` | 네트워크, 인프라 엔지니어용 |
| `/` | 두 버전 중 고르는 안내 |

## 구조

```text
src/data/resume.ts ──▶ Resume.astro ──▶ /devops/, /network/ ──▶ Astro 빌드 (dist/) ──▶ Cloudflare Workers
 (두 버전의 내용)        (한 장 레이아웃, 인쇄용 스타일)
```

- 내용은 모두 `src/data/resume.ts` 한 파일에 있습니다. 두 버전은 같은 사실을 쓰고, 소개 문장과 기술, 프로젝트의 순서와 요약만 다릅니다.
- `main`에 push하면 Cloudflare가 빌드해 `wrangler.jsonc`의 Worker `resume`으로 올립니다. `resume.woosupar.dev` 연결은 [personal-portfolio](https://github.com/grademe12/personal-portfolio)의 `infra/` Terraform에서 관리합니다.

## 써 보려면

Node 22가 필요합니다.

```bash
npm install
npm run dev      # http://localhost:4321/devops/
npm run build
```

- **내용 고치기:** `src/data/resume.ts`만 고치면 됩니다. 프로젝트는 버전마다 `projects` 배열의 순서대로 나옵니다.
- **PDF로 내기:** 페이지 아래 "PDF로 저장" 버튼이나 브라우저 인쇄로 저장합니다. 인쇄용 스타일이 A4 한 장에 맞춥니다. 내용을 늘리면 인쇄 미리보기에서 한 장을 넘지 않는지 확인하세요.
