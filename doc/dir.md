### 相对路径 如何表示上下级目录  

[参考](https://blog.csdn.net/dahuzix/article/details/9276549)

** 如何表示上级目录 **   

../表示源文件所在目录的上一级目录，../../表示源文件所在目录的上上级目录，以此类推。

假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html  

假设index.html路径是：c:/Inetpub/wwwroot/sites/index.html
在info.html加入index.html超链接的代码应该这样写：  

`
<a href = "../index.html">index.html</a>
 `

假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html  

假设index.html路径是：c:/Inetpub/wwwroot/index.html
在info.html加入index.html超链接的代码应该这样写：  

`
<a href = "../../index.html">index.html</a>
`

假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html  

假设index.html路径是：c:/Inetpub/wwwroot/sites/wowstory/index.html
在info.html加入index.html超链接的代码应该这样写：  

`
<a href = "../wowstory/index.html">index.html</a>
`



** 如何表示下级目录 **

引用下级目录的文件，直接写下级目录文件的路径即可。

假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html   

假设index.html路径是：c:/Inetpub/wwwroot/sites/blabla/html/index.html 在info.html加入index.html超链接的代码应该这样写：  

`
<a href = "html/index.html">index.html</a>
 `

假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html  

假设index.html路径是：c:/Inetpub/wwwroot/sites/blabla/html/tutorials/index.html
在info.html加入index.html超链接的代码应该这样写：  

`
<a href = "html/tutorials/index.html">index.html</a>
`

    



