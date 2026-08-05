# XP Crafted

XP Crafted is a family-supervised art project created by a 10-year-old gamer who makes handmade gamer-inspired drawings with markers and colored pencils.

Each drawing is $1, and 10% of all proceeds go to Paws 4 Autism.

## Production

- Intended domain: `https://xpcrafted.valorwell.org`
- Verified Venmo business profile: `https://www.venmo.com/u/xpcrafted`
- Hosting target: Cloudflare Pages
- Database: none required

## Local development

```bash
npm install
npm run check
npm run build
npm run dev
```

Then open `http://localhost:4173`.

## Cloudflare Pages configuration

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

After the first successful deployment, attach the custom domain `xpcrafted.valorwell.org` in Cloudflare Pages.

## Safety and privacy

- The project is managed and supervised by a parent.
- No child contact information is collected or displayed.
- Purchasers are instructed to confirm artwork availability before payment.
- XP Crafted is not affiliated with Minecraft, Mojang, Microsoft, or other game publishers.
