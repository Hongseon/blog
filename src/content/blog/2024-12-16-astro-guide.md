---
title: 'Astro로 정적 사이트 만들기'
description: 'Astro를 사용하여 빠르고 효율적인 정적 사이트를 만드는 방법을 알아봅니다.'
pubDate: 2024-12-16
tags: ['astro', 'web-development', 'static-site']
category: 'development'
---

# Astro로 정적 사이트 만들기

Astro는 현대적인 정적 사이트 생성기입니다. 최소한의 JavaScript로 빠르고 효율적인 웹사이트를 만들 수 있습니다.

## Astro의 장점

1. **빠른 성능**: 기본적으로 JavaScript를 전송하지 않습니다
2. **유연한 컴포넌트**: React, Vue, Svelte 등 다양한 프레임워크를 사용할 수 있습니다
3. **내장 마크다운 지원**: Content Collections API로 마크다운을 쉽게 관리할 수 있습니다
4. **타입 안전성**: TypeScript를 완벽하게 지원합니다

## 시작하기

```bash
npm create astro@latest
```

이 명령어로 새로운 Astro 프로젝트를 시작할 수 있습니다.

## 마크다운 컬렉션

Astro의 Content Collections 기능을 사용하면 마크다운 파일을 타입 안전하게 관리할 수 있습니다:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});
```

## 결론

Astro는 정적 사이트를 만들기에 완벽한 도구입니다. 특히 블로그나 문서 사이트에 적합합니다.

