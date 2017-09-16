# restful bear
> 名字是从这个教程来的：
[build a restful api using node and express 4](http://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)

自己试着跟着教程做了一下，可以实现entries的.get, .post。还有entry/:id的.get,.put,.delete。尝试加了query，但是对querystring还是不大懂。

现在把程序写成了server.js，commonRouter.js，pugInterface.js三大块，server管整个app，commonRouter管服务器和mongodb的沟通，pugInterface从commonRouter获得数据，返回渲染的html（与commonRouter的各种.get相关联）。而.post，.put和.delete相关的router都是直接从html里面fire

xlsx.js主要应用于数据的导入和导出。

## project路线图
[] connecting pugInterface to .get in commonRouter
[] 
