/*
<div class="card ">
          <div class="Peopleid">
            <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="">
            <h2>edward ned stark</h2>
          </div>
          <p> "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",</p>
          <button class="btn" >Learn More!</button>
        </div>
       </div>

*/
let Divconatiner = document.querySelector('.container');
got.houses.forEach(house => {
    house.people.forEach(person => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'flex-30');
        let peopleid = document.createElement('div');
        let img = document.createElement('img');
        let h2 = document.createElement('h2');
        peopleid.classList.add('Peopleid');
        img.src = person.image;
        h2.innerText = person.name;
        peopleid.append(img, h2);
        let p = document.createElement('p');
        p.innerText = person.description;
        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = 'Learn More!';
        cardDiv.append(peopleid, p, button);
        Divconatiner.append(cardDiv);

    })


})