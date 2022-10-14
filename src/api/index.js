// 统一出口
import {recommendMusic,hotMusic } from '@/api/Home'
import {hotSearch ,searchResult} from '@/api/Search'
import {getSongById ,getLyricById} from '@/api/Play'
import {getCommentList} from '@/api/Comment'
export const recommendMusicAPI = recommendMusic // 请求推荐歌单的方法导出
export const hotMusicAPI = hotMusic // 首页 - 最新音乐
export const hotSearchAPI = hotSearch// 搜索 - 热搜关键词
export const searchResultAPI = searchResult// 搜索 = 搜索结果
export const getSongByIdAPI = getSongById// 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById// 歌曲 - 歌词数据
export const getCommentListAPI = getCommentList// 歌曲 - 歌词数据

