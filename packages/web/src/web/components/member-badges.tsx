import type { Specialization } from "../lib/members";

export function MemberBadges({ specializations }: { specializations: Specialization[] }) {
  return (
    <div className="member-badges" aria-label="Specializations">
      {specializations.map((specialization) => (
        <span className={`member-badge badge-${specialization.toLowerCase()}`} key={specialization}>
          {specialization}
        </span>
      ))}
    </div>
  );
}