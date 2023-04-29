import { images } from "./constants/index";
import { SolarPanel, DiyCar, Drone, RobotArm, Selling, Watering, RadioControl } from "./components/index";

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
    },
    {
        name: 'pcbWay',
        link: 'https://pcbway.com/',
        img : images.pcbway_logo,
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
        title : 'Project Website',
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
        title: 'Radio-Control',
        desc : 'RC Radio Controller',
        img  : images.arduino_solar_light,
        link : 'radio-control',
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
        title: 'No awards yet',
        year : '_ _ _'
    },
];

export const creates = [
    {
        title: 'Concept',
        desc : 'Designing and building electronic devices, circuits, and systems that power our modern world.',
        icon : images.creates_1,
    },
    {
        title: 'Pexel Perfect',
        desc : 'Designing, analysing, and manufacturing mechanical systems and devices.',
        icon : images.creates_2,
    },
    {
        title: 'Innovative',
        desc : 'Introducing new ideas, products, or methods that create value and drive progress in society.',
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
        path   : '/projects/radio-control',
        element: <RadioControl />,
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

export const model_3d = [
    {
      img: images.solar_panel_1,
      link: "https://get-3d.netlify.app/models/solar-light-follower",
    },
    {
      img: images.servo_motor,
      link: "https://get-3d.netlify.app/models/micro-servo-sg90",
    },
    {
      img: images.solar_panel_2,
      link: "https://get-3d.netlify.app/models/solar-light-follower",
    },
];
export const parts_3d = [
    { 
      img: images.solar_panel_base,
      title: 'Panel Base',
      link: 'https://thangs.com/mythangs/file/799776',
    },
    { 
      img: images.solar_panel_base_done,
      title: 'Panel Base',
      link: 'https://thangs.com/mythangs/file/799776',
    },
    { 
      img: images.solar_panel_holders,
      title: 'Panel Stent',
      link: 'https://thangs.com/mythangs/file/799776',
    },
    { 
      img: images.solar_panel_holders_done,
      title: 'Panel Stent',
      link: 'https://thangs.com/mythangs/file/799776',
    },
    { 
      img: images.solar_panel_ldrs,
      title: 'Servo / LDRs',
      link: 'https://thangs.com/mythangs/file/800047',
    },
    { 
      img: images.solar_panel_servo_mounted,
      title: 'Servo Motor',
      link: 'https://thangs.com/mythangs/file/800016',
    },
];