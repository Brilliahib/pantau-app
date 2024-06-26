import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CardMonitoring = () => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="space-y-2">
        <CardDescription>Status</CardDescription>
        <CardTitle className="text-green-500">Aman</CardTitle>
        <CardTitle className="text-black text-4xl">86%</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CardMonitoring;
