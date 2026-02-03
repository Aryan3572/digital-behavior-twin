import Card from "../ui/Card";

export default function MetricTitle({label, value,unit = "m"}) {
    return (
        <Card className="bg-surface">
  <p className="text-xs text-textMuted">{label}</p>
  <p className="font-semibold text-2xl mt-2">
    {value ?? 0}{unit}
  </p>
</Card>

    );
}