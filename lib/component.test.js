const Component =require("./component");

describe ('Component', ()=>{
    it('should throw an error when we call render',()=>{
        const comp= new Component;
        expect(()=>{comp.render()}).toThrowError("Child class must implement render()");
    })
})