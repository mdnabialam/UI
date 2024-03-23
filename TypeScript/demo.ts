function sum(a:string):void{
    console.log(a);
}
sum("NABI");

function two(a:string,b?:string):void{
    console.log(a,b);
}
two("ZOHAN");

function fun(a:string,op:any="nabi",op1?:any,...op2:any[]):any{
    console.log(a,op,op1,op2);
}
fun("NABI");
fun("NABI",undefined,undefined,undefined,undefined);

