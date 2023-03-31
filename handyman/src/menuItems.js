export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Handyman',
    url: '/handyman',
    submenu: [
      {
        title: 'Bathroom',
        url: 'bathroom',
      },
      {
        title: 'Garden',
        url: 'garden',
        submenu: [
          {
            title: 'Lighting',
            url: 'lighting',
          },
          {
            title: 'Shed',
            submenu: [
              {
                title: 'Concrete Base',
                url: 'concrete-base',
              },
              {
                title: 'Guttering',
                url: 'guttering',
              },
            ],
          },
        ],
      },
    ],
  },
];
