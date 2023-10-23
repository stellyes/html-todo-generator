const TaskListItem =require("./tasklistitem");

describe ('TaskListItem', ()=>{
    it('should verify that tasklistitems renders the list correctly',()=>{
        const tasklistitem= new TaskListItem(["exTask"],false);
        expect(tasklistitem.render()).toBe(`<li class="tasks-item">exTask</li>`);
    })
})
describe('Task Priority',()=>{
    it('should verify the priority task renders correctly',()=>{
        const tasklistitem= new TaskListItem(["exTask"],true);
        expect(tasklistitem.render()).toBe(`<li class="tasks-item task-item-priority">exTask</li>`)
    })
})