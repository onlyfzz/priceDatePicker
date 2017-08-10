# 适用于移动端的价格日历
1. 因为考虑到可能需要扩展，所以很多事件没有绑定
2. 点击日期回调并没有配置，可以自己扩展，今天之前的日期的class为'noPick'
3. 可以在ajax调取价格数据之后填充进日历，在li下面留有i标签可写入价格
# 使用方法
```
$('.test').datePicker({
    vacation：['2017-01-01'],       // 需要自己配置，默认配置的是2017年
    holiday: [{ '2017-01-01': '元旦' }, { '2017-01-20': '小年' }], // 需要自己配置，默认配置的是2017年
    showHoliday: true,  // 显示节日
    showVacation: true, // 显示假期
    monthNum: 7         // 显示多少个月
});
$('.start').click(function() {
    $('.datePicker-wrapper').show();
})
```
# api
1. vacation：['2017-01-01'],       // 需要自己配置，默认配置的是2017年
2. holiday: [{ '2017-01-01': '元旦' }, { '2017-01-20': '小年' }], // 需要自己配置，默认配置的是2017年
3. showHoliday: true,  // 显示节日
4. showVacation: true, // 显示假期
5. monthNum: 7         // 显示多少个月

![cityList](https://github.com/onlyfzz/sell/raw/master/price.png)
