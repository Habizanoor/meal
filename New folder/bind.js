const student = {
    name : 'sakib al hasan',
    money : 5000,
    treatDey: function(expence){
        const remaining = this.money - expence;
        console.log(remaining);
        
    }
};
console.log(student);
const student2 = {
    name : 'sakib khan',
    money : 5000,

}
const khanTreatDey = student.treatDey.bind(student2);
khanTreatDey(100);
const choudhuri = {
    name:'shakib choudhuri',
    money:7000
};
const choudhuriTreatDey = student.treatDey.bind(choudhuri);
choudhuriTreatDey(1000);