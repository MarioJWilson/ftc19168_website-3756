# Build progress
- Approved dark editorial mint reference; static responsive website.
- Supplied crest, seven named portraits, BioBuzz logo inspected and copied to public/images.
- Verified official 2026–2027 BioBuzz season and official FIRST resource URLs.
- Implement website and honest pending content states; test desktop/mobile, modals, navigation, build and lint; deliver.
- Complete: responsive site, seven portrait profiles, identity gallery/filter/lightbox, verified BioBuzz season and official FIRST resource links.
- Donation, social, contact, bios, sponsors and awards explicitly pending—not simulated.
- Passed bun run lint and bun run build. Browser tests passed on 1440px desktop and 390px mobile: no page errors, no overflow, profiles, Escape, donation notice, gallery filtering/lightbox navigation, mobile menu. Artwork decoded and screenshots inspected.
- Web dev service running in tmux totus-web on assigned port 4200.

## Current update
- Hornet V1 confirmed current 2026–2027 robot by user; add showcase and 5 photos. Video deferred by user.
- Add supplied Instagram, Facebook, TikTok, X, YouTube, phone/WhatsApp and two email links.
- Public GoFundMe /f/support-ftc-team-19168-totus-tuus verified HTTP 200 with matching fundraiser title/organizer.
- Integrate, test desktop/mobile, verify link destinations/build/lint, then deliver updated website.
- Completed Hornet showcase: current robot designation, three mechanism stages, 5 clickable images and Hornet V1 gallery filter (23 total gallery images).
- Added all supplied social/contact destinations. Donations use verified public /f/ GoFundMe page; management URL not exposed. Video deferred.
- Verified build and lint pass. Browser tests: lightbox navigation and focus restoration, 5 Hornet photos, both emails, phone/WhatsApp, 5 social links, no management donation links, mobile menu contact action, no overflow at 360/390/768/820/1024px, no page errors. Desktop/mobile screenshots inspected.

## Mission/content update
- User supplies definitive primary/secondary catchphrases and Catholic team story, sixth season, FTC description, BIOBUZZ summary.
- Update hero/footer, complete story/formation area, FTC explainer, season game overview. Existing screenshot only confirms current branding position; no new image asset required.
- Verify layout desktop/mobile, native details, existing gallery/contact/donation controls, build and lint, deliver.
- Complete: new primary catchphrase in hero/ticker/footer; secondary Design. Code. Achieve. and student-led line. Replaced generic About copy with Catholic mission, Latin meaning, sixth season, perseverance pledge, Beyond Robotics and FTC explainer. Added BIOBUZZ collection/Hive/Flower/parking summary and official manual link.
- Verified build/lint pass; browser tests at 360–1440px show no overflow or page errors. Checked mission themes, FTC details expand/collapse, BIOBUZZ field modal, member modal, donation URL and mobile menu. Desktop/mobile screenshots inspected. Existing assets and contact/social links retained.

## Member update
- Replace seven placeholder profiles with supplied full names, roles and exact bios; preserve existing portrait paths/order.
- Centralize member data for roster, profile dialog and portrait gallery. Add blue Software, green Hardware, purple Auto and orange CAD text badges.
- Preserve both Driver 2 assignments; coach remains Team Coach with Hardware and CAD specialization. Peter's supplied 8th-grade bio stays verbatim; no unrelated mission rewrite.
- Next: implement, verify all seven profiles/badge mapping and mobile wrapping, run lint/build, deliver on assigned port 4200.
- Complete: shared members.ts provides full names, exact bios, supplied roles, explicit portraits and specialization badges to roster/profiles and gallery descriptions. Coach identified separately; both Driver 2 roles preserved.
- Lint and build pass (only existing non-blocking Vite/bundle warnings). Restarted dev service after discovering a stale cached gallery module; browser tests then passed for all seven profiles, badge colors/text, gallery descriptions, coach identity, Escape/focus restoration, Hornet filter and donation links.
- No page errors or horizontal overflow at 360/390/768/820/1024/1440px; all profile dialogs fit horizontally. Desktop/mobile roster and coach modal screenshots inspected; long coach name wraps correctly. Dev server running on 4200.

## Multi-page/contact/tech update
- Approved five separate pages: Home, Team, Season & Robot, Gallery, Support. Preserve existing content behind relevant pages/disclosures; shared navigation/footer, accessible popup and browser back/forward.
- Correct Vivan to Driver 1; add on-photo Vivan Driver 1, Mario Driver 2, Aiden Human Player badges. Remove additional email contact.
- Add stable-layout typed hero lettering, terminal status and decorative rotating gears; honor reduced-motion preference.
- Resend abandoned (user has no owned sending domain); user supplied Formspree form https://formspree.io/f/mdegolnq. Integrate official React SDK popup email/subject/message, pending/error/success states without navigation. No inbox test message unless requested; verify wiring via mocked browser responses and check endpoint non-submission response.
- Next: implement, lint/build, desktop/mobile route/disclosure/dialog/forms tests and inspect screenshots, deliver running site on 4200.
- Complete: actual /, /team, /season, /gallery, /support routes with shared header/footer, active links, page titles, scroll/focus reset and back/forward support. Home is shorter; mission/rules/workshop/awards/resources/partners use clickable disclosures on relevant pages. Existing portraits, Hornet imagery and contact/social/donation links retained except removed additional email.
- Completed on-photo Human Player / Driver 2 / Driver 1 badges for Aiden / Mario / Vivan, including profile and gallery photos. Corrected Vivan role in shared member data and gallery captions.
- Added typed hero text, terminal cursor and counter-rotating decorative gears with reduced-motion fallback. Fixed final caret width so fully typed lettering isn't clipped.
- Popup uses @formspree/react with supplied mdegolnq endpoint, required email/subject/message, honeypot, pending button, accepted-submission success and provider errors. Stays on current page. No Resend key/domain required. Non-submitting GET endpoint check returned expected POST-only HTTP 405; cannot verify recipient or inbox receipt from that check.
- Verified lint/build pass (existing nonblocking Vite/bundle warnings), website HTTP 200. Browser tests passed: all five routes/deep links/back/forward, seven profiles/photo badges, disclosures, Hornet and portrait filters/lightbox, donation links, popup empty validation/loading/success/error/retry/focus. Provider responses intercepted in tests; NO real email sent. No overflow at 360/390/768/820/1024/1440px, no page errors, reduced-motion animations disabled. Desktop/mobile screenshots inspected. Dev service running in totus-web on 4200.
