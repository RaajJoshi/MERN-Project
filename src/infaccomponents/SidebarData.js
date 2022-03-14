import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Post Complains',
    path: '/postcompif',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Modify Complains',
    path: '/modcompif',
    icon: <FiIcons.FiRefreshCcw />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'View Complains',
    path: '/viewcompif',
    icon: <FaIcons.FaEye />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'To-Do List',
    path: '/work',
    icon: <FcIcons.FcTodoList />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Feedback',
    path: '/ifacfeedback',
    icon: <BsIcons.BsChatLeftText />
  }
];