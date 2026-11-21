'use client';

import { ImageDotsProps } from '@/components/display/image/.partials/components/dots/component.interface';
import {
  isNearViewport,
  watchDots,
} from '@/components/display/image/.partials/services/scheduler';
import styles from '@/components/display/image/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useLayoutEffect, useRef, useState } from 'react';

const SIDE_MIN = 50;
const SIDE_MAX = 480;
const SIZE_MIN = 0.25;
const SIZE_MAX = 0.75;
const COUNT_MIN = 6;
const INSET = 0.05;
const DOT_GROWTH = 1.7 / 1.6;
const LOOP_MS = 7500;
const TAIL_MS = 900;
const EXIT_MS = 1050;

type Spotlight = {
  x: number;
  y: number;
  radius: number;
  strength: number;
};

type Dot = {
  x: number;
  y: number;
};

const route: Spotlight[] = [
  { x: 0.5, y: 0.5, radius: 0.2, strength: 1 },
  { x: 0.2, y: 0.28, radius: 0.14, strength: 0.8 },
  { x: 0.52, y: 0.14, radius: 0.13, strength: 0.7 },
  { x: 0.82, y: 0.3, radius: 0.14, strength: 0.8 },
  { x: 0.84, y: 0.72, radius: 0.14, strength: 0.8 },
  { x: 0.5, y: 0.86, radius: 0.13, strength: 0.7 },
  { x: 0.16, y: 0.72, radius: 0.14, strength: 0.8 },
];

function catmullRom(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  amount: number,
) {
  const amount2 = amount * amount;
  const amount3 = amount2 * amount;

  return (
    0.5 *
    (2 * p1 +
      (-p0 + p2) * amount +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * amount2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * amount3)
  );
}

function spotlight(time: number): Spotlight {
  const count = route.length;
  const elapsed = ((time % LOOP_MS) + LOOP_MS) % LOOP_MS;
  const phase = (elapsed / LOOP_MS) * count;
  const index = Math.floor(phase);
  const fraction = phase - index;
  const point = (offset: number) => route[(index + offset + count) % count];
  const p0 = point(-1);
  const p1 = point(0);
  const p2 = point(1);
  const p3 = point(2);

  return {
    x: catmullRom(p0.x, p1.x, p2.x, p3.x, fraction),
    y: catmullRom(p0.y, p1.y, p2.y, p3.y, fraction),
    radius: catmullRom(p0.radius, p1.radius, p2.radius, p3.radius, fraction),
    strength: catmullRom(
      p0.strength,
      p1.strength,
      p2.strength,
      p3.strength,
      fraction,
    ),
  };
}

function field(
  x: number,
  y: number,
  time: number,
  width: number,
  height: number,
  spot: Spotlight,
  tail: Spotlight,
) {
  const dx = x - spot.x * width;
  const dy = y - spot.y * height;
  const dist = Math.hypot(dx, dy);
  const sigma = Math.max(spot.radius * width, 1);
  const wave = Math.sin(dist * 0.045 - time * 0.003);
  const tailDistance = Math.hypot(x - tail.x * width, y - tail.y * height);
  const tailSigma = Math.max(tail.radius * width * 1.2, 1);

  let intensity =
    Math.exp(-(dist * dist) / (2 * sigma * sigma)) * spot.strength;

  intensity +=
    Math.max(0, wave) * 0.1 * spot.strength * Math.exp(-dist / (width * 0.35));

  intensity +=
    Math.exp(-(tailDistance * tailDistance) / (2 * tailSigma * tailSigma)) *
    0.22 *
    tail.strength;

  return Math.min(1, Math.max(0, intensity));
}

function scale(unit: number) {
  const span = SIDE_MAX - SIDE_MIN;
  const amount = Math.min(1, Math.max(0, (unit - SIDE_MIN) / span));
  const eased = Math.sqrt(amount);
  const dotSize = SIZE_MIN + (SIZE_MAX - SIZE_MIN) * eased;
  const gap = (dotSize / SIZE_MIN) * (SIDE_MIN / (COUNT_MIN + 1));

  return {
    dotSize,
    gap,
  };
}

function axisCount(inner: number, gap: number) {
  if (inner <= 0 || gap <= 0) {
    return 1;
  }

  return Math.max(1, Math.round(inner / gap) + 1);
}

function chaos(seed: number) {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;

  return value - Math.floor(value);
}

function dotPresence(
  index: number,
  dot: Dot,
  elapsed: number,
  width: number,
  height: number,
) {
  if (elapsed <= 0) {
    return 1;
  }

  if (elapsed >= EXIT_MS) {
    return 0;
  }

  const duration = 360 + chaos(index * 17 + 9) * 240;
  const latest = EXIT_MS - duration;
  const noise = chaos(index * 19.1 + dot.x * 0.73 + dot.y * 1.17);
  const drift =
    (dot.x / Math.max(width, 1)) * 0.16 + (dot.y / Math.max(height, 1)) * 0.1;
  const mixed = Math.min(1, noise * 0.84 + drift);
  const start = mixed * latest;
  const local = (elapsed - start) / duration;

  if (local <= 0) {
    return 1;
  }

  if (local >= 1) {
    return 0;
  }

  const smooth = local * local * (3 - 2 * local);

  return 1 - smooth;
}

