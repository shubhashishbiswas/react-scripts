import React from 'react';

import {
  Home as HomeView,
  Services as ServicesView,
  DiagnosticScreeningServices as DiagnosticScreeningServicesView,
  TherapeuticServices as TherapeuticServicesView,
  ParentEd as ParentEdView,
  About as AboutView,
  Contact as ContactView,
  Careers as CareersView,
  ResourceSample as ResourceSampleView,
  NotFoundCover as NotFoundCoverView,
} from 'views';



const routes = [
  {
    path: '/',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/Home',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/Services',
    renderer: (params = {}) => <ServicesView {...params} />,
  },
  {
    path: '/DiagnosticsServices',
    renderer: (params = {}) => <DiagnosticScreeningServicesView {...params} />,
  },
  {
    path: '/TherapyServices',
    renderer: (params = {}) => <TherapeuticServicesView {...params} />,
  },
  {
    path: '/ParentsServices',
    renderer: (params = {}) => <ParentEdView {...params} />,
  },
  {
    path: '/About',
    renderer: (params = {}) => <AboutView {...params} />,
  },
  {
    path: '/Contact',
    renderer: (params = {}) => <ContactView {...params} />,
  },
  {
    path: '/Careers',
    renderer: (params = {}) => <CareersView {...params} />,
  },
  {
    path: '/Resources',
    renderer: (params = {}) => <ResourceSampleView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
