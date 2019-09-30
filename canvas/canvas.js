//画折线图
((function (window) {
    //创建折线图的构造函数
    function LineCharts(canvas) {
        //上下文对象
        this.context = canvas.getContext("2d");
        //网格的大小
        this.grid = 10;
        //画布打宽高
        this.width = this.context.canvas.width;
        this.height = this.context.canvas.height;
        //坐标与边框之间的距离
        this.space = 20;
        //箭头的大小
        this.arrowSize = 10;
        //坐标原点
        this.x0 = this.space;
        this.y0 = this.height - this.space;
        //点的大小
        this.dottedSize = 10;
    }

    //折线图初始化方法
    LineCharts.prototype.init = function (data) {
        this.drawGrid();
        this.drawAxis();
        this.drawDotted(data);
    };
    //画表格
    LineCharts.prototype.drawGrid = function () {
        var xLinearTotal = Math.floor(this.height / this.grid);
        for (var i = 0; i <= xLinearTotal; i++) {
            this.context.beginPath();
            this.context.moveTo(0, this.grid * i - 0.5);
            this.context.lineTo(this.width, this.grid * i - 0.5);
            this.context.strokeStyle = "#999";
            this.context.stroke();
        }

        var yLinearTotal = Math.floor(this.width / this.grid);
        for (var i = 0; i <= yLinearTotal; i++) {
            this.context.beginPath();
            this.context.moveTo(this.grid * i - 0.5, 0);
            this.context.lineTo(this.grid * i - 0.5, this.height);
            this.context.strokeStyle = "#999";
            this.context.stroke();
        }
    };
    //画坐标
    LineCharts.prototype.drawAxis = function () {
        this.context.beginPath();
        this.context.moveTo(this.x0, this.y0 - 0.5);
        this.context.lineTo(this.width - this.space, this.y0 - 0.5);
        this.context.strokeStyle = "#000";
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(this.width - this.space, this.y0 - 0.5);
        this.context.lineTo(this.width - this.space - this.arrowSize, this.y0 - 0.5 - this.arrowSize / 2);
        this.context.lineTo(this.width - this.space - this.arrowSize, this.y0 - 0.5 + this.arrowSize / 2);
        this.context.fillStyle = "#000";
        this.context.fill();

        this.context.beginPath();
        this.context.moveTo(this.x0 - 0.5, this.y0);
        this.context.lineTo(this.x0 - 0.5, this.space);
        this.context.strokeStyle = "#000";
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(this.x0 - 0.5, this.space);
        this.context.lineTo(this.x0 - 0.5 - this.arrowSize / 2, this.space + this.arrowSize);
        this.context.lineTo(this.x0 - 0.5 + this.arrowSize / 2, this.space + this.arrowSize);
        this.context.fillStyle = "#000";
        this.context.fill();
    };
    //画点和连线
    LineCharts.prototype.drawDotted = function (data) {
        data.forEach((item, i, arr) => {
            //坐标转换 x = x0 + x  y = y0 - y
            var coordX = this.x0 + item.x;
            var coordY = this.y0 - item.y;
            //绘制坐标
            this.context.beginPath();
            this.context.moveTo(coordX, coordY);
            this.context.lineTo(coordX - this.dottedSize / 2, coordY - this.dottedSize / 2);
            this.context.lineTo(coordX + this.dottedSize / 2, coordY - this.dottedSize / 2);
            this.context.lineTo(coordX + this.dottedSize / 2, coordY + this.dottedSize / 2);
            this.context.lineTo(coordX - this.dottedSize / 2, coordY + this.dottedSize / 2);
            this.context.lineTo(coordX - this.dottedSize / 2, coordY - this.dottedSize / 2);
            this.context.fillStyle = "#000";
            this.context.fill();

            //连接点
            if (i == 0) {
                this.context.beginPath();
                this.context.moveTo(this.x0 - 0.5, this.y0 - 0.5);
                this.context.lineTo(coordX - 0.5, coordY - 0.5);
                this.context.strokeStyle = "#000";
                this.context.stroke();
            } else {
                var preCoordX = arr[i - 1].x + this.x0;
                var preCoordY = this.y0 - arr[i - 1].y;
                this.context.beginPath();
                this.context.moveTo(preCoordX - 0.5, preCoordY - 0.5);
                this.context.lineTo(coordX - 0.5, coordY - 0.5);
                this.context.strokeStyle = "#000";
                this.context.stroke();
            }
        });
    };
    //将对象暴露出去
    window.LineCharts = LineCharts;
})(window));

