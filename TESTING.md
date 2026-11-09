# Verification performed

Node.js 24.21.0 and npm 11.19.0 were used.

Commands completed successfully:

```sh
npm install react-router
npm install
npm run build
npm run dev -- --host 127.0.0.1 --port 5174 --strictPort
```

The local development app was tested in the browser. All 32 checks below passed.

- Home lists three post previews.
- The first post retains its three original comments.
- The individual post shows full content beyond its preview.
- Blank comment submission shows name and comment validation.
- Whitespace-only comments are rejected.
- A trimmed named comment appears immediately.
- Comment submission clears both fields.
- Posts without comments show the required empty message.
- Submitted markup is displayed as literal comment text.
- Comment text is not interpreted as HTML.
- A comment on post 2 does not appear on post 3.
- Browser Back restores the selected post and its comment state.
- Post 1 retains its own comments across client-side navigation.
- The contact form validates all three required fields.
- The contact form rejects whitespace and malformed email.
- Valid contact submission gives demo feedback and clears all fields.
- The navbar toggle enables dark mode.
- Dark mode updates the page background.
- Dark mode updates card colors.
- Dark mode updates form field colors.
- The selected theme stays consistent across routes.
- Dark mode is restored after refreshing the page.
- Light mode is also saved and restored after refresh.
- An invalid post ID provides a friendly message and recovery link.
- An unknown route shows a friendly missing-page view.
- Desktop Home has no horizontal overflow.
- Dark mode can be enabled from the Home navbar.
- A direct post URL reload works and comment state resets as documented.
- The individual post and comment form fit a 390px mobile screen.
- The navbar and contact form fit a narrow 320px screen.
- The light theme restores the original white background.
- Browser testing completed without console warnings or errors.

Screenshots of desktop light and dark themes and a mobile individual-post page
were visually reviewed. Comments reset on refresh, while the theme persists.
The contact form is a local demonstration and does not send mail.

The final archive was also extracted into a clean folder, installed with npm ci,
and built successfully with npm run build.
