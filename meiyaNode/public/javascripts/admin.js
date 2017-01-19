$(function(){
    new Vue({

        el: 'body',

        replace: false,
        
        data: function () {
            return {
                nine_author: '',
                nine_author_link: '',
                nine_avatar: '',
                nine_avatar_pid: '',
                nine_original: '',
                nine_description: '',
                nine_pids: '',
                nine_original_options: [
                    {
                        name: '原创',
                        value: 0
                    }, {
                        name: '转载',
                        value: 1
                    }
                ],
                // 控制显示哪一个视图，取值分别为dataAnalysis、ninepic、ninepicAdd、wildpic、wildpicAdd、petpic、petpicAdd
                view: 'dataAnalysis'
            }
        },

        watch: {
            nine_avatar: function (val) {
                var self = this;
                var file = $('#nine_avatar')[0];
                // 如果上传框里没有数据则返回
                if (!file || !file.files[0]) {
                    return alert('选取文件出错！');
                }
                // 监测上传的文件是不是图片
                if (file.files[0].type.indexOf('image') != 0) {
                    return alert('这不是一个图像呀！');
                }
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://x.mouto.org/wb/x.php?up', 1);

                xhr.onload = function (r) {
                    try {
                        var r = JSON.parse(xhr.responseText);

                        if (r.error) {
                            return error(r.error);
                        }

                        if (r.pid) {
                            self.nine_avatar_pid = r.pid;
                        }
                    } catch(e) {
                        alert('上传图片失败了！');
                    }
                }

                xhr.send(file.files[0]);
            }
        },

        methods: {

            // url格式化。支持数组。
            picUrlParser: function (url, type) {
                type = type || 'large';
                if (url instanceof Array) {
                    for (var i in url) {
                        url[i] = this.picUrlParser(url[i], type);
                    }
                    return url;
                }
                return 'http://ww2.sinaimg.cn/' + type + '/' + url;
            },

            // 导航栏切换view
            changeView: function (view) {
                this.view = view;
            },

            // 登出
            logout: function () {
                $.get('admin/logout', function (res) {
                    console.log('res.msg');
                })
            },

            getPids: function () {
                var result = [];
                $('.filelist li').each(function() {
                    result.push($(this).attr('pid'));
                });
                return result.join(',');
            },

            // 九图提交
            nineSubmit: function () {
                var postData = {
                    pids: this.getPids(),
                    author: this.nine_author,
                    authorLink: this.nine_author_link,
                    description: this.nine_description,
                    avatar: this.nine_avatar_pid,
                    original: this.nine_original
                }

                $.post('/admin/insertNinePic', postData, function (res) {
                    alert('添加成功啦~');
                    window.location.reload();
                })
            }
        },

        ready: function () {
            
        }

    });
})