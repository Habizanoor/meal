const student = {
    name : 'sakib al hasan',
    money : 5000,
    treatDey: function(expence,bokshish ,tax){
        this.money = this.money - expence - bokshish - tax;
        console.log('here5555',this);
        return this.money;
        
    }
}

const student2 = {
    name : 'sakib khan',
    money : 5000,

}

const choudhuri = {
    name:'shakib choudhuri',
    money:7000
}
// call 
student.treatDey.call(student2 , 400, 50, 10);
// apply 
student.treatDey.apply(student2,[500,40,10]);



 