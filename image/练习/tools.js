/**
 * Created by mingmingyuan on 2017/3/27.
 */


/**
 *
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}