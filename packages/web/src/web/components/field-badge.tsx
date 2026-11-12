import { Gamepad2, Hand } from "lucide-react";
import type { Member } from "../lib/members";

export function FieldBadge({ role }: { role: Member["fieldRole"] }) {
  if (!role) return null;
  return (
    <div className="field-badge">
      {role === "Human Player" ? <Hand size={14} aria-hidden="true" /> : <Gamepad2 size={15} aria-hidden="true" />}
      {role}
    </div>
  );
}