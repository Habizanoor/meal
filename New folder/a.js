const student = {
    name : 'sakib al hasan',
    id : 101,
    major : 'cricket',
    game : ['football' , 'gan er koli', 'long jump'],
    bestFriend :{
        name: 'liton das',
        age:'39'
    },
    paly: function(){
        console.log(this.name ,"let's play");
        
    }
};
student.paly();

