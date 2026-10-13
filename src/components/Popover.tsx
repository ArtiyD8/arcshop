import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';

/** Круглая кнопка в шапке с выпадающей панелью. Закрывается по клику снаружи и по Esc. */
export function Popover({
  label,
  icon,
  badge,
  children,
}: {
  label: string;
  icon: IconName;
  badge?: number;
  children: (close: () => void) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="pop" ref={ref}>
      <button
        className="round-btn"
        type="button"
        aria-label={label}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={icon} />
        {badge ? <span className="badge">{badge}</span> : null}
      </button>
      {open && (
        <div className="pop-panel" role="dialog" aria-label={label}>
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}

export function PanelHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="pop-header">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
