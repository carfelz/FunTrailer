<template>
    <div :class="$style.container">
      <DashboardButton
      :icon="`${icon}`"
      :to = "'/drinks'"
     >
    </DashboardButton>
    <!-- list of sub categories -->
      <div class="q-pa-md q-gutter-md" style="width: 450px">
        <q-list
        v-for=" sub in subCategories"
        :key="sub"
         >
          <q-separator spaced />
            <q-item dense >
              <q-item-section>
                <q-item-label lines="1">{{sub}}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                flat
                outlined
                round
                icon="navigate_next"
                color="grey"
                />
              </q-item-section>
            </q-item>
        </q-list>
      </div>
    </div>
</template>
<script>
name='drinks'
import ProductsAPI from "@/api/products"
import DashboardButton from "./buttons/DashboardButton"
export default {
 title: "Menu",
  components: {
    DashboardButton,
  },
  created(){
    this.getSubCat()
    this.getIcon()
  },
  data(){
    return{
      subCategories: {},
      icon: '',
    }
  },
  methods:{
    async getSubCat(){
      var category = `${this.$route.params.category}`
      await ProductsAPI.categoryFilter(category).then( res =>{
       var sub = res.data.results.map( res => res.subcategory)
       var arr = new Set(sub);
       this.subCategories = [...arr]
      })
    },
    getIcon(){
      if(this.$route.params.category == 'Food' || this.$route.params.category == 'Snack'){
        this.icon= 'fastfood'
      }else{
        this.icon = 'img:../img/bottle_icon.svg'
      }
    }
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
</style>