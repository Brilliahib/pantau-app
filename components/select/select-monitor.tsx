import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectMonitor() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Monitor" className="text-gray-900" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Monitor</SelectLabel>
          <SelectItem value="node_a">Node A</SelectItem>
          <SelectItem value="node_b">Node B</SelectItem>
          <SelectItem value="node_c">Node C</SelectItem>
          <SelectItem value="node_d">Node D</SelectItem>
          <SelectItem value="node_e">Node E</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
