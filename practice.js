// hashTable

class hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameIndex=bucket.find((item)=>item[0]==key)
            if(sameIndex){
                sameIndex[1]=value;

            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let sameIndex=bucket.find((item)=>item[0]==key)
            if(sameIndex){
                return sameIndex[1]
            }
        }else{
           return undefined
        }
    }

  
    print(){
        if(this.table.length==0){
            console.log("Table is empty")
        }
        for(let i=0;i<this.table.length;i++){
            console.log(i,this.table[i])
        }
    }
}
const table= new hashtable(5)

table.set("name","rashida")
table.set("yek","iqbal")
console.log(table.get("mane"))
table.print()

