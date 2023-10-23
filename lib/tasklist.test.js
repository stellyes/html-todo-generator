const TaskList =require("./tasklist");

describe ('TaskList', ()=>{
    it('should verify that tasklist renders the list correctly',()=>{
        const tasklist= new TaskList;
        expect(tasklist.render()).toBe(`<ul class="tasks">{INNER_HTML}</ul>`);
    })
})