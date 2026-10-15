# Ke Xing · Academic Homepage

A bright, minimal academic homepage for Ke Xing. Built with semantic HTML and responsive CSS, without a framework, build step, external fonts, or JavaScript dependencies.

## Preview

Open `index.html` directly in a browser, or serve this directory:

```sh
python3 -m http.server 52552 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:52552/`.

## Content

- First-year Computer Science PhD student at Beijing Jiaotong University.
- Advisor: Prof. Xiaojie Jin.
- Current focus: video world models, with interests in memory, persistent state, and long-horizon interactions.
- Previous work: stereoscopic video generation, panoramic generation, and immersive 4D reconstruction.
- Research internships: Tencent (video world models); Dzine (stereoscopic video generation and panoramic image generation).
- Email, Google Scholar, GitHub, LinkedIn, and the existing CV.
- All four publications and their existing paper/project/code links are retained.

Internship titles and dates were verified from the signed-in LinkedIn experience page on 2026-10-15: Tencent, Research Intern, May 2026–Present; Dzine AI, Research Intern, Aug 2025–Apr 2026. Research topics are supplied directly by Ke Xing. No team names or additional responsibilities are inferred. The linked original `assets/cv.pdf` is retained unchanged and may contain older information.

## Maintain

Edit `index.html` for biography, links, internships, and publications. Edit `assets/style.css` for design. Keep local resource paths relative and use forward slashes.

## Publish

This repository can be served directly by GitHub Pages. In repository settings, configure Pages to deploy from the root of `main` if it is not already configured. No build tools or dependencies are required.

```sh
git add index.html assets/style.css assets/favicon.svg README.md
git commit -m "Refresh academic homepage and research profile"
git push origin main
```

Existing project pages hosted in separate repositories are not changed.
