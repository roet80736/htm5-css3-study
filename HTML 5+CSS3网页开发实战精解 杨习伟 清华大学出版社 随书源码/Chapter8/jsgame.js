function Time(){
	this.init_time=(new Date).getTime();
	this.last_update=0;
	this.waiting=false
}
Time.prototype.get_ticks=function(){return(new Date).getTime()-this.init_time};
Time.prototype.wait=function(a){
	this.waiting=true;
	var c=this;
	setTimeout(function(){c.waiting=false},a)
};
Time.prototype.tick=function(){
	var a=(new Date).getTime(),c=a-this.last_update;
	this.last_update=a;
	return c
};
Time.prototype.fps=function(a){this.wait(1E3/a)};
Time.prototype.lock=function(){this.waiting=true};
Time.prototype.unlock=function(){this.waiting=false};
function JsGame(){}
JsGame.prototype=new Time;
JsGame.prototype.running=false;
JsGame.prototype.interval=null;
JsGame.prototype.loop=function(a){
	if(!this.running){
		this.running=true;
		var c=this;
		this.interval=setInterval(function(){c.waiting||a&&a()},0)
	}
};
JsGame.prototype.stop=function(){
	clearInterval(this.interval);
	this.running=false
};
JsGame.prototype.is_ready=function(a){
	this.waiting=true;
	var c=this,b=setInterval(function(){if(a)if(a()){clearInterval(b);c.waiting=false}},300)
};
function Surface(){
	switch(arguments.length){
		case 1:
			if(arguments[0]instanceof HTMLCanvasElement){
				this.canvas=arguments[0];
				this.width=this.canvas.width;
				this.height=this.canvas.height;
				this.ctx=this.canvas.getContext("2d")
			}
			if(arguments[0]instanceof HTMLImageElement){
				this.width=arguments[0].width;
				this.height=arguments[0].height;
				this.canvas=document.createElement("canvas");
				this.canvas.width=this.width;
				this.canvas.height=this.height;
				this.ctx=this.canvas.getContext("2d");
				this.ctx.drawImage(arguments[0],0,0,this.width,this.height)
			}
			break;
		case 2:
			this.width=arguments[0];
			this.height=arguments[1];
			this.canvas=document.createElement("canvas");
			this.canvas.width=this.width;
			this.canvas.height=this.height;
			this.ctx=this.canvas.getContext("2d");
			break;
		case 3:
			this.width=arguments[0];
			this.height=arguments[1];
			this.canvas=document.createElement("canvas");
			this.canvas.width=this.width;
			this.canvas.height=this.height;
			this.ctx=this.canvas.getContext("2d");
			this.fill(arguments[2])
	}
}
Surface.prototype.fill=function(a){
	this.ctx.fillStyle=a;
	this.ctx.fillRect(0,0,this.width,this.height)
};
Surface.prototype.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)};
Surface.prototype.draw=function(a,c,b){this.ctx.drawImage(a.canvas,c,b)};
/*Surface.prototype.get_pixel=function(a,c){
	var b=this.ctx.getImageData(0,0,this.width,this.height).data,d=(c*this.width+a)*4;
	return[b[d+0],b[d+1],b[d+2],b[d+3]]
};
Surface.prototype.set_pixel=function(a,c,b){
	var d=this.ctx.getImageData(0,0,this.width,this.height).data;
	a=(c*this.width+a)*4;
	d[a+0]=b[0];
	d[a+1]=b[1];
	d[a+2]=b[2];
	d[a+3]=b[3]
};*/
Surface.prototype.clone=function(){
	var a=new Surface(this.width,this.height);
	a.ctx.drawImage(this.canvas,0,0);
	return a
};
Surface.prototype.subsurface=function(a,c,b,d){
	var g=new Surface(b,d);
	g.ctx.drawImage(this.canvas,a,c,b,d,0,0,b,d);
	return g
};
Surface.prototype.save=function(){this.ctx.save()};
Surface.prototype.scale=function(a,c){this.ctx.scale(a,c)};
Surface.prototype.restore=function(){this.ctx.restore()};
Display={attach:function(a){return new Surface(a)}};
function Font(){
	this.name="sans-serif";
	this.italic=this.bold=false;
	this.textBaseline="top";
	this.textAlign="start"
}
/*Font.prototype.render=function(a,c,b,d){
	var g=10;
	if(c)g=c;
	if(g<10)g=10;
	c="black";
	if(b)c=b;
	b="white";
	if(d)b=d;
	var h=g*a.length*3,e=g*2;
	d=new Surface(h,e,"white");
	var i=d.ctx;
	i.fillStyle="black";
	i.textBaseline=this.textBaseline;
	i.textAlign=this.textAlign;
	var f="";
	if(this.bold)f+="bold ";
	if(this.italic)f+="italic ";
	f=f+g.toString()+"px "+this.name;
	i.font=f;
	i.fillText(a,0,0);
	e=d.ctx.getImageData(0,0,h,e);
	h=0;
	f=1E4;
	for(var l=0,k=0;k<e.height;k++)
		for(var j=0;j<e.width;j++)
			if(e.data[(k*e.width+j)*4]<255){
				h=Math.max(h,j);
				f=Math.min(f,j);
				l=Math.max(l,k)
			}
	d.clear();
	d.fill(b);
	i.fillStyle=c;
	i.fillText(a,0,0);
	e=Math.max(l+1,g);
	a=new Surface(h-f+1,e,b);
	a.ctx.drawImage(d.canvas,f,0,h,e,0,0,h-f,e);
	return a
};*/