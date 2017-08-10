# 适用于移动端的价格日历
# 使用方法
```
$('.test').cityList({
        hotCity: ['长沙', '株洲'],
        location: '长沙',
        showLetter: true,
        callBack: function(a, b) {
            alert(a)
            alert(b)
        }
    })
```
# api
1. hotCity: 热门城市
2. location: 所在城市
3. showLetter: 点击和滑动时显示首字母
4. callBack: 参数1：选择的城市的名称。 参数2：选择的城市的机场三字码.
![cityList](https://github.com/onlyfzz/sell/raw/master/cityList.png)
