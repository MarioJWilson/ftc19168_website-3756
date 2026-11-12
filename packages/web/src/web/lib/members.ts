export type Specialization = "Software" | "Hardware" | "Auto" | "CAD";

export type Member = {
  name: string;
  image: string;
  roles: string[];
  specializations: Specialization[];
  bio: string;
  coach?: boolean;
  fieldRole?: "Driver 1" | "Driver 2" | "Human Player";
};

export const members: Member[] = [
  {
    name: "Aiden C.",
    image: "/images/aiden.png",
    roles: ["Human Player", "Software Support"],
    fieldRole: "Human Player",
    specializations: ["Software"],
    bio: "I'm Aiden, a high-school sophomore. I used to do FRC, but FTC is way cooler!",
  },
  {
    name: "Jared M.",
    image: "/images/jared.png",
    roles: ["Hardware Support", "CAD"],
    specializations: ["Hardware", "CAD"],
    bio: "I'm a junior and I love 3d rendering and dinosaurs.",
  },
  {
    name: "Mario W.",
    image: "/images/mario.png",
    roles: ["Hardware Lead", "Team Captain", "Media Lead", "Driver 2"],
    fieldRole: "Driver 2",
    specializations: ["Hardware"],
    bio: "I'm a sophomore and I love rugby and solving complex math equations.",
  },
  {
    name: "Nicholas R.",
    image: "/images/nicholas.png",
    roles: ["Hardware Support"],
    specializations: ["Hardware"],
    bio: "I'm a homeschooled sophomore who is diabetic.",
  },
  {
    name: "Peter W.",
    image: "/images/peter.png",
    roles: ["Hardware"],
    specializations: ["Hardware"],
    bio: "I'm an 8th Grader and I love observing and studying the natural world.",
  },
  {
    name: "Vivan D.",
    image: "/images/vivan.png",
    roles: ["Driver 1", "Software Lead", "Auto"],
    fieldRole: "Driver 1",
    specializations: ["Software", "Auto"],
    bio: "I'm a junior in high school, and I like soccer.",
  },
  {
    name: "Dr. Willy de Ojeda. PhD.",
    image: "/images/willy.png",
    roles: ["Team Coach", "Hardware & CAD specialization"],
    specializations: ["Hardware", "CAD"],
    bio: "I love coaching FTC........Most of the time.",
    coach: true,
  },
];