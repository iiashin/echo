<template>
    <div id="detail">
        <mt-header fixed :title="MusicData.name" class="myHeader">
            <router-link :to="{name:'Discover',params:{time:audio.currentTime}}" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div id="detailTop">
            <div id="detailIntrduce">
                <img :src="MusicData.pic_address" alt="">
                <div class="musicMsg">
                    <div class="name">{{MusicData.name}}</div>
                    <div class="author">{{MusicData.sheet_author}}</div>
                    <div class="introduce">{{MusicData.introduce}}</div>
                </div>
            </div>
            <div id="detailDone">
                <div>
                    <svg class="icon myIcon" aria-hidden="true">
                        <use href="#icon-music-pinglun1"></use>
                    </svg>
                </div>
                <div>
                    <svg class="icon myIcon" aria-hidden="true">
                        <use href="#icon-music-fenxiang1"></use>
                    </svg>
                </div>
                <div>
                    <svg class="icon myIcon" aria-hidden="true">
                        <use href="#icon-music-xiazai"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div id="detailMid">
            <div style="font-weight:bold;">{{MusicData.song}}</div>
            <div>词:{{MusicData.writer}}</div>
            <div>曲:{{MusicData.melody}}</div>
            <div>演唱:{{MusicData.singer}}</div>
            <div style="white-space:pre-wrap">{{MusicData.lyric}}</div>
        </div>
        <div style="height:47px"></div>
        <Bottom-tab></Bottom-tab>
    </div>
</template>
<script>
import BottomTab from '../components/BottomTab'
import {mapState,mapMutations} from 'vuex'
export default {
    components:{
        BottomTab
    },
    computed:{
        ...mapState(['audio'])
    },
    data() {
        return {
            MusicData:this.$route.params.data,
            time:this.$route.params.time
        }
    },
    methods:{
        ...mapMutations([
            'SetCurrentTime'
        ]),
    },
    mounted(){
        setTimeout(() => {
            this.audio.event.currentTime=this.time
            this.SetCurrentTime(this.audio.event.currentTime)
        }, 100 );
    }
}
</script>
<style lang="scss">
    #detail{
        .mint-header{
            background-image: linear-gradient(to right,  #a4a4a4 , #878183);
            h1{
                line-height: 20px;
            }
        }
        #detailTop{
            margin-top:40px;
            background-image: linear-gradient(to right,  #a4a4a4 , #878183);
            padding: 15px;
            #detailIntrduce{
                display: flex;
                height: 20%;
                width: 100%;
                img{
                    width: 30%;
                    height: 100px;
                }
                .musicMsg{
                    height: 100px;
                    display: flex;
                    flex-direction:column;
                    justify-content: space-between;
                    color: white;
                    padding-left: 15px;
                    .name{
                        font-size: 15px;
                    }
                    .author{
                        font-size: 10px;
                    }
                    .introduce{
                        font-size: 8px;
                        color: #dbcfd3;
                    }
                }
            }
            #detailDone{
                display: flex;
                justify-content: space-between;
                padding: 5px 25px 0 25px;
                .myIcon{
                    width: 1.3em;
                }
            }
        }
        #detailMid{
            padding:10px;
            text-align: center;
            div{
                margin-bottom: 12px;
            }
        }
    }
</style>