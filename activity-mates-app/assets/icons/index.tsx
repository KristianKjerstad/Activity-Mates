import { View, Text } from 'react-native'
import React from 'react'
import Home from './Home';
import Mail from './Mail';
import Lock from './Lock';
import User from './User';
import Heart from './Heart';
import Plus from './Plus';
import Search from './Search';
import Location from './Location';
import Call from './Call';
import { theme } from '../../constants/theme';
import Camera from './Camera';
import Edit from './Edit';
import ArrowLeft from './ArrowLeft';
import ThreeDotsCircle from './ThreeDotsCircle';
import ThreeDotsHorizontal from './ThreeDotsHorizontal';
import Comment from './Comment';
import Share from './Share';
import Send from './Send';
import Delete from './Delete';
import Logout from './logout';
import Image from './Image';
import Video from './Video';


const icons = {
    home: Home,
    mail: Mail,
    lock: Lock,
    user: User,
    heart: Heart,
    plus: Plus,
    search: Search,
    location: Location,
    call: Call,
    camera: Camera,
    edit: Edit,
    arrowLeft: ArrowLeft,
    // threeDotsCircle: ThreeDotsCircle,
    // threeDotsHorizontal: ThreeDotsHorizontal,
    // comment: Comment,
    // share: Share,
    // send: Send,
    // delete: Delete,
    // logout: Logout,
    // image: Image,
    // video: Video,
}


export type TIconName = "home" | "mail" | "lock" | "user" | "heart" | "plus" | "search" | "location" | "call" | "camera" | "edit" | "arrowLeft"


type IconProps = {
    name: TIconName
    height?: number
    strokeWidth?: number,
    color?: string,
    width?: number
}



const Icon = (props: IconProps) => {
    const { name, width, height, strokeWidth, color } = props
    const IconComponent = icons[name]


    return <IconComponent height={height ?? 24} width={width ?? 24} strokeWidth={strokeWidth ?? 1.9} color={color ?? theme.colors.textLight} />
}

export default Icon