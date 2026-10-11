# Qatar–Bahrain Trade Mission website

Portable bilingual (English / Arabic) static website for the Qatar Exports trade mission. It uses the supplied QDB/Qatar Exports logo and a burgundy identity derived from the artwork. The deliverable is a static site whose editable mission data is in `mission.json`—not a standalone JSON document, since browsers need HTML/CSS/JavaScript to render the website.

## Files

- `index.html` — all website sections, bilingual copy and both registration forms.
- `styles.css` — responsive design, Arabic RTL layout and visual system.
- `app.js` — language switching, programme accordions and form-demo notices.
- `mission.json` — editable mission facts and English/Arabic programme/sector data.
- `assets/` — brand artwork, Manama skyline hero image and labeled archival photos from the supplied Facebook page.
- `manus-routes.json` — simple route declaration for a one-page site.

## Preview locally

From this directory, run `python3 -m http.server 8080`, then open `http://localhost:8080`.

## Publish with GitHub and Hostinger

1. Create a new GitHub repository for the site.
2. From this directory, set the repository remote and push the branch:

   ```sh
   cd qatar-bahrain-trade-mission-site
   git init -b main
   git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
   git add .
   git commit -m "Build Qatar Bahrain trade mission website"
   git push -u origin main
   ```

   If this package already includes a commit, omit the `git commit` command or make a normal follow-up commit.
3. In Hostinger hPanel, open the website's Git deployment/setup flow, connect the GitHub repository and select the `main` branch. Configure the deployment directory as the website's public document root (`public_html` for the relevant Hostinger setup). This is a static site: no Node build command or server runtime is required. If Hostinger checks out the repository to a subfolder, set the publication/document root to that folder.
4. Deploy and verify the domain serves `index.html` and loads the `assets/` files.

Hostinger plan availability and exact hPanel labels can vary. This package does not contain Hostinger credentials and was not pushed or deployed from this session.

## Required before launch

1. Replace the `null` values in `mission.json` for dates, duration, deadline, fee and available places after approval.
2. Add the official business contact email and connect a real form receiver/backend. The current forms validate input but intentionally tell visitors that submissions **are not sent**; they must not be used to collect live applications until a service is connected. The file-upload field is also a visual prototype and does not upload files.
3. Confirm final event schedule, included/excluded services, eligibility wording, privacy notice and any required organizational approvals.
4. Review Arabic copy with the intended local editorial reviewer before public launch.
5. Confirm usage permissions and preferred crop/quality for the Facebook photos; the supplied page is for the **Qatar–Kuwait Trade Mission 2025**, not the Qatar–Bahrain event. They are captioned accordingly and used only as previous-mission context.
6. Confirm rights/credits for the Bahrain skyline hero photo (source found via Unsplash image search); the attribution appears in the hero caption.

## Brand

The burgundy palette is sampled/approximated from the supplied logo (`#8b1744`), with a dark wine secondary, cream editorial backgrounds and a warm gold accent.
