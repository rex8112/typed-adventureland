export type ClassesKey =
  | "mage"
  | "merchant"
  | "paladin"
  | "priest"
  | "ranger"
  | "rogue"
  | "warrior";

export interface GClasses {
  resistance: number;
  frequency: number;
  damage_type: string;
  mcourage: number;
  speed: number;
  doublehand: {
    pickaxe?: {
      speed: number,
    },
    rod?: {
      speed: number,
    },
    basher?: {
      speed: number,
      mp_cost?: number,
      frequency?: number,
    },
    axe?: {
      speed: number,
      mp_cost?: number,
      frequency?: number,
    },
    rapier?: {
      mp_cost?: number,
      frequency: number,
      miss?: number,
    },
    great_sword?: {
      mp_cost: number,
      frequency: number,
      speed: number,
    },
    bow?: {
      speed: number,
      frequency: number,
      miss: number,
    },
    scythe?: {
      mp_cost: number,
      frequency: number,
      speed: number,
    },
    wand?: {
      frequency: number,
    },
    dagger?: {},
    fist?: {},
    short_sword?: {},
    spear?: {
      frequency: number,
      speed: number,
    },
    great_staff?: {
      mp_cost: number,
      frequency: number,
      speed: number,
    },
  };
  stats: {
    dex: number,
    int: number,
    vit: number,
    str: number,
    for: number,
  };
  armor: number;
  range: number;
  attack: number;
  lstats: {
    dex: number,
    int: number,
    vit: number,
    str: number,
    for: number,
  };
  description: string;
  offhand: {
    source?: {},
    quiver?: {
      speed?: number,
    },
    shield?: {
      speed: number,
    },
    misc_offhand?: {
      speed?: number,
      frequency?: number,
    },
    sword?: {
      speed: number,
    },
    short_sword?: {
      speed: number,
    },
    mace?: {
      frequency: number,
      speed: number,
    },
    fist?: {
      frequency?: number,
    },
    dagger?: {},
    stars?: {},
  };
  hp: number;
  courage: number;
  pcourage: number;
  mainhand: {
    mace?: {
      speed?: number,
      frequency?: number,
    },
    dagger?: {
      speed?: number,
    },
    fist?: {
      speed?: number,
      frequency?: number,
    },
    spear?: {
      speed: number,
    },
    short_sword?: {
      speed?: number,
      output?: number,
    },
    bow?: {
      speed: number,
    },
    dartgun?: {},
    staff?: {
      speed: number,
    },
    sword?: {
      speed: number,
      output?: number,
      frequency?: number,
    },
    pmace?: {
      speed: number,
    },
    crossbow?: {
      frequency: number,
      apiercing: number,
    },
    stars?: {
      frequency: number,
    },
    wblade?: {
      speed: number,
    },
    wand?: {
      mp_cost: number,
      frequency: number,
    },
  };
  mp_cost: number;
  base_slots: {
    mainhand: {
      name: string,
      gift: number,
      level: number,
    },
  };
  mp: number;
  projectile: string;
  output: number;
  main_stat: string;
  looks: [
    [
      string,
      {
        hair?: string,
        head: string,
        hat?: string,
        chin?: string,
      }
    ],
    [
      string,
      {
        hair?: string,
        head: string,
        makeup?: string,
      }
    ],
    [
      string,
      {
        hair?: string,
        head: string,
        hat?: string,
        chin?: string,
      }
    ],
    [
      string,
      {
        hair?: string,
        head: string,
        makeup?: string,
      }
    ]
  ];
  brave?: boolean;
  xcx?: Array<string>;
  phresistance?: number;
  bmresistance?: number;
  stresistance?: number;
  side_stat?: string;
  pnresistance?: number;
  fzresistance?: number;
}