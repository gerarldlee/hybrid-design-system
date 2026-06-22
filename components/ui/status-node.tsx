type StatusNodeProps = {
  label: string;
  tone?: "lime" | "blue" | "orange";
  animated?: boolean;
};

export function StatusNode({
  label,
  tone = "lime",
  animated = true,
}: StatusNodeProps) {
  return (
    <span className="status-node">
      <span
        aria-hidden="true"
        className={`status-node__dot status-node__dot--${tone} ${
          animated ? "status-node__dot--animated" : ""
        }`}
      />
      {label}
    </span>
  );
}
