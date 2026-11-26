import {
  HeroSheetDirection,
  HeroSheetVariant,
} from '@/components/hero-sheet/.partials/enums/component.enums';

export const HERO_SHEET_DEFAULT_DIRECTION = HeroSheetDirection.Bottom;
export const HERO_SHEET_DEFAULT_VARIANT = HeroSheetVariant.Primary;
export const HERO_SHEET_DEFAULT_OPEN_THRESHOLD = 0.3;
export const HERO_SHEET_DEFAULT_CLOSE_THRESHOLD = 0.2;
export const HERO_SHEET_DEFAULT_IS_DISABLED = false;

/** Base UI DrawerViewport `FAST_SWIPE_VELOCITY` (px/ms). */
export const HERO_SHEET_FAST_SWIPE_VELOCITY = 0.5;

/** Base UI DrawerViewport `MIN_SWIPE_THRESHOLD` (px). */
export const HERO_SHEET_MIN_SWIPE_THRESHOLD = 10;

export const HERO_SHEET_SCROLL_END_MS = 120;
export const HERO_SHEET_SNAP_UNLOCK_MS = 450;

/** React `data-progress` / setState step (CSS var updates every frame). */
export const HERO_SHEET_PROGRESS_STATE_STEP = 0.01;

export const HERO_SHEET_CONTENT_MARKER = 'data-hero-sheet-content';
export const HERO_SHEET_HANDLE_MARKER = 'data-hero-sheet-handle';

export function isHeroSheetHorizontal(
  direction: HeroSheetDirection | `${HeroSheetDirection}`,
) {
  return (
    direction === HeroSheetDirection.Left ||
    direction === HeroSheetDirection.Right
  );
}
