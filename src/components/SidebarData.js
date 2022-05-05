import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as IonIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Manage Complais',
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pending',
        path: '/pending',
        icon: <AiIcons.AiOutlineClockCircle />,
        cName: 'sub-nav'
      },
      {
        title: 'Inprogress',
        path: '/progress',
        icon: <FiIcons.FiPauseCircle />,
        cName: 'sub-nav'
      },
      {
        title: 'Under Process',
        path: '/uprocess',
        icon: <IonIcons.IoEllipsisHorizontalCircleOutline />,
        cName: 'sub-nav'
      },
      {
        title: 'Completed',
        path: '/completed',
        icon: <BiIcons.BiSelectMultiple />
      }
    ]
  },
  {
    title: 'Manage Resources',
    path: '#',
    icon: <IoIcons.IoIosSettings />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Resource',
        path: '/addInfo',
        icon: <BiIcons.BiBookAdd />
      },
      {
        title: 'Delete Resource',
        path: '/deleteInfo',
        icon: <IoIcons.IoIosTrash />
      },
      {
        title: 'Update Resource',
        path: '/updateInfo',
        icon: <FiIcons.FiRefreshCcw />
      }
    ]
  },
  {
    title: 'Manage Students',
    path: '/mngstdnts',
    icon: <IonIcons.IoPersonSharp />
  },
  {
    title: 'Feedback',
    path: '/feedback',
    icon: <BsIcons.BsChatLeftText />
  }
];