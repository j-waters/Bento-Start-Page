import { Config } from "@/models/config";

export default {
  columns: [
    {
      icon: "briefcase",
      links: [
        { url: "https://secure.ecs.soton.ac.uk", label: "ECS" },
        {
          url: "https://home.blackboard.soton.ac.uk/",
          label: "Blackboard",
        },
        { url: "https://notion.so", label: "Notion" },
      ],
    },
    {
      icon: "coffee",
      links: [
        { url: "https://smile.amazon.co.uk", label: "Amazon" },
        { url: "https://reddit.com/", label: "Reddit" },
        { url: "https://twoseven.xyz/", label: "TwoSeven" },
        { url: "https://netflix.com", label: "Netflix" },
        { url: "https://messenger.com", label: "Messenger" },
      ],
    },
  ],
  tiles: [
    { url: "https://github.com/", icon: "github" },
    { url: "https://youtube.com/", icon: "youtube" },
    { url: "https://mail.google.com/", icon: "mail" },
    { url: "https://maps.google.com/", icon: "map" },
    { url: "https://calendar.google.com/", icon: "calendar" },
    { url: "https://drive.google.com/", icon: "folder" },
  ],
  style: {
    iconSize: "4vh",
    foreground: "#d8dee9",
    fontSizes: {
      giant: "12vh",
      large: "8vh",
      medium: "3vh",
      small: "2vh",
    },
    accent: "#ab47bc",
    background: "#292D3E",
    backgroundSecondary: "#32364C",
    accentForeground: "#d8dee9",
  },
  greetings: {
    morning: ["Good morning %!"],
    afternoon: ["Good afternoon %!"],
    evening: ["Good evening %!"],
    night: ["Good night %!"],
  },
  name: "James",
} as Config;
