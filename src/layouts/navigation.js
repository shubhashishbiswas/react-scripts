const pages = {
  sidebarMenu: [
    {
      hasLink: 1,
      hasTabs: 1,
      title: 'Services',
      href: '/Services',
      TabItems: [
        {
          hasLink: 1,
          hasTabs: 0,
          title: 'Diagnostic Services',
          href: '/DiagnosticsServices',
        },
        {
          hasLink: 1,
          hasTabs: 0,
          title: 'Therapy Services',
          href: '/TherapyServices',
        },
        {
          hasLink: 1,
          hasTabs: 0,
          title: 'Parent Ed',
          href: '/ParentsServices',
        },
      ],
    },
    {
      hasLink: 1,
      hasTabs: 0,
      title: 'FAQs',
      href: '/Resources',
    },
    {
      hasLink: 1,
      hasTabs: 0,
      title: 'Resources',
      href: '/Resources',
    },
    {
      hasLink: 1,
      hasTabs: 0,
      title: 'Contact Us',
      href: '/Contact',
    },
    {
      hasLink: 1,
      hasTabs: 0,
      title: 'Careers',
      href: '/Careers',
    },
    {
      hasLink: 1,
      hasTabs: 0,
      title: 'About Us',
      href: '/About',
    },
  ],
      
  linktreeFLAT: [
    {
      title: 'Services',
      href: '/Services',
    },
    {
      title: 'Diagnostic Services',
      href: '/DiagnosticsServices',
    },
    {
      title: 'Therapy Services',
      href: '/TherapyServices',
    },
    {
      title: 'Parent Ed',
      href: '/ParentsServices',
    },    
    {
      title: 'About Us',
      href: '/About',
    },
    {
      title: 'Contact Us',
      href: '/DummyContact',
    },
    {
      title: 'Careers',
      href: '/Careers',
    },
    {
      title: 'Resources',
      href: '/Resources',
    },    
    {
      title: 'Error 404: Cover',
      href: '/not-found-cover',
    },
  ],

};

export default pages;
