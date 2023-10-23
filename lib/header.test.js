const Header =require("./header");

describe ('Header', ()=>{
    it('should verify the header renders correctly',()=>{
        const header= new Header;
        expect(header.render()).toBe(`<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`);
    })
})