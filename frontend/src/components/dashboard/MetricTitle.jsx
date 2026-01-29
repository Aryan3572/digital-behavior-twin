import Card from "../ui/Card";

export default function MetricTitle({label, value,unit = "m"}) {
    return (
        <Card className="flex flex-col justify-between">
            <p className="text-xs text-textMuted">{label}</p>

            <p className="font-mono text-2xl mt-2">
                {value ?? 0}{unit}
            </p>
        </Card>
    );
}