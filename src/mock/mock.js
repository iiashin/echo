let Mock=require('mockjs');
Mock.mock('http://localhost:3000/banner','get',{
    data:[
        {
            "id": 0,
            "path": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3371730088,2539272222&fm=26&gp=0.jpg"
        },
        { 
            "id": 1,
            "path": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1551279685,69061427&fm=26&gp=0.jpg"
        },
        {
            "id": 2,
            "path": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4132230659,2762439592&fm=26&gp=0.jpg"
        }
    ]
})
let MusicSheet=[
    {
        'id':0,
        'name':'茫茫人生好像荒野',
        'sheet_author':'阿淮',
        'introduce':'最喜欢医生的就是这首歌了，粤语启蒙歌',
        'pic_address':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1487568470,4280407801&fm=26&gp=0.jpg',
        'song':'单车',
        'singer':'陈奕迅',
        'melody':'柳重言',
        'writer':'黄伟文',
        'lyric':'不要不要假设我知道\n\n一切一切也都是为我而做\n\n为何这么伟大\n\n如此感觉不到\n\n不说一句的爱有多好\n\n只有一次记得实在接触到\n\n骑着单车的我俩\n\n怀紧贴背的拥抱\n\n难离难舍想抱紧些\n\n茫茫人生好象荒野\n\n如孩儿能伏于爸爸的肩膊\n\n谁要下车\n\n难离难舍总有一些\n\n常情如此不可推卸\n\n任世间再冷酷\n\n想起这单车 还有幸福可借\n\n经已给我怎会看不到\n\n虽说演你角色实在有难度\n\n从来虚位以待\n\n何不给个拥抱\n\n想我怎去相信这一套\n\n多痛惜我却不便让我知道\n\n怀念单车给你我\n\n唯一有过的拥抱\n\n难离难舍想抱紧些\n\n茫茫人生好象荒野\n\n如孩儿能伏于爸爸的肩膊\n\n哪怕遥遥长路多斜\n\n你爱我爱多些\n\n让我他朝走得坚壮些\n\n你介意来爱护\n\n又靠谁施舍\n\n难离难舍想抱紧些\n\n茫茫人生好象荒野\n\n如孩儿能伏于爸爸的肩膊\n\n谁要下车\n\n难离难舍总有一些\n\n常情如此不可推卸\n\n任世间怨我坏\n\n可知我只得你 承受我的狂或野',
        'isList':'0',             //是否在列表中
        'music_url':'http://music.163.com/song/media/outer/url?id=64561.mp3'
    },
    {
        'id':1,
        'name':'那年那首歌',
        'sheet_author':'小胖仔',
        'introduce':'从中国好声音开始火起来的歌，那时候还比较小，但很喜欢，也算是第一首接触的关于民谣的歌,没有原唱的版权，但翻唱的挺好听的，北海有墓碑',
        'pic_address':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1862654133,1094309596&fm=26&gp=0.jpg',
        'song':'南山南',
        'singer':'排骨教主',
        'melody':'马頔',
        'writer':'马頔',
        'lyric':'你在南方的艳阳里大雪纷飞\n\n我在北方的寒夜里\n\n四季如春\n\n如果天黑之前来得及\n\n我要忘了你的眼睛\n\n穷极一生\n\n做不完一场梦\n\n他不再和谁谈论相逢的孤岛\n\n因为心里早已荒无人烟\n\n他的心里再装不下一个家\n\n做一个只对自己说谎的哑巴\n\n他说你任何为人称道的美丽\n\n不及他第一次遇见你\n\n时光苟延残喘\n\n无可奈何\n\n如果所有土地连在一起\n\n走上一生\n\n只为拥抱你\n\n喝醉了他的梦\n\n晚安\n\n他听见有人唱着古老的歌\n\n唱着今天还在远方\n\n发生的像在她眼睛里\n\n看到的孤岛\n\n没有悲伤\n\n但也没有花朵\n\n你在南方的艳阳里大雪纷飞\n\n我在北方的寒夜里四季如春\n\n如果天黑之前来得及\n\n我要忘了你的眼睛穷极一生\n\n做不完一场梦\n\n你在南方的艳阳里大雪纷飞\n\n我在北方的寒夜里四季如春\n\n如果天黑之前来得及\n\n我要忘了你的眼睛穷极一生\n\n做不完一场梦\n\n大梦初醒/荒唐了一生\n\n南山南\n\n北秋悲\n\n南山有谷堆南风喃\n\n北海北北海有墓碑\n\n南山南\n\n北秋悲\n\n南山有谷堆南风喃\n\n北海北北海有墓碑\n\n北海有墓碑',
        'isList':'0',
        'music_url':'http://music.163.com/song/media/outer/url?id=446944022.mp3'
    },
    {
        'id':2,
        'name':'we fight together',
        'sheet_author':'金块大大',
        'introduce':'我的船上没有手下，只有伙伴！来杯宾克斯的美酒吧',
        'pic_address':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2523061516,1654089385&fm=26&gp=0.jpg',
        'song':'宾克斯的美酒',
        'singer':'田中真弓/中井和哉/岡村明美/山口勝平/平田広明/大谷育江/ 山口由里子/矢尾一樹/长岛雄一',
        'melody':'田中公平',
        'writer':'尾田荣一郎',
        'lyric':'ヨホホホヨホホホ\n\nヨホホホヨホホホ\n\nヨホホホヨホホホ\n\nヨホホホヨホホホ\n\nビンクスの酒を届けにゆくよ海風気まかせ波まかせ\n\n潮の向こうで夕日も騒ぐ\n\n空にゃ輪をかく鳥の唄\n\nさよなら港つむぎの里よ\n\nドンと一丁唄お船出の唄\n\n金波銀波もしぶきにかえて\n\nおれ達ゃゆくぞ海の限り\n\nビンクスの酒を届けにゆくよ\n\n我ら海賊海割ってく\n\n波を枕に寝ぐらは船よ\n\n帆に旗に蹴立てるはドクロ\n\n嵐がきたぞ千里の空に\n\n波がおどるよドラムならせ\n\nおくびょう風に吹かれりゃ最後\n\n明日の朝日がないじゃなし\n\nヨホホホヨホホホ\n\nヨホホホヨホホホ\n\nヨホホホヨホホホ\n\nヨホホホヨホホホ\n\nビンクスの酒を届けにゆくよ\n\n今日か明日かと宵の夢\n\n手をふる影にもう会えないよ\n\n何をくよくよ明日も月夜\n\nビンクスの酒を届けにゆくよ\n\nドンと一丁唄お海の唄\n\nどうせ誰でもいつかはホネよ\n\n果てなしあてなし笑い話\n\nヨホホホヨホホホ\n\nヨホホホヨホホホ\n\nヨホホホヨホホホ\n\nヨホホホヨホホホ',
        'isList':'0',
        'music_url':'http://music.163.com/song/media/outer/url?id=4938709.mp3'
    },
    {
        'id':3,
        'name':'我们都是异乡人',
        'sheet_author':'秋裤男神',
        'introduce':'李健的声音永远那么温暖',
        'pic_address':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603814488343&di=2780c987179537e1612485b706a2a991&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180922%2F88b0aeb1373444d4881845039edd9528.png',
        'song':'异乡人',
        'singer':'李健',
        'melody':'李健',
        'writer':'李健',
        'lyric':'披星戴月地奔波\n\n只为一扇窗\n\n当你迷失在路上\n\n能够看见那灯光\n\n不知不觉把他乡\n\n当作了故乡\n\n只是偶尔难过时\n\n不经意遥望远方\n\n曾经的乡音\n\n悄悄地隐藏\n\n说不出的诺言\n\n一直放心上\n\n有许多时候\n\n眼泪就要流\n\n那扇窗是让我坚强的理由\n\n小小的门口\n\n还有她的温柔\n\n给我温暖\n\n陪伴我左右\n\n近在眼前的繁华\n\n多少人着迷\n\n当你走近才发现\n\n远过故乡的距离\n\n不知不觉把他乡\n\n当作了故乡\n\n故乡却已成他乡\n\n偶尔你才敢回望\n\n曾经的坎坷\n\n现在不用讲\n\n异乡的人有着相同的惆怅\n\n有许多时候\n\n眼泪就要流\n\n那扇窗是让我坚强的理由\n\n小小的门口\n\n还有她的温柔\n\n陪伴我左右\n\n有许多时候\n\n眼泪就要流\n\n那扇窗是让我坚强的理由\n\n就在这时候\n\n眼泪已经流\n\n那扇窗依然明亮\n\n为我守候\n\n看过了多少海市蜃楼\n\n让我回到\n\n小小的门口\n\n给我温暖\n\n陪伴我左右\n\n给我温暖\n\n陪伴我左右',
        'isList':'0',
        'music_url':'http://music.163.com/song/media/outer/url?id=463262368.mp3'
    },
    {
        'id':4,
        'name':'加入五月天永远都不会太晚',
        'sheet_author':'五迷老师',
        'introduce':'希望有一天能去看演唱会',
        'pic_address':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603814581251&di=836cc0b5c1935f2c050bcb117921cbe8&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170528%2F42bf8360ba1f4b91944f2b67bf429194_th.png',
        'song':'温柔',
        'melody':'阿信',
        'writer':'阿信',
        'singer':'五月天',
        'lyric':'走在风中今天阳光\n\n突然好温柔\n\n天的温柔\n\n地的温柔\n\n像你抱着我\n\n然后发现你的改变\n\n孤单的今后\n\n如果冷\n\n该怎么度过\n\n天边风光身边的我\n\n都不在你眼中\n\n你的眼中藏着什么\n\n我从来都不懂\n\n没有关系你的世界\n\n就让你拥有\n\n不打扰\n\n是我的温柔\n\n不知道不明了不想要\n\n为什么我的心\n\n明明是想靠近\n\n却孤单的黎明\n\n不知道不明了不想要\n\n为什么我的心\n\n那爱情的绮丽\n\n总是在孤单里\n\n再把我的最好的爱给你\n\n不知不觉不情不愿\n\n又到巷子口\n\n我没有哭也没有笑\n\n因为这是梦\n\n没有预兆没有理由\n\n你真的有说过\n\n如果有\n\n就让你自由\n\n不知道不明了不想要\n\n为什么我的心\n\n明明是想靠近\n\n却孤单的黎明\n\n不知道不明了不想要\n\n为什么我的心\n\n那爱情的绮丽\n\n总是在孤单里\n\n再把我的最好的爱给你\n\n不知不觉不情不愿\n\n又到巷子口\n\n我没有哭也没有笑\n\n因为这是梦\n\n没有预兆没有理由\n\n你真的有说过\n\n如果有\n\n就让你自由\n\n自由\n\n这是我的温柔\n\n这是我的温柔\n\n这是我的温柔\n\n这是我的温柔\n\n让你自由',
        'isList':'0',
        'music_url':'http://music.163.com/song/media/outer/url?id=386538.mp3'
    }
]
Mock.mock('http://localhost:3000/sheet','get',{
    'data':MusicSheet
})
Mock.mock('http://localhost:3000/recomendList',function(){
    return {'data':MusicSheet.slice(0,5)}
})