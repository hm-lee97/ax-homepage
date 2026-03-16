import matter from 'gray-matter';
import { marked } from 'marked';

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  thumbnail: string;
  summary: string;
  content: string;
}

// Vite 빌드 타임에 모든 MD 파일 로드
const files = import.meta.glob('/src/content/insights/*.md', {
  query: '?raw',
  eager: true,
});

export function getAllPosts(): Post[] {
  return Object.entries(files)
    .map(([path, mod]) => {
      const slug = path.split('/').pop()!.replace('.md', '');
      const { data, content } = matter((mod as { default: string }).default);
      return {
        slug,
        title: data.title ?? '',
        date: data.date ?? '',
        category: data.category ?? '',
        thumbnail: data.thumbnail ?? '',
        summary: data.summary ?? '',
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1)); // 최신순
}

export function parseMarkdown(content: string): string {
  return marked(content) as string;
}
