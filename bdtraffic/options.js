$(function(){
    chrome.storage.sync.get({
        maptype: 'bd'
    }, function(items) {
        $('#' + items.maptype).attr('checked', 'checked');
    });
    $('#save').click(function(){
        $('#save').html('保存中...')
        chrome.storage.sync.set({
            maptype: $("input[name='maptype']:checked").val()
        }, function () {
            $('#save').html('保存成功!');
            setInterval(function(){
                $('#save').html('保存');
            }, 1000)
        })
    })
    $('#cancel').click(function(){
        window.close();
    })
})