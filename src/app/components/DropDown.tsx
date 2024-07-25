import React, { FC } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

const socials = [
  { id: 1, name: "GitHub", icon: "/github.svg", color: "#181717" },
  { id: 2, name: "Frontend Mentor", icon: "/ftmen.svg", color: "#F8F9FA" },
  { id: 3, name: "Twitter", icon: "/twitter.svg", color: "#1DA1F2" },
  { id: 4, name: "LinkedIn", icon: "/linkedin.svg", color: "#0077B5" },
  { id: 5, name: "YouTube", icon: "/youtube.svg", color: "#FF0000" },
  { id: 6, name: "Facebook", icon: "/facebook.svg", color: "#1877F2" },
  { id: 7, name: "Twitch", icon: "/twitch.svg", color: "#9146FF" },
  { id: 8, name: "Dev.to", icon: "/devto.svg", color: "#0A0A0A" },
  { id: 9, name: "Codewars", icon: "/codewars.svg", color: "#AD2C27" },
  { id: 10, name: "Codepen", icon: "/codepen.svg", color: "#000000" },
  { id: 11, name: "freeCodeCamp", icon: "/freecodecamp.svg", color: "#006400" },
  { id: 12, name: "GitLab", icon: "/gitlab.svg", color: "#FC6D26" },
  { id: 13, name: "Hashnode", icon: "/hashnode.svg", color: "#2962FF" },
  { id: 14, name: "Stack Overflow", icon: "/stack.svg", color: "#F48024" },
];

const Dropdown: FC<{ selected: any; onSelect: (selected: any) => void }> = ({
  selected,
  onSelect,
}) => {
  return (
    <Listbox value={selected} onChange={onSelect}>
      <div className="relative">
        <label className="text-[12px] font-IntSans text-dark-grey">
          Platform
        </label>
        <ListboxButton className="relative w-full h-[48px] mt-[4px] cursor-default rounded-lg bg-white py-1.5 pl-[16px] pr-[16px] text-left text-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 focus:shadow-xl focus:outline-primary-color focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 border-border-color">
          <span className="flex items-center">
            {selected && (
              <img
                alt={selected.name}
                src={selected.icon}
                className="h-5 w-5 flex-shrink-0 rounded-full"
              />
            )}
            <span className="ml-3 block truncate">
              {selected ? selected.name : "Select a platform"}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-[16px]">
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L7 7L13 1" stroke="#633CFF" strokeWidth="2" />
            </svg>
          </span>
        </ListboxButton>
        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {socials.map((social) => (
            <ListboxOption
              key={social.id}
              value={social}
              className="group relative cursor-default select-none py-2 pr-[16px] pl-[16px] text-gray-900"
            >
              <div className="flex items-center">
                <img
                  alt={social.name}
                  src={social.icon}
                  className="h-5 w-5 flex-shrink-0 rounded-full group-hover:scale-110 transition-transform duration-150"
                />
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold hover:text-primary-color">
                  {social.name}
                </span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default Dropdown;
