type SpanAccountProps = {
  title: string;
  informations: string | undefined | null;
};
function SpanAccount({ title, informations }: SpanAccountProps) {
  return (
    <span className="flex gap-1 items-end text-gray-300">
      <p className="md:text-xl font-medium">{title}:</p>
      {informations}
    </span>
  );
}
export default SpanAccount;
