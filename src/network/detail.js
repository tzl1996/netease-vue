import { request } from './request'
import { formatDate } from 'utils/tool'
/* 获取歌曲榜单信息 */
export function reqGetMusicListDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id: id
    }
  })
}
/**歌曲评论 */
export function reqMusicRecommend(id,limit,offset){
  return request({
      url:'/comment/music',
      params:{
          id:id,
          limit:limit,
          offset
      }
  })
}
/**获取歌单歌曲信息 */
export function reqGetSongsDetail(arr) {
  return request({
    url: '/song/detail',
    params: {
      ids: arr
    }
  })
}
/* 获取歌曲url */
export const reqGetMusicUrl = (id) => request({
  url: '/song/url',
  params: {
    id: id
  }
});
/**获取歌词 */
export function reqGetLyric(id){
  return request ({
      url:'/lyric',
      params:{
          id:id
      }
  })
}
/**获取歌单收藏者 */
export function reqGetSub(id, limit) {
  return request({
    url: '/playlist/subscribers',
    params: {
      id: id,
      limit
    }
  })
}

/**歌单评论信息 */
export function reqGetRecommends(id, limit, offset) {
  return request({
    url: '/comment/playlist',
    params: {
      id: id,
      limit: limit,
      offset
    }
  })
}

/**对歌曲数据进行封装 */
export class songDetail {
  constructor(songs) {
    this.id = songs[0].id;
    this.name = songs[0].name;
    this.album = songs[0].al.name;
    this.artist = songs[0].ar[0].name;
    this.pic = songs[0].al.picUrl;
    this.time = formatDate(new Date(songs[0].dt), 'mm:ss')
  }
}
// export class Song{
//   constructor(index,song,url='',id) {
//     this.index=index;
//     this.name=song.name;
//     this.artist=song.artist;
//     this.src=url;
//     this.pic=song.pic||song.picUrl;
//     this.id=id;
//   }
// }
/**歌单基础信息 */
export class baseInfo {
  constructor(playlist) {
    this.img = playlist.coverImgUrl || '';
    this.title = playlist.description;
    this.name = playlist.name;
    this.shareCount = playlist.shareCount;
    this.subscribedCount = playlist.subscribedCount;
    this.playCount = playlist.playCount;
    this.trackCount = playlist.trackCount;
    this.tags = playlist.tags;
    this.createTime = playlist.createTime;
    this.creatorAvatar = playlist.creator.avatarUrl;
    this.creatorName = playlist.creator.nickname;
  }
}