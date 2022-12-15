import { defineStore } from 'pinia';

export const appWeatherStore = defineStore({
    id: 'appWeatherStore',
    state() {
        return {
            dataLocation: [],
            dataTemp: [],
            err: false,
            barAction:true

        }
    },
    actions: {
        async defaultLocation() {
            try {
                let res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=df77876849af6339ce87f21a2f76316c');
                let json = await res.json();

                if (res.ok) {
                    this.dataLocation = json;
                    this.dataTemp = json.main;
                }
                else {
                    this.err=true;
                    setTimeout(()=>{
                        this.err=false;
                    },1000)
                    throw new Error('Hubo un error');
                }
            } catch (error) {
                console.log(error);
            }

        },
        async changeLocationStore(city, country) {

            try {
                const path = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=df77876849af6339ce87f21a2f76316c`;

                let res = await fetch(path);
                let json = await res.json();

                if (res.ok) {
                    this.dataLocation = json;
                    this.dataTemp = json.main;
                }
                else {
                    this.err=true;
                    setTimeout(()=>{
                        this.err=false;
                    },1000)
                    throw new Error('Hubo un error');
                    
                }

            } catch (err) {
                console.log(err);
            }

        }

    }
})