var a={
    b:2,
    c:function() 
    {
        return 3*this.b*this.b;
    }
}
console.log("a.b=%d",a.b);
console.log("a.c()=%d",a.c());