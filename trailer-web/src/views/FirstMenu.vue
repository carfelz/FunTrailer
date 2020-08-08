<template>
  <div>
    <div
     @click="$router.push('/menu/Drink')"
     :class="$style.container">
    <DashboardButton
      icon="img:img/bottle_icon.svg"
    >
    <q-badge
          color="red"
          floating
        >{{drinkAmount.length}}</q-badge>
      Drinks
    </DashboardButton>
  </div>

  <div
    @click="$router.push('/menu/Snack')"
   :class="$style.container">
    <DashboardButton
      icon="fastfood"
    >
      <q-badge
          color="red"
          floating
        >{{snackAmount.length}}</q-badge>
      Snack
    </DashboardButton>
  </div>
  <div
   @click="$router.push('/menu/Food')"
  :class="$style.container">
    <DashboardButton
      icon="fastfood"
    >
      <q-badge
          color="red"
          floating
        >{{foodAmount.length}}</q-badge>
      Food
    </DashboardButton>
  </div>
  </div>


</template>
<script>
name='menu'
import DashboardButton from "@/components/buttons/DashboardButton"
import ProductsAPI from "@/api/products"
export default {
  title: "Menu",
  components: {
    DashboardButton,
  },
  created(){
    this.getProducts()
  },
  data(){
    return{
      drinkAmount: [],
      snackAmount: [],
      foodAmount: [],
    }
  },
  methods:{

    async getProducts(){
      var food = []
      var drinks= []
      var snack= []
      await ProductsAPI.getProducts().then( res =>{
        var cat = res.data.results.filter( res => res)
        for(let i = 0; i< res.data.results.length; i++ ){
          if(res.data.results[i].category == 'Drink'){
             drinks.push(res.data.results[i])
          }else if(res.data.results[i].category == 'Snack'){
             snack.push(res.data.results[i])
          }else if(res.data.results[i].category == 'Food'){
             food.push(res.data.results[i])

          }
        }
        var amount = snack.map( res => res.subcategory)
        var xamount =  new Set(amount);
        this.snackAmount = [...xamount]

        var amount = drinks.map( res => res.subcategory)
        var xamount =  new Set(amount);
        this.drinkAmount = [...xamount]

        var amount = food.map( res => res.subcategory)
        var xamount =  new Set(amount);
        this.foodAmount = [...xamount]
      })

    },
  },
}
</script>
<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-height: 36rem;
  padding: 32px 16px;
}

// .button {
//   margin-top: 1rem;
// }
.snack-button{
  width: 61px;
  height: 34px;
}
.menuButton {
  background-color: #e5332a;
}

.refer {
  width: 14.75rem;
  text-align: center;
}

.referText {
  margin-top: 1rem;

  @media screen and (max-width: 320px), screen and (max-height: 568px) {
    display: none;
  }
}

.referButton {
  width: 100%;
  margin-top: 1rem;
  font-size: 1.1875rem;
  border-radius: 7px;
  :global(.q-btn__wrapper) {
    min-height: initial;
  }
}

.referIcon {
  width: 53px;
  height: 56px;
}

.beeImg {
  position: relative;
  top: -5rem;
}
</style>