// HASH TABLE
    
class hashTable{
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
            this.table[index]=[[key,value]];
            
        }else{
            const sameIndex=bucket.find((item)=>item[0]==key)
            if(sameIndex){
                sameIndex[1]=value

            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index=this.hash(key)
        let bucket=this.table[index];
        if(bucket){
            let sameIndex=bucket.find((item)=>item[0]==key)
            if(sameIndex){

                return sameIndex[1]
            }
        }
        return undefined
    }
    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let sameIndex=bucket.find((item)=>item[0]==key)
            if(sameIndex){
                bucket.splice(bucket.indexOf(sameIndex),1)
            }
        }else{
            return undefined
        }
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            console.log(i,this.table[i])
        }
    }
}

const hash=new hashTable(10)
hash.set("name","irfan")
hash.set("age",23)
hash.set("emna","amaan")
hash.print()
console.log(hash.get("name"))





