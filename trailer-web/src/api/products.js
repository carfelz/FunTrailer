import { BaseApi } from "@/api"
export default {
     categoryFilter: (cat, subcat) => {
           if(cat && subcat){
               return BaseApi.get(`/orders/products/?category=${cat}&subcategory=${subcat}`)
           }else{
               return BaseApi.get(`/orders/products/?category=${cat}`)
           }
     },
     getProducts: () => BaseApi.get('/orders/products/')
}
