<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->
### [2026-03-10] — Removed video autoplay and logo carousel background gradients
- Modified `src/sections/Hero/index.tsx` - removed autoplay attribute from video
- Modified `src/sections/Hero/components/LogoCarousel.tsx` - removed left and right gradient overlays
- User requested to remove logo background color and video autoplay

### [2026-03-10] — Changed Hero gradient overlay from green to black
- Modified `src/sections/Hero/index.tsx`
- Changed gradient from `rgba(48,255,151,0.3)` to `rgba(0,0,0,0.3)`
- User requested to change the green tint overlay to black
</changelog>
