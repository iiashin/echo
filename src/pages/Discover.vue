<template>
    <div id="discover">
        <Banner></Banner>
        <div id="tab">每日推荐</div>
        <div id="listenAll" @click="RecomendList">一键播放</div>
        <Recommend></Recommend>
        <Bottom-tab></Bottom-tab>
    </div>
</template>
<script>
import Banner from '../components/Banner'
import Recommend from '../components/Recommend'
import BottomTab from '../components/BottomTab'
import axios from 'axios'
import {mapState,mapMutations} from 'vuex'
export default {
    components:{
        Banner,Recommend,BottomTab
    },
    computed:{
        ...mapState(['playList','audio'])
    },
    methods:{
        ...mapMutations([
            'SetPlayList',
            'GetPlayList',
            'GetPlaySetting',
            'SetPlaySetting',
        ]),
        RecomendList(){
            axios.get('http://localhost:3000/recomendList').then(({data})=>{
                this.SetPlayList(data.data)
                this.SetPlaySetting(0)
            })
        }
    },
    created(){
        this.GetPlayList();
        this.GetPlaySetting();
    }
}
</script>
<style lang="scss" scoped>
    #tab{
        width: 140px;
        height: 30px;
        background-color:#d33a31;
        text-align: center;
        line-height: 30px;
        border-radius: 20px;
        margin: 10px auto;
        color: white;
        font-size: 13px;
    }
    #listenAll{
        width: 70px;
        height: 20px;
        background-color:#35ca5b;
        color: white;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        border-radius: 10px;
        position: absolute;
        margin-left: 5px;
    }
</style>