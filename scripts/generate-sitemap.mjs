import { writeFileSync } from 'fs';
import { globby } from 'globby';

async function generate() {
  // Ganti dengan URL asli blog kamu nanti
  const SITE_URL = 'https://bellatrijuliana.com';

  // Cari semua file markdown di folder content
  const pages = await globby([
    'src/content/articles/applying-qa-job-with-no-experiences.md',// Sesuaikan path folder artikelmu 
    'src/content/articles/docqa-v2-local-llm-and-risk-based-testing-tool.md',
    'src/content/articles/i-got-tired-of-typing-test-cases-so-i-built-a-tool.md',
    'src/content/articles/melamar-kerja-posisi-QA-tanpa-pengalaman.md',
    'src/content/articles/QA-ing-a-QA-tool-testing-zelqa-and-what-comes-next.md',
    'src/content/articles/zelqa-a-qa-framework-built-from-three-years-of-real-problems.md',
    'src/content/articles/zelqa-API-how-a-flask-backend-wraps-an-AI-model-into-a-QA-engine.md',   // Tambahkan halaman statis lain jika ada
    'src/content/articles/zelqa-goes-web-why-a-cli-tool-needed-a-UI.md',
    'src/content/articles/zelqa-web-how-the-react-frontend-is-structured-and-what-building-the-UI-looked-like.md',
    'src/pages/Home.tsx',
    'src/pages/Articles.tsx',
    'src/pages/LifeDebugging.tsx',
    'src/pages/LittleLab.tsx',
    'src/pages/Mentorship.tsx',
    'src/pages/Portfolio.tsx',
    'src/pages/Services.tsx',
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('src/content/articles/', '/articles/')
              .replace('src/pages', '')
              .replace('.md', '')
              .replace('.tsx', '')
              .replace('/index', '')
              .toLowerCase();
            const route = (path === '/home' || path === '') ? '' : path;

            return `
              <url>
                  <loc>${`${SITE_URL}${route}`}</loc>
                  <changefreq>weekly</changefreq>
                  <priority>${route === '' ? '1.0' : '0.7'}</priority>
              </url>
            `;
          })
          .join('')}
    </urlset>
  `;

  // Simpan ke folder public supaya ikut ke-build oleh Cloudflare
  writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated successfully!');
}

generate();