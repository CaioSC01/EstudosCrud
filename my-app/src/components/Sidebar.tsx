import React from 'react'

export const Sidebar = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <i className="bx bx-grid-alt"></i>,
    cName: 'nav',
    tName: <span className="tooltip">Dashboard</span>
  },
  {
    title: <span className="links_name">Classific.Cli</span>,
    path: '/classific',
    icon: <i className="bx bx-user-check"></i>,
    cName: 'nav-text',
    tName: <span className="tooltip">Classific.Cli</span>
  },
  {
    title: <span className="links_name">Grupos.Cli</span>,
    path: '/group',
    icon: <i className="bx bx-group"></i>,
    cName: 'nav-text',
    tName: <span className="tooltip">Grupos.Cli</span>
  },
  {
    title: <span className="links_name">Analise</span>,
    path: '/GroupCli',
    icon: <i className="bx bx-pie-chart-alt-2"></i>,
    cName: 'nav-text',
    tName: <span className="tooltip">Analise</span>
  },
  {
    title: 'Configurações',
    path: '/GroupCli',
    icon: <i className="bx bx-cog"></i>,
    cName: 'nav-text',
    tName: <span className="tooltip">Config.</span>
  }
]
