var http = require('http'),
	url = require('url');


var server = http.createServer(function(req, res){
	var iurl = url.parse(req.url), pn = iurl.pathname;
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader('Access-Control-Allow-Headers:', "*");
    res.setHeader("Content-Type", "application/json");

    console.log();

	if(req.method.toUpperCase() != 'POST'){
		res.end(JSON.stringify({error: "使用POST"}));
		return 0;
	} 

	handle(pn, res);
});

function handle(pn, res){
    var resp;

	if(pn == '/state'){
		resp = JSON.stringify({state: Math.round(Math.random() * 5)});
	}else if(pn == '/list'){
		resp = JSON.stringify([
			{
    			"title": "新白鹿餐厅(滨江店)", //店名
    			"imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    			"stars": "3.5",
    			"good": 6, //如果这个数大于0, 就显示大拇指
    			"people": 813, //否则显示这个(看图)
    			"average": 52, //平均消费
    			"discount": "7.5", //打折, 只会有X, X.5折两种
    			"flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    			"distance": "<100m" //距离
  			},

  			{
    			"title": "新白鹿餐厅2号(滨江店)", //店名
    			"imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
    			"stars": "3.5",
    			"good": 6, //如果这个数大于0, 就显示大拇指
    			"people": 813, //否则显示这个(看图)
    			"average": 52, //平均消费
    			"discount": "5", //打折, 只会有X, X.5折两种
    			"flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
    			"distance": "<100m" //距离
  			},

            {
                "title": "新白鹿餐厅2号(滨江店)", //店名
                "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
                "stars": "3.5",
                "good": 6, //如果这个数大于0, 就显示大拇指
                "people": 813, //否则显示这个(看图)
                "average": 52, //平均消费
                "discount": "7.5", //打折, 只会有X, X.5折两种
                "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
                "distance": "<300m" //距离
            },

            {
                "title": "南岸老火锅1号店(重邮店店)", //店名
                "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
                "stars": "3.5",
                "good": 6, //如果这个数大于0, 就显示大拇指
                "people": 813, //否则显示这个(看图)
                "average": 52, //平均消费
                "discount": "8", //打折, 只会有X, X.5折两种
                "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
                "distance": "<500m" //距离
            },

            {
                "title": "新白鹿餐厅2号(滨江店)", //店名
                "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
                "stars": "3.5",
                "good": 6, //如果这个数大于0, 就显示大拇指
                "people": 813, //否则显示这个(看图)
                "average": 52, //平均消费
                "discount": "7.5", //打折, 只会有X, X.5折两种
                "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
                "distance": "<100m" //距离
            }
		]);
	}

	res.end(resp);
}

server.listen(8080, function(){
	console.log('listened at : 8080');
});