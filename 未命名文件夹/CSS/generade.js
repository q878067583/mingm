/**
 * Created by mingming on 2017/4/9.
 */

/**
 * 返回随机的颜色
 * @param n
 * @returns {string}
 */
function generadeColor() {
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','x','d','e','f'];
    var res = "#";
    var id ;
    for(var i =0;i<6;i++){
        id = Math.floor(Math.random()*16);
        res += arr[id];
        return res;
    }
}