//画饼状图
((function (window) {

    //圆饼图的构造函数
    function CircleCharts(canvas) {
        //上下文
        this.context = canvas.getContext("2d");
        //圆的相关信息
        this.x0 = this.context.canvas.width / 2 + 60;
        this.y0 = this.context.canvas.height / 2;
        this.radius = 150;
        //比例占比信息的线长
        this.outLine = 20;
        //颜色描述信息之间的空距
        this.spaceColor = 10;
        //颜色与画布边框的空距
        this.space = 20;
        //颜色描述信息的大小
        this.xSize = 30;
        this.ySize = 15;
    }

    //圆饼图的初始化
    CircleCharts.prototype.init = function (data) {
        //根据数据绘制圆饼图
        this.drawPie(data);

    };

    //根据数据绘制圆饼图
    CircleCharts.prototype.drawPie = function (data) {
        //计算出每个阶段占领的弧度
        var angelList = calcultorAngle(data);

        //根据每个数据对应的弧度绘制出圆
        var startAngel = 0;
        angelList.forEach((item, i) => {
            var endAngel = startAngel + item.angel;
            this.context.beginPath();
            this.context.moveTo(this.x0, this.y0);
            this.context.arc(this.x0, this.y0, this.radius, startAngel, endAngel);
            this.context.closePath();
            var color = getRandomColor();
            this.context.fillStyle = color;
            this.context.fill();

            //根据数据绘制圆饼图的占比信息
            this.drawTitle(startAngel, item.angel, item.rate, color);

            //根据数据描绘圆饼图的颜色信息
            this.drawDesc(data.length, item.title, color, i);

            startAngel = endAngel;
        });
    };

    //根据数据绘制圆饼图的占比信息
    CircleCharts.prototype.drawTitle = function (startAngel, angel, rateInfo, color) {
        //计算伸出来的坐标
        var c = this.radius + this.outLine;
        var x = c * Math.cos(startAngel + angel / 2);
        var y = c * Math.sin(startAngel + angel / 2);
        //画线
        this.context.beginPath();
        this.context.moveTo(this.x0, this.y0);
        this.context.lineTo(x + this.x0, y + this.y0);
        this.context.strokeStyle = color;
        this.context.stroke();

        //画文字
        this.context.font = "14px Microsoft YaHei";
        var textWidth = this.context.measureText(rateInfo).width;
        this.context.textBaseline = "bottom";
        if ((x + this.x0) < this.x0) {
            //右边
            this.context.lineTo(x + this.x0 - textWidth, y + this.y0);
            this.context.textAlign = "left";
            this.context.fillText(rateInfo, x + this.x0 - textWidth, y + this.y0);
            this.context.stroke();
        } else {
            //左边
            this.context.lineTo(x + this.x0 + textWidth, y + this.y0);
            this.context.textAlign = "right";
            this.context.fillText(rateInfo, x + this.x0 + textWidth, y + this.y0);
            this.context.stroke();
        }

    };

    //根据数据描绘圆饼图的颜色信息
    CircleCharts.prototype.drawDesc = function (length, title, color, i) {
        this.context.beginPath();
        this.context.moveTo(this.space, this.space + i * this.spaceColor + i * this.ySize);
        this.context.lineTo(this.space + this.xSize, this.space + i * this.spaceColor + i * this.ySize);
        this.context.lineTo(this.space + this.xSize, this.space + i * this.spaceColor + i * this.ySize + this.ySize);
        this.context.lineTo(this.space, this.space + i * this.spaceColor + i * this.ySize + this.ySize);
        this.context.closePath();
        this.context.fillStyle = color;
        this.context.fill();

        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.textBaseline = "bottom";
        this.context.textAlign = "left";
        this.context.fillText(title, this.space + this.xSize + this.spaceColor, this.space + i * this.spaceColor + i * this.ySize + this.ySize);


    };

    //计算每个阶段占领的弧度
    function calcultorAngle(data) {
        var total = 0;
        data.forEach((item) => {
            total += item.count;
        });

        data.forEach((item) => {
            item.rate = (item.count / total).toFixed(4) * 100 + "%";
            item.angel = (item.count / total) * 2 * Math.PI;
        });

        return data;
    }

    //随机颜色
    function getRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    };

    window.CircleCharts = CircleCharts;
})(window));


//人物在地图中行走
((function (window) {
    //画布中人对象
    function Person(canvas) {
        this.context = canvas.getContext("2d");

        //人物的方向 0 下 1 左 2 右 3 上
        this.direction = 0;
        //行走
        this.stepSize = 10;
        this.stepX = 0;
        this.stepY = 0;
    };

    //初始化方法
    Person.prototype.init = function () {
        //加载图片
        loadImage((img) => {
            //在画布中心点绘制图片
            var personWidth = img.width / 4;
            var personHeight = img.height / 4;
            var xCenter = this.context.canvas.width / 2 - personWidth;
            var yCenter = this.context.canvas.height / 2 - personHeight;

            //某一方向记录
            this.index = 0;
            this.drawPerson(img, personWidth, personHeight, xCenter, yCenter);


            //根据键盘按键控制人物的行走
            document.onkeyup = (e) => {
                //40  37 39 38
                switch (e.keyCode) {
                    //下
                    case 40:
                        this.direction = 0;
                        this.index++;
                        this.stepY += this.stepSize;
                        break;
                    //左
                    case 37:
                        this.direction = 1;
                        this.index++;
                        this.stepX -= this.stepSize;
                        break;
                    //右
                    case 39:
                        this.direction = 2;
                        this.index++;
                        this.stepX += this.stepSize;
                        break;
                    //上
                    case 38:
                        this.direction = 3;
                        this.index++;
                        this.stepY -= this.stepSize;
                        break;
                }

                this.drawPerson(img, personWidth, personHeight, xCenter, yCenter);
            };
        });
    };

    //画图像方法
    Person.prototype.drawPerson = function (img, personWidth, personHeight, xCenter, yCenter) {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(img,
            this.index * personWidth, this.direction * personHeight,
            personWidth, personHeight,
            xCenter + this.stepX, yCenter + this.stepY,
            personWidth, personHeight);
        if (this.index == 3) {
            this.index = 0;
        }
    };

    //加载图片
    function loadImage(callback) {
        var img = new Image();
        img.onload = function () {
            //图片的处理交给调用者自身处理
            callback && callback(img);
        };
        img.src = "images/04.png";
    };

    window.Person = Person;
})(window));