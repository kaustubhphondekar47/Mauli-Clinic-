# Mauli Clinic Website

A responsive static website for Mauli Clinic in Mamurdi, Pune. It uses HTML, CSS, and JavaScript and can be published on GitHub Pages without a build step or paid hosting.

## Files to publish

Keep all six files at the top level of the repository:

```text
index.html
styles.css
script.js
clinic-care.png
.nojekyll
README.md
```

The appointment form validates required fields and prepares a WhatsApp message addressed to the clinic. The visitor must review the message and tap **Send** in WhatsApp. The website itself does not receive or store submissions, and it does not include an appointment scheduling or medical-record system.

## Exact GitHub Pages publishing steps (browser only)

1. **Confirm the clinic details before publishing.** Verify the phone number, doctor’s name, visiting hours, address, Google Maps link, and listed services. Add qualifications and experience only after confirming exact wording. The details here come from the starter website you supplied.
2. Go to [github.com](https://github.com) and sign in. If you do not have an account, create one and verify its email address.
3. Select the **+** menu in the upper-right corner and choose **New repository**.
4. Enter `mauli-clinic` as the repository name. If using GitHub Free, select **Public**. You can enter `Mauli Clinic website` as the description. Leave **Add a README**, **Add .gitignore**, and **Choose a license** turned off because the website files are already prepared.
5. Select **Create repository**.
6. In the empty repository, choose **Add file → Upload files**.
7. Open the `mauli-clinic-website` folder on your computer. Drag these files into the upload area: `index.html`, `styles.css`, `script.js`, `clinic-care.png`, `.nojekyll`, and `README.md`. They all belong at the repository’s top level, not inside another folder.
8. Scroll to **Commit changes**. Use a message such as `Add Mauli Clinic website`, choose **Commit directly to the main branch**, and select **Commit changes**.
9. From the repository navigation, open **Settings**. If it is hidden, select the top-navigation overflow menu and then **Settings**.
10. In the left sidebar, under **Code and automation**, select **Pages**.
11. In **Build and deployment**, set **Source** to **Deploy from a branch**.
12. Set the branch to **main** and the folder to **/(root)**, then select **Save**.
13. Stay on **Settings → Pages**. GitHub will build and publish the site. When ready, the page shows **Your site is live at** with the website address. For a project repository named `mauli-clinic`, the address normally looks like `https://YOUR-GITHUB-USERNAME.github.io/mauli-clinic/`.
14. Open the published link on a phone and a computer. Check the image, navigation links, map, phone link, and appointment form. The form should open WhatsApp with a prepared message; the visitor still has to tap **Send**.
15. On **Settings → Pages**, turn on **Enforce HTTPS** if the option is available.

With these settings, GitHub publishes the `main` branch’s root folder. Keep `index.html`, `styles.css`, `script.js`, and `clinic-care.png` together at that root level so the page and image load correctly.

### Replace the old site that is already online

Use the repository that currently publishes the old Mauli Clinic website. Do not create another repository or change the Pages source settings.

1. Open the existing website repository on GitHub and select **Add file → Upload files**.
2. Upload the updated `index.html`, `styles.css`, `script.js`, and `clinic-care.png` from this folder. If the upload asks whether to replace files with the same names, choose the replace/overwrite option. Keep them at the same paths the existing site uses; for this setup, that is the repository root.
3. Keep the repository’s existing `.nojekyll` file. You can upload the included `.nojekyll` too if it is missing.
4. Scroll to **Commit changes**, use a message such as `Update Mauli Clinic website`, and commit to the branch and folder already selected under **Settings → Pages** (usually `main` and `/(root)`).
5. Open the repository’s **Actions** tab and wait for the Pages deployment to finish. The published site normally updates within a few minutes; GitHub notes that it can take up to 10 minutes.
6. Open the same website URL as before and hard-refresh it: press **Ctrl+F5** on Windows, or open it in a private/incognito window. The URL does not change when you update files in the same repository.

If the old website is published from a `/docs` folder or a `gh-pages` branch, upload the files into that same publishing folder/branch instead of the repository root. Check **Settings → Pages → Build and deployment** first so the new `index.html` replaces the file the live site actually serves.
## Updating the website later

1. Open the `mauli-clinic` repository and choose **Add file → Upload files**.
2. Upload the updated file or files at the same repository root level. When GitHub asks, replace the existing version.
3. Commit the change to `main`. GitHub Pages republishes after changes to the selected publishing source. Wait for the deployment to finish, then refresh the website.

## Before sharing the public link

- Confirm the phone number and opening hours with the clinic.
- Review every service description and remove anything the clinic does not offer.
- The doctor section uses initials rather than a portrait. Replace it only with a photo approved for publication.
- The appointment form sends the visitor’s name, phone number, requested date and time, and optional note to WhatsApp after the visitor taps Send. The note asks visitors not to share sensitive medical information. Confirm this contact method is appropriate for the clinic.
- The site is informational and is not an emergency service. Visitors should use local emergency services for emergencies.
- GitHub Pages sites are public on the internet. Do not upload patient details, private records, passwords, or other sensitive information to this repository.

## Official GitHub instructions

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source)
- [GitHub Pages HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)


