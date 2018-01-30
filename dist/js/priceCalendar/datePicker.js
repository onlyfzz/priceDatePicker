(function($) {
    function datePicker(em, config) {
        this.config = {
            showHoliday: true,
            showVacation: true,
            monthNum: 7,
            vacation: ['2017-01-01', '2017-01-02', '2017-01-27', '2017-01-28', '2017-01-29', '2017-01-30', '2017-1-31', '2017-02-01', '2017-02-02', '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-29', '2017-04-30', '2017-05-01', '2017-05-28', '2017-05-29', '2017-05-30', '2017-10-01', '2017-10-02', '2017-10-03', '2017-10-04', '2017-10-05', '2017-10-06', '2017-10-07', '2017-10-08', '2017-12-30', '2017-12-31', '2018-01-01', '2018-02-15', '2018-02-16', '2018-02-17', '2018-02-18', '2018-02-19', '2018-02-20', '2018-02-21'],
            holiday: [{ '2017-01-01': '元旦' }, { '2017-01-20': '小年' }, { '2017-01-27': '除夕' }, { '2017-01-28': '春节' }, { '2017-02-11': '元宵' }, { '2017-03-08': '妇女节' }, { '2017-04-02': '清明' }, { '2017-05-01': '劳动节' }, { '2017-05-14': '母亲节' }, { '2017-05-30': '端午' }, { '2017-07-01': '建党节' }, { '2017-08-01': '建军节' }, { '2017-09-10': '教师节' }, { '2017-10-01': '国庆节' }, { '2018-01-01': '元旦' }, { '2018-02-08': '小年' }, { '2018-02-15': '除夕' }, { '2018-02-16': '春节' }],
            showToday: true
        }
        this.config = $.extend(this.config, config);
        this.wrapper = $(em);
        this.init();
    }

    datePicker.prototype.getMonthData = function(year, month) {
        var ret = [];

        if (!year || !month) {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }

        // 获取第一天的星期数 
        var firstDay = new Date(year, month - 1, 1);
        var firstWeekDay = firstDay.getDay();
        if (firstWeekDay === 0) {
            firstWeekDay = 7;
        }

        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;

        // 获取上一个月的最后一天
        var lastDayOfLastMonth = new Date(year, month - 1, 0);
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        // 上一个月剩余的天数
        var preMonthDayCount = firstWeekDay - 1;

        // 获取这个月的最后一天
        var lastDay = new Date(year, month, 0);
        var lastDate = lastDay.getDate();

        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            if (date <= 0) {
                // 上一月
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                // 下一月
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }
            if (thisMonth === 0) {
                thisMonth = 12;
            }
            if (thisMonth === 13) {
                thisMonth = 1;
            }
            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            });
        }
        return {
            year: year,
            month: month,
            days: ret
        };
    };

    datePicker.prototype.buildUi = function(year, month) {
        var monthData = this.getMonthData(year, month);
        console.log(monthData)

        var html = '<div class="datepicker">' +
            '<div class="picker-header clearfix">' +
            '<span class="current-month">' +
            monthData.year + '年' + monthData.month + '月</span>' +
            '</div>' +
            '<div class="picker-body">' +
            '<div>' +
            '<ul>';
        for (var i = 0; i < monthData.days.length; i++) {
            var element = monthData.days[i];
            if (i % 7 === 0) {
                // html += '<tr>';
            }
            var month = element.month,
                date = element.showDate;
            if (month < 10) {
                month = '0' + month;
            }
            if (date < 10) {
                date = '0' + date;
            }
            if (monthData.year == new Date().getFullYear() && element.month == monthData.month && (new Date().getDate() > element.showDate) && (new Date().getMonth() + 1 == monthData.month)) {
                html += '<li class="noPick" data-date="' + monthData.year + '-' + month + '-' + date + '">' +
                    '<em>' + element.showDate + '</em><i></i></li>';
            } else if (monthData.month == 1) {
                if (element.month == 2) {
                    break;
                } else if (element.month == 12) {
                    html += '<li class="noPick" data-date="' + monthData.year + '-' + month + '-' + date + '"></li>';
                } else {
                    html += '<li data-date="' + monthData.year + '-' + month + '-' + date + '">' +
                        '<em>' + element.showDate + '</em><i></i></li>';
                }
            } else {
                if (element.month > monthData.month) {
                    break;
                } else if (element.month < monthData.month) {
                    html += '<li class="noPick" data-date="' + monthData.year + '-' + month + '-' + date + '"></li>';
                } else {
                    html += '<li data-date="' + monthData.year + '-' + month + '-' + date + '">' +
                        '<em>' + element.showDate + '</em><i></i></li>';
                }
            }
        }

        html += '</ul>' +
            '</div>' +
            '</div>' +
            '</div>'
        return html;
    };

    datePicker.prototype.bindEvent = function() {
        $('.datePicker-wrapper').on('click', '.close', function() {
            $('.datePicker-wrapper').hide();
        })
    }

    datePicker.prototype.init = function() {
        var html = '';
        var month = new Date().getMonth();
        for (var index = 0; index < this.config.monthNum; index++) {
            var year = new Date().getFullYear();
            month++;
            html += this.buildUi(year, month);
        }
        var wraperHtml = '<div class="datePicker-wrapper">' +
            '<div class="week-top"><div class="close">返回</div><div>选择日期</div></div>' +
            '<ul class="week-header"><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li><li>日</li></ul>' +
            '</div>';
        var wrapper = $(wraperHtml);
        wrapper.append(html);
        this.wrapper.append(wrapper);

        var tds = $('.datePicker-wrapper').find('li:not(.noPick)');
        var today = new Date();
        var tMonth = today.getMonth() + 1;
        tMonth >= 10 ? tMonth = tMonth : tMonth = '0' + tMonth;
        var tDate = today.getDate();
        tDate >= 10 ? tDate = tDate : tDate = '0' + tDate;
        var todayDate = today.getFullYear() + '-' + tMonth + '-' + tDate;

        var _this = this;
        tds.each(function() {
            var that = $(this);
            if (_this.config.showVacation) {
                _this.config.vacation.forEach(function(e) {
                    // console.log(that.data('date'))
                    if (e == that.data('date')) {
                        that.append('<span class="vacation">休</span>');
                    }
                })
            }

            if (_this.config.showHoliday) {
                _this.config.holiday.forEach(function(e) {
                    for (var k in e) {
                        if (k == that.data('date')) {
                            that.find('em').html(e[k])
                        }
                    }
                })
            }

            if (_this.config.showToday) {
                if (that.data('date') == todayDate) {
                    that.find('em').html('今天');
                    that.addClass('today');
                }
            }
        });

        this.bindEvent();
    }

    $.fn.extend({
        datePicker: function(config) {
            return new datePicker(this, config);
        }
    })
})(jQuery);