var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content':'灌水来了',
	'cid':348
});

var options = {
	hostname:'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.8',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=364cd385-5ef7-4c08-b0ef-fa94a5c337f5; imooc_isnew_ct=1466511387; bdshare_firstime=1466935057973; loginstate=1; apsid=FkZjM2ZjEyZGZjNTFlZWQ1MDczYzAxMjFiYWQ0ZjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzU0MjMwNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsaXV2aXBodWlAMTYzLmNvbQAAAAAAAAAAAAAAAAAAADU2YTQxMWE0MTk5ODE0NTM2YTViZWQ4ZDkyMzA2ODk3pje5V6Y3uVc%3DMj; last_login_username=liuviphui%40163.com; PHPSESSID=oha505gqdd9pv1k875q1ige9t4; jwplayer.qualityLabel=è¶æ¸; jwplayer.volume=100; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1473912769,1473930870,1474094796,1474110902; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1474173757; imooc_isnew=2; cvde=57dd25b375519-77',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
	console.log('status:' + res.statusCode);
	console.log('header:' + JSON.stringify(res.headers))

	res.on('data',function(chunck){
		console.log(Buffer.isBuffer(chunck))
		console.log(typeof chunck)
	})

	res.on('end',function(){
		console.log('评论完毕!')
	})

	res.on('error',function(e){
		console.log('遇到错误!'+ e.message)
	})
})


req.write(postData)
req.end()

