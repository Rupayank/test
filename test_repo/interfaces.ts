interface RectangeOptions{
    width:number,
    length:number,
    height?:number,// ? to tell this parameter is optional
}

function Rectange(options:RectangeOptions):void{
    let width=options.width;
    let length=options.length;
    if(options.height)
    {
        let height=options.height;
        console.log(width,length,height);
    }

    //Check
}
Rectange({
    width:20,
    length:40,
    // height:1000
})