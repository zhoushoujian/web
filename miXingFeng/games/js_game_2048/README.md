# js实现2048小游戏 🎮

演示地址：[https://nnngu.github.io/js_game_2048/index.html](https://nnngu.github.io/js_game_2048/index.html)

## 1、游戏简介

2048是一款休闲益智类的数字叠加小游戏。

## 2、游戏玩法

在 4*4 的16宫格中，您可以选择上、下、左、右四个方向进行操作，数字会按方向移动，相邻的两个数字相同就会合并，组成更大的数字，每次移动或合并后会自动增加一个数字。

当16宫格中没有空格子，且四个方向都无法操作时，游戏结束。 

## 3、游戏目的

目的是合并出 2048 这个数字，获得更高的分数。

## 4、游戏截图

![](https://raw.githubusercontent.com/nnngu/FigureBed/master/2018/2/9/Snip20180210_7.png)

## 5、游戏实现原理

### (1)首先，把16宫格看成是矩阵的形式

![](https://raw.githubusercontent.com/nnngu/FigureBed/master/2018/2/9/Snip20180209_2.png)

### (2)在html中给每个格子添加类名及属性，来记录每个格子的位置

![](https://raw.githubusercontent.com/nnngu/FigureBed/master/2018/2/9/Snip20180209_4.png)

注：类名`item`是每个格子的类名，`emptyItem`是空格子的类名，`nonEmptyItem`是非空格子的类名。

### (3)游戏开始时，随机生成两个数字，2或者4，出现在矩阵中任意位置
   
![](https://raw.githubusercontent.com/nnngu/FigureBed/master/2018/2/9/Snip20180209_5.png)

这部分是通过类名`emptyItem`及`nonEmptyItem`来实现的。

步骤：

① 随机生成一个数字2或者4

② 获取所有空元素（类名`emptyItem`）

③ 随机选择一个空元素，将生成的数字填充到空元素中，并将类名`emptyItem`移除，添加类名`nonEmptyItem`，即非空元素

④ 重复①、②、③步，再随机生成一个数字填充到随机的位置。

### (4)游戏的核心在于移动

移动有四个方向：上、下、左、右。实现思路如下：

```
如果触发向左移动
　　遍历所有非空元素
　　　　如果当前元素在第一个位置
           不动
　　　　如果当前元素不在第一个位置
　　　　　　如果当前元素左侧是空元素    
              向左移动
　　　　　　如果当前元素左侧是非空元素    
　　　　　　　　如果左侧元素和当前元素的内容不同    
                  不动
　　　　　　　　如果左侧元素和当前元素的内容相同    
                  向左合并
 

如果触发向右移动
　　遍历所有非空元素
　　　　如果当前元素在最后一个位置     
           不动
　　　　如果当前元素不在最后一个位置
　　　　　　如果当前元素右侧是空元素   
              向右移动
　　　　　　如果当前元素右侧是非空元素    
　　　　　　　　如果右侧元素和当前元素的内容不同    
                  不动
　　　　　　　　如果右侧元素和当前元素的内容相同    
                  向右合并

```

向上移动 和 向下移动的思路同上。

### (5)判断游戏是否结束

```
获取所有元素
获取所有非空元素
如果所有元素的个数 == 所有非空元素的个数
　　循环遍历所有非空元素
　　　　上面元素存在 && (当前元素的内容 == 上面元素的内容)   return
　　　　下面元素存在 && (当前元素的内容 == 下面元素的内容)   return
　　　　左边元素存在 && (当前元素的内容 == 左边元素的内容)   return
　　　　右边元素存在 && (当前元素的内容 == 右边元素的内容)   return
 　 以上条件都不满足，Game Over! 
```

源代码：[https://github.com/nnngu/js_game_2048](https://github.com/nnngu/js_game_2048)

演示地址：[https://nnngu.github.io/js_game_2048/index.html](https://nnngu.github.io/js_game_2048/index.html)

