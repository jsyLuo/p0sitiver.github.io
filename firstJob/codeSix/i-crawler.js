var http = require('http')
// var cheerio = require('cheerio')
 var cheerio = require('C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\cheerio')

var url = 'http://www.imooc.com/learn/371'


function filterChapters(html){
	var $ = cheerio.load(html)
	var chapters = $('.chapter')

	// [{
	// 	chapterTitle:'',
	// 	videos:[
	// 	title:'',
	// 	id:'']
	// }
	// ]
    
	
	$('.chapter-info').remove()
	var courseData =[]
	chapters.each(function(){
		var chapter = $(this)
		
		var chapterTitle = chapter.find('strong').text().trim()


		var videos = chapter.find('.video').children('li')
		var chapterData = {
			chapterTitle : chapterTitle,
			videos : []
		}

        videos.each(function(){
        	var video = $(this).find('.J-media-item')
        	var videoTitle = video.text().replace('开始学习','').trim()
        	var id = video.attr('href').split('video/')[1].trim()

        	chapterData.videos.push({
        		title:videoTitle,
        		id:id
        	})       	
        })
        courseData.push(chapterData)

	})

	return courseData

}

function printCourseInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle
		console.log(chapterTitle )
		item.videos.forEach(function(video){
			console.log(' ['+ video.id+'] '+ video.title)
		})
	})

}


function mytest(html){

	var $ = cheerio.load(html)
	$('.chapter-content').text('')
	var chapter = $('.chapter').eq(0)
	var title = chapter.children().eq(0).text()
    console.log(title)
		

			

}


http.get(url, function(res){
	var html= ''
	res.on('data',function(data){
		html += data
	})

	res.on('end',function(){
		// console.log(html);
        var courseData = filterChapters(html)
        printCourseInfo(courseData)
        // mytest(html)
	})
}).on('error',function(){
	console.log('get course error');
})
