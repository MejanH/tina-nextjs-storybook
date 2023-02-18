import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const demoDropdownLinks = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

interface DropdownLink {
  href: string;
  label: string;
}

interface DropdownProps {
  menuBtnLabel: string;
  links: DropdownLink[];
}

export const Dropdown = ({ menuBtnLabel, links }: DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {menuBtnLabel}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">
          {links.map((link, i) => (
            <Menu.Item key={link.href}>
              <a
                href={link.href}
                className="hover:bg-violet-500 hover:text-white bg-white flex w-full items-center rounded-md px-2 py-2 text-sm"
              >
                {link.label}
              </a>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};
