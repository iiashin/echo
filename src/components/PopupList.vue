<template>
    <div id="PopupList">
        <mt-popup  v-model="popupVisible"  position="bottom">
            <div>
                <div id="listTop">
                    <!-- 播放模式 -->
                    <div class="mode" v-for="modeList in playMode" :key="modeList.id" :class="{modeQuiet:!(modeList.id===modeIndex)}" @click='ChangeMode(modeList.id)'>
                        <svg class="icon" aria-hidden="true">
                            <use :href="modeList.href"></use>
                        </svg>
                        {{modeList.mode}}
                    </div>
                    <div class="clear" @click="ClearList()">清空</div>
                </div>
                <ul id="musicList">
                    <li v-for="(list,index) in playList" :key="list.id">
                        <div class="musicListPlay" @click="ChangeMusic(index)">
                            <!-- 播放或等待 -->
                            <div class="musicListMode"> 
                                <svg class="icon" aria-hidden="true">
                                    <use :href="index===playIndex?'#icon-music-bofang':'#icon-music-xiaodian'"></use>
                                </svg>
                            </div>
                            <!-- 歌曲信息 -->
                            <div class="musicListMsg" :class="{quiet:!(index===playIndex)}">{{list.song}}
                                <span style="display:inline-block; font-size:10px;margin-left:20px;">{{list.singer}}</span>
                            </div>
                        </div>
                        <!-- 删除 -->
                        <div class="musicListDel" @click="DelMusic(index)">
                            <svg class="icon" aria-hidden="true">
                                <use href="#icon-music-cha"></use>
                            </svg>
                        </div>
                    </li>
                </ul>
                <div class="space"></div>
            </div>
        </mt-popup>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            popupVisible:false,
            IsUse:true,
            playMode:[         //当前播放模式
                {
                    id:0,
                    href:'#icon-music-shunxubofang',
                    mode:'顺序播放'
                },
                {
                    id:1,
                    href:'#icon-music-sort',
                    mode:'循环播放'
                },
                {
                    id:2,
                    href:'#icon-music-suijibofang',
                    mode:'随机播放'
                }
            ]
        }
    },
    computed:{
        ...mapState([
            'musicSheet',
            'playList',
            'playIndex',
            'audio',
            'modeIndex'
        ])
    },
    methods:{
        ...mapMutations([
            'SetPlaySetting',
            'SetAudioMusic',
            'SetModeIndex',
            'SetPlayList',
            'SetCurrentTime'
        ]),
        ChanegVisible(){
            this.popupVisible=!this.popupVisible
        },
        //切换歌曲
        ChangeMusic(index){
            this.SetPlaySetting(index);
        },
        //删除歌曲
        DelMusic(index){
            let list = JSON.parse(localStorage.getItem("musiclist") || "[]");
            if(this.playList[index].id===this.audio.data.id){
                this.SetPlaySetting(index%(this.playList.length-1));
            }
            list.splice(index,1)
            this.SetPlayList(list);
            this.SetAudioMusic();
        },
        //切换播放模式
        ChangeMode(index){
            this.SetModeIndex()
        },
        //清空歌曲
        ClearList(){
            this.SetPlayList('');            
            this.SetPlaySetting('')
        }
    },
    created(){
    },
    mounted(){
        //获取已经播放的时间
        setTimeout(() => {
            if(this.$route.params.time){
                this.audio.event.currentTime=this.$route.params.time
                this.SetCurrentTime(this.audio.event.currentTime)
            }
        }, 100 );
    }
}
</script>
<style lang="scss" scoped>
    #PopupList{
        width: 100%;
        .mint-popup{
            padding: 0 8px;
            padding-top: 5px;
            box-sizing:border-box; 
            width: 100%;
            #listTop{
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding-left: 8px;
            box-sizing:border-box; 
            height: 40px;
            align-items: center;
            font-size: 15px;
            .modeQuiet{
                    display: none;
                }
            .active{
                display: block;
            }
            }
            #musicList{
                padding: 0;
                margin: 0;
                max-height: 155px;
                overflow: auto;
                li{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    padding:15px 0;
                    border-bottom: 0.1px rgb(219, 218, 218) solid;
                    .musicListPlay{
                        width: 70%;
                        display: flex;
                        .musicListMode{
                            width: 15%;
                        }
                        .musicListMsg{
                            width: 75%;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            overflow: hidden; 
                        }
                        .quiet{
                            color: grey;
                        }
                    }
                    .musicListDel{
                        width: 30%;
                        text-align: right;
                    }
                }
            }
            .space{
                height: 47px;
            }
        }
    }
</style>