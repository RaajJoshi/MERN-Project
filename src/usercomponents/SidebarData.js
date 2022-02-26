import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Post Complains',
    path: '/postcomp',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Modify Complains',
    path: '/modcomp',
    icon: <FiIcons.FiRefreshCcw />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'View Complains',
    path: '/viewcomp',
    icon: <FaIcons.FaEye />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Feedback',
    path: '/usrfeedback',
    icon: <BsIcons.BsChatLeftText />
  }
];