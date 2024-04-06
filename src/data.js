import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'


export const pageLinks = [
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#about', text:'about'},
    {id:3, href:'#services', text:'services'},
    {id:4, href:'#tours', text:'tours'},
];

export const socialLinks = [
    {id:1, href:"https://www.twitter.com", icon:'fab fa-facebook'},
    {id:1, href:"https://www.twitter.com", icon:'fab fa-twitter'},
    {id:1, href:"https://www.twitter.com", icon:'fab fa-squarespace'},
];

export const services = [
    {id:1, icon:'fas fa-wallet fa-fw', title:'Lipsa', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:1, icon:'fas fa-tree fa-fw', title:'endless hiking', text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id:1, icon:'fas fa-socks fa-fw', title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},

];

export const tours = [
    {id:1, imgsrc: tour1, date:'august 26th, 2020', tourtitle:'Tibet Adventure', info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.', days:'6 days', price:'from $2100', place:'china'},

    {id:1, imgsrc: tour2, date:'october 1th, 2020', tourtitle:'best of java', info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.', days:'11 days', price:'from $1400', place:'indonesia'},

    {id:1, imgsrc: tour3, date:'september 15th, 2020', tourtitle:'explore hong kong', info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.', days:'8 days', price:'from $5000', place:'hong kong'},

    {id:1, imgsrc: tour4, date:'december 5th, 2019', tourtitle:'kenya highlights', info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.', place:'kenya', days:'20 day', price:'from $3300'},


];