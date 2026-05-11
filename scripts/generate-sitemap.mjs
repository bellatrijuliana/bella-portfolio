import { writeFileSync } from 'fs';
import { globby } from 'globby';

async function generate() {
  // Ganti dengan URL asli blog kamu nanti
  const SITE_URL = 'https://bellatrijuliana.com';

  // Cari semua file markdown di folder content
  const pages = await globby([
    'src/content/articles/applying-qa-job-with-no-experiences.md', // Sesuaikan path folder artikelmu 
    'src/content/articles/nekat-apply-qa-padahal-belum-punya-pengalaman.md',   // Tambahkan halaman statis lain jika ada
    'src/pages/Home.tsx',
    'src/pages/Articles.tsx',
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