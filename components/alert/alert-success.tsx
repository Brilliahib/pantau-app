import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ReactNode } from "react";

interface AlertSuccessProps {
  children: ReactNode;
}

export function AlertSucces({ children }: AlertSuccessProps) {
  return (
    <Alert variant="success">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
