let start = true,
    game,
    max = 5,
    min = 0,
    rendNumber,
    resEnterNumber,
    prize,
    box = 0,
    gold = 10,
    silver = 5,
    bronze = 2;

    game = confirm("Do you want to play a game?");

while (start) {
    start = game;
   if (game == false) {
       alert("You did not become a millionaire, but can.");
   }
   if (game == true) {
       rendNumber = Math.floor(Math.random() * (max - min + 1)) + min;
       console.log(rendNumber);
       resEnterNumber = prompt('enter a number from 0 to ' + max + '\n'
           + 'attempts left: 3' +
           '\n' +
           'total priz: '+ box + '$' + '\n' +
       'possible prize on current attempts: ' + gold + '$');

       if (rendNumber == resEnterNumber){
           prize = gold;
           game = confirm("Congratulation!   Your prize is: "+ gold +  "$" + " Do you want to continue?");

           if (game == false) {
               alert('Thank you for a game. Your prize is: '+ gold + '$')
           }
       } else {
           resEnterNumber = prompt('enter a number from 0 to ' + max + '\n'
               + 'attempts left: 2' +
               '\n' +
               'total priz: '+ box + '$' + '\n' +
               'possible prize on current attempts: ' + silver + '$');

           if (rendNumber == resEnterNumber) {
               prize = silver;
               game = confirm("Congratulation!   Your prize is: "+ silver + "$" + " Do you want to continue?");

               if (game == false) {
                   alert('Thank you for a game. Your prize is: '+ silver + '$')
               }
           } else {
               resEnterNumber = prompt('enter a number from 0 to ' + max + '\n'
                   + 'attempts left: 1' +
                   '\n' +
                   'total priz: '+ box + '$' + '\n' +
                   'possible prize on current attempts: ' + bronze + '$');

               if (rendNumber == resEnterNumber) {
                   prize = bronze;
                   game = confirm("Congratulation!   Your prize is: "+ bronze + "$" +  " Do you want to continue?");

                   if (game == false) {
                       alert('Thank you for a game. Your prize is: '+ bronze + '$')
                   }
               } else {
                   prize = 0;
                   game = confirm('Thank you for a game. Your prize is: '+ box + '$' + ' Do you want to play?');
               }
           }
       }
       box = box + prize;
       max = max + 5;
       gold *= 3;
       silver *= 3;
       bronze = (bronze * 3) + 1;
   }
}

