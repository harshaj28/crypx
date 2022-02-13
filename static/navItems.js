import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
  AiFillGithub,
  AiOutlineUser
} from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    title: 'Coins',
    icon: <AiOutlinePieChart />,
  },
  {
    title: 'Buy/Sell',
    icon: <BiTrendingUp />,
  },
  {
    title: 'For You',
    icon: <MdWeb />,
  },
  {
    title: 'Learn and earn',
    icon: <AiOutlinePlusCircle />,
  },
  {
    title: 'About Dev',
    icon: <AiOutlineUser />,
  },
  {
    title: 'Source Code',
    icon: <AiFillGithub/>,
  },
]
