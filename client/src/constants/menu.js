const data = [
  {
    id: "skills_page",
    icon: "iconsminds-three-arrow-fork",
    label: "menu.skills",
    to: "/app/skills"
  },
  {
    id: "teams_page",
    icon: "iconsminds-library",
    label: "menu.teams",
    to: "/app/teams",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.teams.all",
        to: "/app/teams/all"
      }
    ]
  },
  {
    id: "gogo",
    icon: "iconsminds-air-balloon-1",
    label: "menu.gogo",
    to: "/app/gogo",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.start",
        to: "/app/gogo/start"
      }     
    ]
  },
  {
    id: "secondmenu",
    icon: "iconsminds-three-arrow-fork",
    label: "menu.second-menu",
    to: "/app/second-menu",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.second",
        to: "/app/second-menu/second"
      }
    ]
  },
  {
    id: "blankpage",
    icon: "iconsminds-bucket",
    label: "menu.profile",
    to: "/app/profile"
  },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "https://gogo-react-docs.coloredstrategies.com/",
    newWindow:true
  }
];
export default data;
