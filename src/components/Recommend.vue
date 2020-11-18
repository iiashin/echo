<template>
    <div id="recommend">
        <div id="RecomList">
            <ul>
                <li v-for="list in musicSheet" :key="list.id">
                    <router-link :to="{name:'Detail',params:{data:list,time:audio.currentTime}}">
                        <img :src="list.pic_address" alt="">
                        <div class="sheetName">{{list.name}}</div>
                    </router-link>    
                    <div class="writeName">
                        <a href="">{{list.sheet_author}}</a>    
                    </div>    
                </li>
            </ul>
        </div>
        <div style="height:47px"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import {GetMusicSheet} from '../api/index'
export default {
    data(){
        return{
            musicSheet:[]
        }
    },
    computed:{
        ...mapState(['audio'])
    },
    methods:{
        ShowMusicSheet(){
            GetMusicSheet().then((res)=>{
                this.musicSheet=res.data
            })
        }
    },
    created(){
        this.ShowMusicSheet()
        console.log(this.ShowMusicSheet());
    }
}
</script>
<style lang="scss" scoped>
#recommend{
    #RecomList{
        ul{
            margin: 0;
            padding: 2px;
            overflow:hidden;
        }
        li{
            list-style: none;
            width: 50%; 
            box-sizing:border-box;  //设置padding时不会扩展原来的长度
            float: left;
            padding: 0 8px;
        }
        img{
            width: 100%;
            height: 160px;
        }
        a{
            text-decoration: none;
        }
        .sheetName{
            color: black;
            white-space: nowrap;   //规定此段落中文本不换行
            text-overflow: ellipsis;   //隐藏部分用省略号代替
            overflow: hidden;       //溢出部分隐藏
        }
        .writeName a{
            color: gray;
            font-size: 12px;
        }
    }
}
</style>