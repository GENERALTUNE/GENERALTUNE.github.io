# GENERALTUNE.github.io

主页管理纪要：


1.同步自己的网站到GitHub
将自己建的username.github.io(如jingwhale.github.io)远程仓库clone到本地，把你开发好的网页复制到刚clone的本地仓库里并同步到远程仓库，再访问http://jingwhale.github.io/，就是访问你自己写的网站了。（注意，其中index.html是主页）。

2.将自己的域名绑定到github pages上
①添加CNAME文件
登陆到https://github.com/，在username.github.io仓库根目录下添加一个CNAM文件，没有后缀名，里面内容为你的域名(如:test.com),不需要添加http/www等前缀。
②记录下IP地址
在https://github.com/，点击help，进入help页面，在搜索框里DNS，找到Tips for configuring an A record with your DNS provider。查询到关联GitHub时配置域名解析记录的IP地址（192.30.252.153或192.30.252.154）。也有人ping username.github.io得到IP地址。
③配置A记录
登陆你的域名管理界面。创建一条A记录，指向192.30.252.153或192.30.252.154这个IP地址。
④验证域名与github关联是否成功。
先以github的链接方式访问一次，查看界面；再以域名的方式访问一次，查看界面；两者所查看到的界面是一致。
注：
▪若域名不能立即访问，需等待一段时间再访问。
▪当github成功关联到域名后，以github的链接方式进行访问，其会自动转化为域名访问。

