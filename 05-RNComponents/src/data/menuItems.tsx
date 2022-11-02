import { MenuItem } from '../interfaces/interfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'Switch',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'Alerts',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputs',
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefresh',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'Modal Screen',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
];
