class Helper {
    static width: number = 720;
    static height: number = 1155;

    /**
     * 获取图片
     */
    static getBitmap(name: string, width: number = null, height: number = null, x: number = null, y: number = null): egret.Bitmap {
        let bitmap: egret.Bitmap = new egret.Bitmap(RES.getRes(name));
        if (width != null) {
            bitmap.width = width;
        }
        if (height != null) {
            bitmap.height = height;
        }
        if (x != null) {
            bitmap.x = x;
        }
        if (y != null) {
            bitmap.y = y;
        }
        return bitmap;
    }

    /**
     *  对象水平居中
     */
    static ObjectCenterX(obj: egret.DisplayObject): void {
        obj.x = (this.width - obj.width) / 2
    }

    /**
    *  对象垂直居中
    */
    static ObjectCenterY(obj: egret.DisplayObject): void {
        obj.y = (this.width - obj.height) / 2
    }

    /**
    *  对象居中
    */
    static ObjectCenter(obj: egret.DisplayObject): void {
        obj.x = (this.width - obj.width) / 2
        obj.y = (this.height - obj.height) / 2
    }

}