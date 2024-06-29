import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputFile } from "../input/file-input";

export function AddNews() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add News</Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[700px] max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Add News</DialogTitle>
          <DialogDescription>
            Add new news here. Click save when you&#39;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <InputFile />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
