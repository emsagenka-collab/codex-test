"use client";
import {
  useLayoutEffect,
  useRef,
  type ReactNode,
  type TouchEvent,
} from "react";

// Keep swipes on controls and the sentence carousel within those controls.
const controls =
  "button,a,input,textarea,select,summary,dialog,[contenteditable]:not([contenteditable='false']),.example,[data-no-tab-swipe]";
const mobile = () => window.matchMedia("(max-width: 760px)").matches;

export default function SwipeNavigation({
  index,
  count,
  disabled,
  onChange,
  children,
}: {
  index: number;
  count: number;
  disabled: boolean;
  onChange: (index: number) => void;
  children: ReactNode;
}) {
  const content = useRef<HTMLDivElement>(null);
  const previous = useRef(index);
  const gesture = useRef<{
    x: number;
    y: number;
    started: number;
    index: number;
  } | null>(null);
  useLayoutEffect(() => {
    const old = previous.current;
    previous.current = index;
    gesture.current = null;
    if (
      old === index ||
      !mobile() ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const animation = content.current?.animate(
      [
        { transform: `translateX(${index > old ? -36 : 36}px)`, opacity: 0.35 },
        { transform: "translateX(0)", opacity: 1 },
      ],
      { duration: 260, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
    );
    return () => animation?.cancel();
  }, [index]);

  function blocked() {
    return disabled || !mobile() || !!document.querySelector("dialog[open]");
  }
  function start(event: TouchEvent<HTMLElement>) {
    gesture.current = null;
    if (
      blocked() ||
      event.touches.length !== 1 ||
      (event.target as Element).closest(controls) ||
      window.getSelection()?.toString()
    )
      return;
    const { clientX: x, clientY: y } = event.touches[0];
    // Leave the screen edges to the browser's own back/forward gestures.
    if (x < 24 || x > window.innerWidth - 24) return;
    gesture.current = { x, y, started: performance.now(), index };
  }
  function move(event: TouchEvent<HTMLElement>) {
    if (!gesture.current) return;
    if (event.touches.length !== 1) {
      gesture.current = null;
      return;
    }
    const dx = Math.abs(event.touches[0].clientX - gesture.current.x);
    const dy = Math.abs(event.touches[0].clientY - gesture.current.y);
    // Once a gesture is a vertical scroll it cannot later become a tab swipe.
    if (dy > 20 && dy > dx) gesture.current = null;
  }
  function end(event: TouchEvent<HTMLElement>) {
    const current = gesture.current;
    gesture.current = null;
    if (
      !current ||
      blocked() ||
      event.touches.length ||
      event.changedTouches.length !== 1 ||
      current.index !== index ||
      window.getSelection()?.toString()
    )
      return;
    const dx = event.changedTouches[0].clientX - current.x;
    const dy = event.changedTouches[0].clientY - current.y;
    if (
      Math.abs(dx) < 65 ||
      Math.abs(dx) < Math.abs(dy) * 1.5 ||
      performance.now() - current.started > 800
    )
      return;
    // The reader's requested order: swipe right to advance, left to go back.
    const next = index + (dx > 0 ? 1 : -1);
    if (next < 0 || next >= count) return;
    event.preventDefault();
    onChange(next);
  }
  return (
    <main
      onTouchStart={start}
      onTouchMove={move}
      onTouchEnd={end}
      onTouchCancel={() => {
        gesture.current = null;
      }}
    >
      <div ref={content} className="tab-content">
        {children}
      </div>
    </main>
  );
}
