// stack in array

// class Stack {
//     constructor() {
//         this.top = -1;
//         this.stack = []
//         this.b = []
//     }
//     isEmpty() {
//         return this.top == -1;
//     }
//     peek() {
//         return this.stack[this.top]
//     }
//     redo() {
//         this.b.push(this.stack.pop())
//         this.top--;
//     }
//     undo() {
//         this.stack.push(this.b.pop())
//         this.top++;
//     }
//     push(value) {
//         this.top++
//         this.stack[this.top] = value;
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return console.log("list is empty")
//         }
//         const pop = this.stack[this.top];
//         this.top--;
//         return pop
//     }

//     print() {
//         if (this.isEmpty()) {
//             return console.log("list is empty")
//         }
//         for (let i = this.top; i >= 0; i--) {
//             console.log(this.stack[i])
//         }
//     }
// }

// queue in array

class queue {
    constructor() {
        this.queue = [];
        this.front = -1;
        this.rear = -1

    }
    isEmpty(){
        return this.front==-1
    }
    
    peek(){
        return this.queue[this.front]
    }
    enqueue(value){
        if(this.isEmpty()){
            this.front=0;
            this.rear=0;
        }else{
            this.rear++;
        }
        this.queue[this.rear]=value
    }
    dequeue(){
        if(this.isEmpty()){
            return console.log("queue is empty")
        }else{
            const dequeue=this.front;
            this.front++;
            return dequeue
        }
    }

    print(){
        if(this.isEmpty()){
            return console.log("queue is empty");
        }else{
            for(let i=this.front;i<=this.rear;i++){
                console.log(this.queue[i])
            }
        }
    }
}

const list=new queue()
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.enqueue(5)
list.print()
console.log(list.peek())