/**
 * The real Stroke360 logo set inline in a headline. The artwork's ribbon is much taller than
 * the lettering, so negative margins keep the line height of the sentence unchanged.
 */
export default function BrandWord({ text = "STROKE360" }: { text?: string }) {
  const src = import.meta.env.BASE_URL.replace(/\/?$/, "/") + "logo.png";
  return (
    <span className="brand-word relative inline-block align-middle">
      <img src={src} alt={text} width={800} height={400} decoding="async"
        className="brand-logo -my-[1.2em] mx-[-0.12em] inline-block h-[3.4em] w-auto max-w-none select-none" draggable={false} />
    </span>
  );
}
