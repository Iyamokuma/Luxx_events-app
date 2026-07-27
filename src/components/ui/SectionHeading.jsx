export default function SectionHeading({ title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
