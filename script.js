'use strict';

{
    let Car = function () {

        this.choice = function () {
            this.brand = prompt('Какая марка авто вам больше нравится(№ позиции)? \n1 - BMW \n2 - Mercedes\n3 - Tesla');
            this.brandFuel = confirm('Вы любите быстрые авто?');
            this.distance = +prompt('Как далеко вы собрались (км) ?')
            this.fuel();
        };

        this.fuel = function () {
            if (this.brandFuel) {
                switch (this.brand) {
                    case '1':
                        this.result = 17 * this.distance / 100;
                        this.resultCash = Math.ceil(this.result * 2.65);
                        alert(`Вам понадобится ${this.result} литров бензина и всего лишь ${this.resultCash} наших рубликов!`);
                        break;
                    case '2':
                        this.result = 16 * this.distance / 100;
                        this.resultCash = Math.ceil(this.result * 2.65);
                        alert(`Вам понадобится ${this.result} литров бензина и всего лишь ${this.resultCash} наших рубликов!`);
                        break;
                    case '3':
                        alert('Вам понадобится лишь сигаретка!)');
                        break;
                    default: this.result = alert('Давайте не будем тратить время и выберем авто мечты!)'); return this.choice();
                }
            } else {
                switch (this.brand) {
                    case '1':
                        this.result = 13 * this.distance / 100;
                        this.resultCash = Math.ceil(this.result * 2.65);
                        alert(`Вам понадобится ${this.result} литров бензина и всего лишь ${this.resultCash} наших рубликов!`);
                        break;
                    case '2':
                        this.result = 11 * this.distance / 100;
                        this.resultCash = Math.ceil(this.result * 2.65);
                        alert(`Вам понадобится ${this.result} литров бензина и всего лишь ${this.resultCash} наших рубликов!`);
                        break;
                    case '3':
                        alert('Вам понадобится лишь сигаретка!)');
                        break;
                    default: this.result = alert('Давайте не будем тратить время и выберем авто мечты!)'); return this.choice();
                }
            }
            this.show();
        }
        this.show = function () {
            this.journey = alert('Не забудьте пристегнуться и вернуть автомобиль!!!')
        }
    }



    let cars = new Car();
    // cars.choice();
    console.log(cars);



    // Task 10

    let Moto = function () {
        Car.apply(this)


        this.choice = function () {

            this.brandFuel = confirm('Может вас интересуют мотоциклы?');
            this.fuel();
        }
        this.fuel = function () {
            if (this.brandFuel) {
                alert('Не стоит , четыре колеса надёжнее двух!')
            } else {
                alert('Как хорошо, что вы предпочитаете автомобили!')
            }
        }

    }


    let moto = new Moto();
    moto.choice();
    console.log(moto);

}

// Доп
{

    //let body = document.body;

    let CreateElement = new function () {
        let div = document.createElement('div');
        div.classList.add('block')
        document.body.prepend(div);
        if (document.querySelector('div.block') !== null) {
            console.log(true);
        }
        else {
            console.log(false);
        }
        
        div.innerHTML = 'Hello World!'
    }

    //    let createElement = new CreateElement();

}
