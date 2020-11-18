
import {request} from '../util/request'

//banner
export function GetBanner(){
    return request('/banner','get')
}
//recommList
export function GetMusicSheet(){
    return request('/sheet','get')
}