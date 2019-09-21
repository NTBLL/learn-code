/**
 * 根据标签ID获取标签对象
 * @param id
 * @returns {HTMLElement}
 */
function my$(id) {
    return document.getElementById(id);
}

/**
 * 为标签设置内容，解决innerText,textContent兼容性问题
 * @param obj
 * @param content
 */
function setTextContent(obj, content) {
    if (typeof obj.textContent == "undefined") {
        obj.innerText = content;
    } else {
        obj.textContent = content;
    }
}

/**
 * 获取标签内容
 * @param obj
 * @returns {*}
 */
function getTextContent(obj) {
    if (obj.innerText) {
        return obj.innerText;
    } else {
        return obj.textContent;
    }
}

/**
 * 获取父元素的第一个子元素
 * @param parentElement
 * @returns {*}
 */
function getFirstElementChild(parentElement) {
    if (parentElement.firstElementChild) {
        return parentElement.firstElementChild;
    } else {
        var node = parentElement.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 * 为同一元素绑定多个相同事件的兼容性代码
 * @param element
 * @param type
 * @param fn
 */
function myAddEventListener(element, type, fn) {
    if (element.attcheEvent) {
        element.attacheEvent("on" + type, fn);
    } else if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else {
        element["on" + type] = fn;
    }
}

/**
 * 获取浏览器的卷出内容的距离
 * @returns {{top: number, left: number}}
 */
function getScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop ||
            document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft ||
            document.body.scrollLeft || 0
    };
}


function getElementStyle(element, attr) {
    //  IE8 || 谷歌 火狐
    return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr];
}

//封装动画函数之添加透明度和层叠属性
function animate(element, attrs, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //用于判断是否所有的属性到达目标
        var flag = true;
        for (var attr in attrs) {
            if (attr == "zIndex") {
                element.style[attr] = attrs[attr];
            } else if (attr == "opacity") {
                var current = getElementStyle(element, attr) * 100;
                var target = attrs[attr] * 100;
                var step = Math.ceil(Math.abs(current - target) / 10);
                step = current - target < 0 ? step : -step;
                element.style[attr] = (current + step) / 100;

            } else {
                var current = parseInt(getElementStyle(element, attr));
                var target = attrs[attr];
                var step = Math.ceil(Math.abs(current - target) / 10);
                step = current - target < 0 ? step : -step;
                element.style[attr] = current + step + "px";

            }
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeId);
            if (fn) {
                fn();
            }
        }
    }, 20);
}