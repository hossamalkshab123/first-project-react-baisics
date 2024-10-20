import {v4 as uuidv4 } from 'uuid';
import { ICategory, IFormInput, IProduct } from "../Interface";

export const productInformation: IProduct[]= [
    {
        id: uuidv4(),
        title: 'Nissan Ariya',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://argaamplus.s3.amazonaws.com/7f5961b3-b436-4df0-b742-d7732a43cf50.png',
        price: '400000',
        colors: [],
        category :{
            name: 'Nissan',
            imageURL : 'https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sentra/product_code/product_version/new-assets/Sentra%20B%20Arabic.jpg.ximg.l_full_m.smart.jpg'
        }
    },
    {
        id: uuidv4(),
        title: 'Nissan SUV',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/juke/refresh/juke-gallery.jpg.ximg.l_full_m.smart.jpg',
        price: '23',
        colors: ['#9f9b9b','#574c4c'],
        category :{
            name: 'Nissan',
            imageURL : 'https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sentra/product_code/product_version/new-assets/Sentra%20B%20Arabic.jpg.ximg.l_full_m.smart.jpg'
        }
    },
    {
        id: uuidv4(),
        title: 'Nissan TEST',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://ocdn.eu/pulscms-transforms/1/JXUk9kpTURBXy8xZGYwZmM0YjhhYmY0ODgxNTFjZWE5NWM3MTA3MzA4Mi5qcGeSlQPNATPNAvDNFO3NC8aTBc0EsM0Cnt4AAaEwAQ',
        price: '30',
        colors: ['#937676','#999466','#cfc45d','#af5252'],
        category :{
            name: 'Nissan',
            imageURL : 'https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sentra/product_code/product_version/new-assets/Sentra%20B%20Arabic.jpg.ximg.l_full_m.smart.jpg'
        }
    },
    {
        id: uuidv4(),
        title: 'KIA - SUV',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvo8IOyAFOOkISieJfE6bMIJaCYxVOZCpjPg&s',
        price: '1500',
        colors: ['#d71e1e','#000000','#219b21'],
        category :{
            name: 'KIA',
            imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPITnizaCzulJHgJtcQ5lZkYCGb0_sM9f0A&s'
        }
    },
    {
        id: uuidv4(),
        title: 'KIA SOPRT',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2ndj8CvzsqD-imTZ-FxVR7w9b2EQnke_hA&s',
        price: '12',
        colors: ['#ff0076','#ac5478','#356787'],
        category :{
            name: 'KIA',
            imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPITnizaCzulJHgJtcQ5lZkYCGb0_sM9f0A&s'
        }
    },
    {
        id: uuidv4(),
        title: 'KIA K4',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPITnizaCzulJHgJtcQ5lZkYCGb0_sM9f0A&s',
        price: '60',
        colors: ['#c192a8','#ac5478','#356787','#cf8d2a'],
        category :{
            name: 'KIA',
            imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPITnizaCzulJHgJtcQ5lZkYCGb0_sM9f0A&s'
        }
    },
    {
        id: uuidv4(),
        title: 'P-M-W X5',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCZDX4Z6RQtfj3IxXqsEUfltu_aeXVKquDQ&s',
        price: '42',
        colors: ['#696262','#ac5478','#356787'],
        category :{
            name: 'P_M_W',
            imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCZDX4Z6RQtfj3IxXqsEUfltu_aeXVKquDQ&s',
        }
    },
    {
        id: uuidv4(),
        title: 'P-M-W M5 TOURING',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6tERunLN_Bam-ZhE1lsiUCVGcnioyfwqqg&s',
        price: '14',
        colors: ['#d71e1e','#000000',''],
        category :{
            name: 'P-M-W',
            imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCZDX4Z6RQtfj3IxXqsEUfltu_aeXVKquDQ&s',
        }
    },
];

export const formInputList: IFormInput[] = [
    {
        id: 'titile',
        name: 'title',
        label: 'Product Titile',
        type: 'text',
    },
    {
        id: 'description',
        name: 'description',
        label: 'Product description',
        type: 'text',
    },
    {
        id: 'image',
        name: 'imageURL',
        label: 'Product Image URL',
        type: 'text',
    },
    {
        id: 'price',
        name: 'price',
        label: 'Product Price',
        type: 'text',
    }
];

export const colors: string[] = [
    '#ff0076',
    '#ac5478',
    '#356787',
    '#ab5797',
    '#652097',
    '#246790',
    '#cfc45d',
    '#af5252',
    '#219b21',
    '#999466'
];

export const categories: ICategory[] = [
    {
        id: uuidv4(),
        name: 'Nissan',
        imageURL : 'https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sentra/product_code/product_version/new-assets/Sentra%20B%20Arabic.jpg.ximg.l_full_m.smart.jpg',
    },
    {
        id: uuidv4(),
        name: 'KIA',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPITnizaCzulJHgJtcQ5lZkYCGb0_sM9f0A&s'
    },
    {
        id: uuidv4(),
        name: 'P-M-W',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCZDX4Z6RQtfj3IxXqsEUfltu_aeXVKquDQ&s',
    }
];