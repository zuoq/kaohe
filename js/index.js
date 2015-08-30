(function(){
    var wrapper = document.querySelector('#list-wrap'),
        loading = document.querySelector('#loading'),
        isLoading = false;
    document.addEventListener('DOMContentLoaded', function(){
        loading.style.display = 'block';
        sendAjax();

        //滑动加载
        window.addEventListener('scroll', function(ev){
            if( isb() && !isLoading ){
                isLoading = true;
                loading.style.display = 'block';
                sendAjax();
            }
        });

        //判断是否到底部
        function isb(){
            var D = document;
            var B = document.body;
            var hh = wrapper.offsetHeight, sh = B.scrollTop, ch = D.documentElement.clientHeight;
            return hh === (sh + ch);
        }
    });


    //ajax
    function ajx(url, params, cb){
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(params && JSON.stringify(params));
        xhr.onload = function(res){
            cb && cb(xhr.responseText);
        }
    }

    function sendAjax() {
        ajx('http://kaohe.zeroling.com/kaohe/list', {}, function(res) {
            var data = JSON.parse(res);
            data['data'].forEach(function(item){
                item['flag'] = item['flag'].split('|');
            });

            var temp = _.template(document.querySelector('#temp').innerHTML)(data);
            wrapper.innerHTML += temp;
            isLoading = false;
            loading.style.display = 'none';
            addGood();
            changeStar();

            function addGood(){
                var len = data['data'].length;
                var aButtomLi= document.querySelectorAll('.buttom>li');
                for(var i=0;i<len;i++) {
                    var good = data['data'][i]['good'];
                    if(good>0) {
                        aButtomLi[i].style.display = "block";
                    }
                }
            }
            
            function changeStar() {
                var num = 0;
                var len = data['data'].length;
                var  aMiddleLi = [];
                var aMiddle = document.querySelectorAll('.middle');
                for( var i=0;i<len;i++) {
                    aMiddleLi.push(aMiddle[i].querySelectorAll('li'));
                    var stars = data['data'][i]['stars'];
                    if(stars%1 == 0) {
                        for(var j=0;j<stars;j++ ) {
                            aMiddleLi[i][j].className = "star";
                        }
                    }
                    if(stars%1 != 0) {
                        var newStarts = Math.floor(stars);
                        for(var j=0;j<newStarts;j++ ) {
                            aMiddleLi[i][j].className = "star";
                            aMiddleLi[i][j+1].className = "half-star";
                        }
                    }
                }
            }
        });
    }

})();