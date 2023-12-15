// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Manav",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "36e29ca376b80b3ae7b24b3173485cb0", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "37.775",
  defaultLongitude: "-122.419",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/manav-1",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mails",
      link: "https://mail.google.com/",
    },
    {
      id: "3",
      name: "Outlook",
      icon: "mailbox",
      link: "https://outlook.office365.com/mail/",
    },
    {
      id: "4",
      name: "Trello",
      icon: "trello",
      link: "https://trello.com/b/vjsymQyv/tech-core",
    },
    {
      id: "5",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "6",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com",
    },
  ],
  firstlistsContainer: [
    {
      icon: "folder-kanban",
      id: "1",
      links: [
        {
          name: "Backend",
          link: "https://github.com/anycover/backoffice-api-v2",
        },
        {
          name: "Frontend",
          link: "https://github.com/anycover/backoffice-ui-v2",
        },
        {
          name: "Widget",
          link: "https://github.com/anycover/shopify-widget",
        },
        {
          name: "Repos",
          link: "https://github.com/anycover",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Backend",
          link: "https://github.com/manav-1/backoffice-api-v2",
        },
        {
          name: "Frontend",
          link: "https://github.com/manav-1/backoffice-ui-v2",
        },
        {
          name: "Widget",
          link: "https://github.com/manav-1/shopify-widget",
        },
        {
          name: "Repos",
          link: "https://github.com/manav-1",
        },
      ],
    },
  ],
};
