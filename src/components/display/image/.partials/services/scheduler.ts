const MARGIN = 200;

type DotWatch = {
  element: HTMLElement;
  draw: (time: number) => void;
  visible: boolean;
};

const watches = new Map<HTMLElement, DotWatch>();

let observer: IntersectionObserver | null = null;
let frame = 0;

function loop(time: number) {
  frame = 0;

  if (document.hidden) {
    return;
  }

  let active = false;

  Array.from(watches.values()).forEach((watch) => {
    if (!watch.visible) {
      return;
    }

    active = true;
    watch.draw(time);
  });

  if (active) {
    frame = requestAnimationFrame(loop);
  }
}

function kick() {
  if (frame !== 0 || document.hidden) {
    return;
  }

  const visible = Array.from(watches.values()).some((watch) => watch.visible);

  if (visible) {
    frame = requestAnimationFrame(loop);
  }
}

function ensure() {
  if (observer) {
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const watch = watches.get(entry.target as HTMLElement);

        if (!watch) {
          continue;
        }

        watch.visible = entry.isIntersecting;
      }

      kick();
    },
    { rootMargin: `${MARGIN}px 0px` },
  );

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (frame !== 0) {
        cancelAnimationFrame(frame);
        frame = 0;
      }

      return;
    }

    kick();
  });
}

export function isNearViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  if (rect.width <= 0 || rect.height <= 0) {
    return false;
  }

  return (
    rect.bottom >= -MARGIN &&
    rect.right >= 0 &&
    rect.top <= window.innerHeight + MARGIN &&
    rect.left <= window.innerWidth
  );
}

export function watchDots(element: HTMLElement, draw: (time: number) => void) {
  ensure();

  const watch: DotWatch = {
    element,
    draw,
    visible: isNearViewport(element),
  };

  watches.set(element, watch);
  observer?.observe(element);
  kick();

  return () => {
    watches.delete(element);
    observer?.unobserve(element);

    if (watches.size === 0 && frame !== 0) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };
}
