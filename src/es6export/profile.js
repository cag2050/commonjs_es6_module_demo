/**
 * Created by cag on 8/24/17.
 */
// export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
// 写法1：
/*
export let firstName = 'jeff'
export let lastName = 'chen'
export let year = '2050'
*/

// 写法2：使用大括号指定所要输出的一组变量，优先使用这种写法；写在脚本尾部，能清楚看到输出了哪些变量
// /*
let firstName = 'jeff'
let lastName = 'chen'
let year = '2050'

export { firstName, lastName, year }
// */

// 输出函数
function multiply(x, y) {
    return x * y
}

export { multiply }
// as 关键字重命名
export { multiply as multi}

// 三种正确写法：
// 写法一
export let x = 1;

// 写法二
let y = 2;
export { y };

// 写法三
let z = 3;
export { z as zAlias };




