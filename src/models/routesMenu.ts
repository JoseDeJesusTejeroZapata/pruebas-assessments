import { ReactNode } from "react"


export interface MenuItem { 
  title: string,
  icon: string | ReactNode,
  path: string,
  action?: string,
  children?: MenuItem[]
  isExternalLink?: boolean
}


export const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'ic:baseline-dashboard',
      path: '/dashboards/crm',
    },
    {
      title: 'Accounts',
      icon: 'ic:baseline-business-center',
      path: '/accounts',
      children: [
        {
          title: 'All',
          icon: 'ion:file-tray-stacked',
          path: '/accounts/all',
        },
        {
          title: 'Pending',
          icon: 'mdi:clock',
          path: '/accounts/pending',
        },
        {
          title: 'Not Materialized',
          icon: 'mdi:progress-helper',
          path: '/accounts/not-materialized',
        },
        {
          title: 'Not Taken Up',
          icon: 'custom:not-taken-up',
          path: '/accounts/not-taken-up',
        },
        {
          title: 'Declined',
          icon: 'mdi:cancel',
          path: '/accounts/declined',
        },
        {
          title: 'Bound',
          icon: 'icon-park-outline:link-three',
          path: '/accounts/bound',
        }
      ]
    },
]