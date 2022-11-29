import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import {
  IconGauge,
  IconCalendarStats,
  IconNotes,
  IconLock,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
} from '@tabler/icons';
import { PrimaryHeader } from './PrimaryHeader';
import { links, user } from './_mock';
import PrimaryNavbar from './PrimaryNavbar';

const navbar_data = [
  { label: 'Dashboard', icon: IconGauge, link: '/dashboard' },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics, link: '/analytics' },
  { label: 'Contracts', icon: IconFileAnalytics, link: '/contracts' },
  { label: 'Settings', icon: IconAdjustments, link: '/settings' },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

export default function PrimaryAppShell() {
  return (
    <AppShell
      padding='md'
      header={<PrimaryHeader user={user} links={links} />}
      navbar={<PrimaryNavbar data={navbar_data} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
}
