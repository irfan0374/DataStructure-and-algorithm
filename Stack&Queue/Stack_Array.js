class Stack{
    constructor(){
        this.top=-1;
        this.stack=[]
        this.b=[]
    }
    isEmpty(){
        return this.top==-1;
    }
    peek(){
        return this.stack[this.top]
    }
    redo(){
        this.b.push(this.stack.pop())
        this.top--;
    }
    undo(){
        this.stack.push(this.b.pop())
        this.top++;
    }
    push(value){
        this.top++
        this.stack[this.top]=value;
    }
    pop(){
        if(this.isEmpty()){
            return console.log("list is empty")
        }
        const pop=this.stack[this.top];
        this.top--;
        return pop
    }

    print(){
        if(this.isEmpty()){
            return console.log("list is empty")
        }
        for(let i=this.top;i>=0;i--){
            console.log(this.stack[i])
        }
    }
}