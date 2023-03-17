import { images } from "./constants/index";
import { SolarPanel, DiyCar, Drone, RobotArm, Selling, Watering } from "./components/index";

export const sponsors = [
    {
        name: 'Arduino',
        link: 'https://www.arduino.cc/',
        img : images.arduino_logo,
    },
    {
        name: 'ArduinoPlanet',
        link: 'https://www.arduiplanet.ma/',
        img : images.arduinoPlanet_logo,
    },
    {
        name: 'EasyEDA',
        link: 'https://easyeda.com/fr',
        img : images.easyEDA_logo,
    },
    {
        name: 'jlcPCB',
        link: 'https://jlcpcb.com/',
        img : images.jlcpcb_logo,
    }
];

export const services = [
    {
        icon  : images.coding,
        title : 'Coding',
        desc  : 'Writing code to control the whole process of the project.',
    },
    {
        icon  : images.electro,
        title : 'Electronics',
        desc  : 'Providing all needed electronics and sensors.',
    },
    {
        icon  : images.testing,
        title : 'Testing Project',
        desc  : 'Testing the project and make sure its working properly.',
    },
    {
        icon  : images.website,
        title : 'Website Project',
        desc  : 'Building a website for the project to share with friends.',
    }
];

export const works = [
    {
        title: 'Solar-Panel',
        desc : 'Solar light detector',
        img  : images.arduino_solar_light,
        link : 'solar-panel',
    },
    {
        title: 'Drone',
        desc : 'Arduino based drone',
        img  : images.arduino_drone,
        link : 'drone',
    },
    {
        title: 'Robot-Arm',
        desc : 'Robotic gripper arm',
        img  : images.arduino_arm,
        link : 'robot-arm'
    },
    {
        title: 'DIY-Car',
        desc : 'Wireless control car',
        img  : images.arduino_car,
        link : 'diy-car'
    },
    {
        title: 'Watering-System',
        desc : 'Automatic watering system',
        img  : images.arduino_watering,
        link : 'watering-system'
    },
    {
        title: 'Selling-Machine',
        desc : 'Automatic selling machine',
        img  : images.arduino_selling,
        link : 'selling-machine'
    },
];

export const awards = [
    {
        title: 'This is our first award',
        year : 2018
    },
    {
        title: 'This is our second award',
        year : 2019
    },
    {
        title: 'This is the third award',
        year : 2019
    },
    {
        title: 'This is the fourth award',
        year : 2021
    },
    {
        title: 'This is our latest award',
        year : 2022
    },
];

export const creates = [
    {
        title: 'Concept',
        desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        icon : images.creates_1,
    },
    {
        title: 'Pexel Perfect',
        desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        icon : images.creates_2,
    },
    {
        title: 'Innovative',
        desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        icon : images.creates_3,
    },
];

export const testimonials = [
    {
        comment: 'More than happy with Ard-Uno.',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        comment: 'The best customer service.',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        comment: 'We are 100% happy.',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
];

export const routes = [
    {
        path   : '/projects/solar-panel',
        element: <SolarPanel />,
    },
    {
        path   : '/projects/diy-car',
        element: <DiyCar />,
    },
    {
        path   : '/projects/drone',
        element: <Drone />,
    },
    {
        path   : '/projects/robot-arm',
        element: <RobotArm />,
    },
    {
        path   : '/projects/selling-machine',
        element: <Selling />,
    },
    {
        path   : '/projects/watering-system',
        element: <Watering />,
    },
];