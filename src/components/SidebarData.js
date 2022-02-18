import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Manage Complais',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pending',
        path: '/pending',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Inprogress',
        path: '/progress',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Completed',
        path: '/completed',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Manage Resources',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Resource',
        path: '/addInfo',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Delete Resource',
        path: '/deleteInfo',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Update Resource',
        path: '/updateInfo',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Feedback',
    path: '/feedback',
    icon: <IoIcons.IoIosPaper />
  }
];