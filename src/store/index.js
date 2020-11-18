import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playList: [], //播放列表
    audio: {
      event: "", //当前的audio元素
      data: "", // 当前播放的音乐的信息
      currentTime: 0, //音频当前播放时间
      duration:0,  //音频总时间
      play: false, //是否播放
    },
    playIndex: "", //当前列表播放顺序
    modeIndex:0
  },
  mutations: {
    //设置播放列表
    SetPlayList(state, list) {
      localStorage.setItem("musiclist", JSON.stringify(list));
      state.playList = list;
    },
    //获取播放列表
    GetPlayList(state) {
      let list = JSON.parse(localStorage.getItem("musiclist") || "[]");
      state.playList = list;
    },
    //设置列表当前的曲目编号
    SetPlaySetting(state, index) {
      localStorage.setItem("playIndex", JSON.stringify(index));
      state.playIndex = index;
    },
    //获取播放的当前编号
    GetPlaySetting(state) {
      state.playIndex = JSON.parse(localStorage.getItem("playIndex"));
      if (state.playIndex === null)
        localStorage.setItem("playIndex", "0");
    },
    //设置当前播放的音乐
    SetAudioMusic(state) {
      if (state.playList.length != 0)
        state.audio.data = state.playList[state.playIndex];
      else{
        state.audio.data = {
          music_url: "",
          pic_address:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3322663439,3793447475&fm=26&gp=0.jpg",
          song: "echo,唱进你心里的歌",
          singer: ""
        };
      }
    },
    //获取当前音乐的audio元素
    SetAudioDom(state, dom) {
      state.audio.event = dom;
    },
    //播放/暂停音乐
    PlayAudio(state,val) {
      state.audio.play =val;
    },
    //获取当前播放时间
    SetCurrentTime(state,data) {
      state.audio.currentTime=data
    },
    //获取当前音乐总时间
    SetDuration(state) {
      state.audio.duration=state.audio.event.duration
    },
    //改变播放模式
    SetModeIndex(state){
      state.modeIndex=(state.modeIndex+1)%3
    }
  },
  actions: {
  
  },
  getters:{
    musicProcess(state){
      if(state.audio.currentTime===0||state.audio.duration===0)
        return 0
      else
        return (state.audio.currentTime/state.audio.duration)*100
    }
  },
  modules: {}
});
