<template>
    <div id="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="list in bannerUrl" :key="list.id">
                <img :src="list.path" alt="">
                {{list.path}}
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import {GetBanner} from '../api/index'
export default {
    data(){
        return{
            bannerUrl:[]
        }
    },
    methods:{
        ShowBanner(){
            GetBanner().then((res)=>{
                this.bannerUrl=res.data
            })
        }
    },
    created(){
        this.ShowBanner()
    }
}
</script>
<style scoped lang="scss">
#banner{
    height: 200px;
    img{
      height: 100%;
      width: 100%;
    }
}
</style>