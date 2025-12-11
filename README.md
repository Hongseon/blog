# My Blog

Astro와 Tailwind CSS로 만든 정적 블로그입니다. GitHub Pages에 호스팅됩니다.

## 기능

- ✅ 정적 페이지 빌드 (GitHub Pages 호스팅)
- ✅ 마크다운으로 글 작성 및 렌더링
- ✅ Home, About, Blog 메뉴
- ✅ 월별 포스트 관리
- ✅ 태그 및 카테고리 분류
- ✅ 아름다운 반응형 디자인

## 시작하기

### 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:4321`을 열어 확인하세요.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 미리보기

```bash
npm run preview
```

## 새 포스트 작성하기

`src/content/blog/` 폴더에 마크다운 파일을 추가하세요.

파일명 형식: `YYYY-MM-DD-제목.md`

예시:

```markdown
---
title: '포스트 제목'
description: '포스트 설명'
pubDate: 2024-12-15
tags: ['태그1', '태그2']
category: '카테고리명'
---

# 포스트 내용

마크다운으로 작성하세요.
```

## GitHub Pages 배포

1. GitHub 저장소를 생성하세요
2. `astro.config.mjs` 파일에서 `site`와 `base` 설정을 업데이트하세요:
   ```javascript
   site: 'https://YOUR_USERNAME.github.io',
   base: '/REPOSITORY_NAME', // 루트에 배포하는 경우 '/'로 설정
   ```
3. GitHub 저장소의 Settings > Pages에서 Source를 "GitHub Actions"로 설정하세요
4. 코드를 main 브랜치에 푸시하면 자동으로 배포됩니다

## 프로젝트 구조

```
myblog/
├── public/          # 정적 파일
├── src/
│   ├── components/  # 재사용 가능한 컴포넌트
│   ├── content/     # 마크다운 컬렉션
│   │   └── blog/    # 블로그 포스트
│   ├── layouts/     # 레이아웃 컴포넌트
│   ├── pages/       # 라우팅 페이지
│   └── styles/      # 전역 스타일
├── .github/
│   └── workflows/   # GitHub Actions
└── astro.config.mjs # Astro 설정
```

## 라이선스

MIT
