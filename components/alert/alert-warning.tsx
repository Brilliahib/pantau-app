import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ReactNode } from "react";

interface AlertWarningProps {
  children: ReactNode;
}

export function AlertWarning({ children }: AlertWarningProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