function createGrid(width: number, height: number) {
  const unit = Math.min(width, height);
  const { dotSize, gap } = scale(unit);
  const innerWidth = width * (1 - INSET * 2);
  const innerHeight = height * (1 - INSET * 2);
  const countX = axisCount(innerWidth, gap);
  const countY = axisCount(innerHeight, gap);
  const stepX = countX > 1 ? innerWidth / (countX - 1) : 0;
  const stepY = countY > 1 ? innerHeight / (countY - 1) : 0;
  const dots: Dot[] = [];

  for (let row = 0; row < countY; row += 1) {
    for (let column = 0; column < countX; column += 1) {
      dots.push({
        x: countX === 1 ? width / 2 : width * INSET + stepX * column,
        y: countY === 1 ? height / 2 : height * INSET + stepY * row,
      });
    }
  }

  return {
    dots,
    dotSize,
    gap,
  };
}

export function ImageDots({ exiting = false, style, ...rest }: ImageDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const exitingRef = useRef(exiting);
  const readyRef = useRef(false);
  const [ready, setReady] = useState(false);

  exitingRef.current = exiting;

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return;
    }

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let width = 0;
    let height = 0;
    let dotSize = SIZE_MIN;
    let dots: Dot[] = [];
    let reduced = motion.matches;
    let exitStarted: number | null = null;
    let color = '';

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;
      color = getComputedStyle(canvas).color;

      if (width <= 0 || height <= 0) {
        dots = [];

        return;
      }

      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const grid = createGrid(width, height);

      dots = grid.dots;
      dotSize = grid.dotSize;
      canvas.style.setProperty('--dot-size', `${grid.dotSize}px`);
      canvas.style.setProperty('--dot-gap', `${grid.gap}px`);
    };

    const render = (time: number) => {
      context.clearRect(0, 0, width, height);

      if (width <= 0 || height <= 0 || dots.length === 0) {
        return;
      }

      const spot = spotlight(reduced ? 0 : time);
      const tail = reduced
        ? { ...spot, strength: 0 }
        : spotlight(time - TAIL_MS);
      const exitingNow = exitingRef.current;

      if (exitingNow) {
        if (exitStarted === null) {
          exitStarted = time;
        }
      } else {
        exitStarted = null;
      }

      const elapsed = exitStarted === null ? -1 : time - exitStarted;

      context.fillStyle = color;

      for (let index = 0; index < dots.length; index += 1) {
        const dot = dots[index];
        const life =
          exitingNow && reduced
            ? 0
            : elapsed < 0
              ? 1
              : dotPresence(index, dot, elapsed, width, height);

        if (life <= 0) {
          continue;
        }

        const intensity = field(
          dot.x,
          dot.y,
          reduced ? 0 : time,
          width,
          height,
          spot,
          tail,
        );

        context.globalAlpha = (0.42 + intensity * 0.58) * life;
        context.beginPath();
        context.arc(
          dot.x,
          dot.y,
          dotSize * (1 + intensity * DOT_GROWTH) * (0.35 + 0.65 * life),
          0,
          Math.PI * 2,
        );
        context.fill();
      }

      context.globalAlpha = 1;
    };

    let stopWatch = () => {};

    const markReady = () => {
      if (
        readyRef.current ||
        width <= 0 ||
        height <= 0 ||
        dots.length === 0 ||
        !isNearViewport(canvas)
      ) {
        return;
      }

      readyRef.current = true;
      setReady(true);
    };

    const paint = (time: number) => {
      resize();

      if (width <= 0 || height <= 0 || dots.length === 0) {
        return;
      }

      render(time);
      markReady();
    };

    const start = () => {
      stopWatch();
      reduced = motion.matches;

      const draw = (time: number) => {
        if (reduced) {
          paint(0);
          stopWatch();

          return;
        }

        if (!readyRef.current) {
          paint(time);

          return;
        }

        render(time);
      };

      if (isNearViewport(canvas)) {
        draw(reduced ? 0 : performance.now());
      }

      if (reduced && readyRef.current) {
        return;
      }

      stopWatch = watchDots(canvas, draw);
    };

    const resizeObserver = new ResizeObserver(() => {
      if (!isNearViewport(canvas)) {
        return;
      }

      if (reduced || !readyRef.current) {
        paint(reduced ? 0 : performance.now());

        return;
      }

      resize();
    });

    resizeObserver.observe(canvas);
    motion.addEventListener('change', start);
    start();

    return () => {
      stopWatch();
      resizeObserver.disconnect();
      motion.removeEventListener('change', start);
    };
  }, []);

  return (
    <canvas
      {...rest}
      ref={canvasRef}
      aria-hidden
      className={classNames(
        'mosuk-image-dots',
        styles.canvas,
        ready && styles.ready,
        rest?.className,
      )}
      style={{
        ...style,
        transition: '0ms',
      }}
    />
  );
}
