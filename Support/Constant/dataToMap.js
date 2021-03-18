export const icon = [
    { name: "cog", bgColor: "orange", label: "edit profile",location:'Edit' },
    { name: "book", bgColor: 'pink', label: "transaction history",location:"Transactions" },
    { name: "map-marker", bgColor: 'violet', label: "Address",location:'Address' },
    { name: "lock", bgColor: 'blue', label: 'security',location:'Security' },
    { name: 'id-card', bgColor: 'yellow', label: "bank-account",location:'Policy' },
    { name: 'sign-out', bgColor: "red", label: "sign out" }
]


export const sellerData=[
    { name: "book-plus-multiple-outline", bgColor: "orange", label: "add product",location:'AddProduct' },
    { name: "billboard", bgColor: 'pink', label: "see all products",location:"allproducts" },
    { name: "chart-timeline", bgColor: 'violet', label: "statistics",location:'statistics' },
    { name: "file-cabinet", bgColor: 'blue', label: 'Draft',location:'Draft' },
  
]

export const category=[
    {id:'1',images:require('../Images/iphone.png'),text:'Phone'},
    {id:'2',images:require('../Images/laptop.png'),text:'Laptop'},
    {id:'3',images:require('../Images/camera.png'),text:'Camera'},
    {id:'4',images:require('../Images/accessories.png'),text:'Accesories'}
]

export const brands=[
    {id:'1',images:require('../Images/applelogo.png'),navigate:'Productdetails',brand_name:'apple'},
    {id:'2',images:require('../Images/samsung.png'),navigate:'Productdetails',brand_name:'samsung'},
    {id:'3',images:require('../Images/acerlogo.png'),navigate:'Productdetails',brand_name:'acer'},
    {id:'4',images:require('../Images/asus.png'),navigate:'Productdetails',brand_name:'asus'},
    {id:'5',images:require('../Images/canon.png'),navigate:'Productdetails',brand_name:'canon'},
    {id:'6',images:require('../Images/fuji.png'),navigate:'Productdetails',brand_name:'fujifilm'},
    {id:'7',images:require('../Images/lenovo-logo.png'),navigate:'Productdetails',brand_name:'lenovo'},

]
export const imagesData=[
    {id:'1',images:require('../Images/iphone.png')},
    {id:'2',images:require('../Images/laptop.png')},
    {id:'3',images:require('../Images/camera.png')},
    {id:'4',images:require('../Images/accessories.png')},
    {id:'5',images:require('../Images/asus.png')}
]

export const selectCategory=[
{id:"1",icon:'ipod',value:"handphone"},
{id:"2",icon:'laptop-chromebook',value:"laptop/computer"},
{id:"3",icon:'camera',value:"camera"},
{id:"4",icon:'monitor-speaker',value:"accessories"},

]

export const  filterOption=[
    {id:'1',title:'Product Status',data:[
       
        {id:2,option:'discounting',isChecked:false}
    
    ]},
    {id:'2',title:"Category",data:[
     
        {id:'2',option:'Handphone',isChecked:false},
        {id:'3',option:'Laptop',isChecked:false},
        {id:'1',option:'Camera',isChecked:false},
        {id:'4',option:'Accesories',isChecked:false}
    ]},
    {id:'3',title:'Product Stock',data:[
 
        {id:'2',option:'nearly out of stocks (<6)',isChecked:false}
    ]}
]

export const sortingOptions=[
    'BestSeller','Newest','Cheapest','MostExpensive','MostViewed','Least Stock','A-Z'
]

export const discountOption=['discount','percentage','final price']
export const discountOptionDetails=[{
    id:'1',
    title:'discount price',
    btnplaceHolder:'Insert value of your discount price'
},
{
    id:'2',
    title:'percentage',
    btnplaceHolder:'Insert discount percentage'
},
    {
        id:'3',
        title:'Final Price',
        btnplaceHolder:'Insert Final Price'
    }
]

export const editProductOptions=[
    {id:1,title:'Product Name',text:'product_name'},
    {id:2,title:'Category',text:'category'},
    {id:3,title:'Spesification',text:'specification'},
    {id:4,title:'Product Detail',text:'product_detail'},
    {id:5,title:'Product Description',text:'product_description'}

]

export const brandName=['apple','samsung','lenovo','acer','asus','canon','fujifilm']