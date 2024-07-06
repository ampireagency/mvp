export interface NavItem {
  name: string;
  href: string;
  current?: boolean;
  subMenu?: NavItem[];
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "SignUp", href: "/signup" },
  { name: "login", href: "/login" },
];
