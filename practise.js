class hashTable{
    constructor(value){
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
            this.table[index]=[[key,index]]
        }else{
            let sameIndex=bucket.find((item)=>item[0]==key)
            if(sameIndex){
                sameIndex[1]=value
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
        }return undefined

    }
    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let sameIndex=bucket.find((item)=>item[0]==key)
            if(sameIndex){
                bucket.splice(bucket.indexOf(sameIndex),1)
            }
        }
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            console.logD(`${i} ${this.table[i]}`)
        }
    }
}