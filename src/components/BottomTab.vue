<template>
<div id="audioPlay" v-if="ListBtn">
    <div id="bottomTab">
        <audio id="myAudio" @timeupdate="GetTime" @canplay="GetDuration"> 
            <source :src='audio_data.music_url' type="audio/mpeg">
        </audio>
        <div id="progressTip" @click="ChoseTime">
          <mt-progress :value="musicProcess"></mt-progress>
        </div>
        <div id="musicDone">
            <div class="tabContent imgContent">
                <img :src='audio_data.pic_address' alt="">
            </div>
            <!-- 歌名+歌手 -->
            <div class="tabContent tabIntroduce">
                <div>{{audio_data.song}}</div>
                <div class="singer">{{audio_data.singer}}</div>
            </div>
            <!-- 按钮 -->
            <div class="tabContent tabButton">
                <div @click="changeUp">
                    <svg class="icon" aria-hidden="true">
                        <use href="#icon-music-bofangliebiao"></use>
                    </svg>
                </div>
                <div :id="audio_play?'StopBtn':'PlayBtn'" @click="PlayAudio(!audio_play)">
                    <svg class="icon" aria-hidden="true">
                        <use :href="audio_play?'#icon-music-zanting1':'#icon-music-bofang'"></use>
                    </svg>
                </div>
                <div @click="NextAudio()">
                    <svg class="icon" aria-hidden="true">
                        <use href="#icon-music-skip__easyico"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <Popup-list ref="UpList" ></Popup-list>
</div>
    
</template>

<script>
import PopupList from './PopupList'
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
    data(){
        return{
            ListBtn:'1',  //有值就为true
        }
    },
    components:{
        PopupList
    },
    computed:{
        ...mapState({
            playList:state=>state.playList,
            playIndex:state=>state.playIndex,
            audio_event:state=>state.audio.event,
            audio_data:state=>state.audio.data,
            audio_play:state=>state.audio.play,
            modeIndex:state=>state.modeIndex
        }),
        ...mapGetters(['musicProcess'])
    },
    filters:{
        
    },
    watch:{
        //监听当前播放音乐是否变化
        playIndex:{
            immediate:true,
            deep:true,
            handler:function(newVal,oldVal){
                if(newVal||newVal===0||newVal===''){
                    this.$nextTick(()=>{
                        this.SetAudioMusic();    //更改播放数据
                    })
                }
            }
        },
        //监听播放数据是否变化
        audio_data:{
            immediate: true,
            deep:true,
            handler:function(newVal,oldVal){
                if(newVal){
                    this.$nextTick(()=>{
                        let aduio=document.getElementById('myAudio');
                        this.SetAudioDom(aduio)       //重新获取dom元素
                        this.audio_event.load(); 
                        if(this.audio_play){
                            setTimeout(() => {
                                this.audio_event.play()
                            }, 100 );
                        }
                    })
                }
            }
        },
        //监听是否播放
        audio_play(val){
            val?this.audio_event.play():this.audio_event.pause()
        }
    },
    methods:{
        ...mapMutations([
            'PlayAudio',
            'SetCurrentTime',
            'SetPlaySetting',
            'SetAudioMusic',
            'SetDuration',
            'SetAudioDom'
            ]),
        //播放列表的显示与隐藏
        changeUp(){
            this.$refs.UpList.ChanegVisible()
        },
        PlayMusic(){
            this.PlayAudio();
        },
        StopMusic(){
            this.StopAudio()
        },
        GetDuration(){
            this.SetDuration()
        },
        //获取时间和播放模式
        GetTime(event){
            this.SetCurrentTime(this.audio_event.currentTime)
            if(this.musicProcess===100){           
                if(this.modeIndex===0)
                    this.SetPlaySetting((this.playIndex+1)%this.playList.length);
                else if(this.modeIndex===1){
                    this.SetPlaySetting(this.playIndex);
                    this.audio_event.load();
                    this.audio_event.play()
                }
                else{                   
                    var index=parseInt((this.playList.length-1)*Math.random());
                    while(index===this.playIndex){
                        index=parseInt((this.playList.length-1)*Math.random());
                    }
                    this.SetPlaySetting(index);
                }                   
            }
        },
        //拖动进度条
        ChoseTime(event){
            let t=document.querySelector('#progressTip');
            let aduioPro=(event.clientX/t.offsetWidth)*100;
            let aduioMusic=aduioPro*this.audio_event.duration/100
            this.SetCurrentTime(aduioMusic)
            this.audio_event.currentTime=aduioMusic     
        },
        //下一首歌
        NextAudio(){
            this.SetPlaySetting((this.playIndex+1)%this.playList.length)
        }
    }
}
</script>

<style lang="scss" scoped>
    #bottomTab{
        position: fixed;
        bottom: 0;
        z-index: 2020;
        padding: 0;
        background-color: white;
        height: 47px;
        width: 100%;
        border-top: 0.1px rgb(219, 218, 218) solid;
        .mt-progress{
            height: 2px;
            top: 0;
        }
        #musicDone{
            height: 45px;
            width: 100%;
            padding:0px 5px;
            box-sizing:border-box;  //设置padding时不会扩展原来的长度
            .imgContent{
                width: 14%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .tabContent{
                float: left;
                height: 100%;
            }
            .tabIntroduce{
                width: 40%;
                position: relative;
                font-size: 13px;
                .singer{
                    position: absolute;    //子div位于底部
                    bottom: 0;
                    color: grey;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 100%;
                }
            }
            .tabButton{
                display: flex;   //使子div水平排列
                justify-content:space-between ;
                align-items: center; 
                width: 46%;
                div{
                    border-radius: 50%;
                    background-color: white;
                    border: 1px black solid;
                    height: 35px;
                    width: 35px;
                    text-align: center;
                    line-height: 35px;
                }
                #PlayBtn{
                    background-color: red;
                }
                #StopBtn{
                    background-color:#35ca5b;
                }
            }
        }       
    }
</style>
