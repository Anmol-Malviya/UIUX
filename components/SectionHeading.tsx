type Props = { index: string; kicker: string; title: string; description?: string };

export function SectionHeading({ index, kicker, title, description }: Props) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{index}</span>{kicker}</div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
