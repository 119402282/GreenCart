import type { PlasmoContentScript } from "plasmo";
import { Storage } from "@plasmohq/storage";


export const config: PlasmoContentScript = {
 matches: ["<all_urls>"],
 all_frames: true
}

interface emission {
    name: string;
    emissions: {
        CO2: number;
        price: number;
        value: number;
    };
};

const ScanForCheck = async (emission:emission) => {

    const storage = new Storage()
    
    const greenCartData :any = await storage.get("greenCartData"); // "value"
    let data :any;
    if(greenCartData){
        data = {...greenCartData};
    } else {
        data = {
            userId: "",
            name: "",
            token: "",
            preference: "",
            stats: [
                {
                    name: "tree",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "Trees",
                        value: 0,
                    },
                },
                {
                    name: "solar",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "kWh",
                        value: 12324,
                    },
                },
                {
                    name: "wind",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "kWh",
                        value: 12324,
                    },
                },
                {
                    name: "methane",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "Kgs",
                        value: 12324,
                    },
                },
                {
                    name: "carbon",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "Kgs",
                        value: 12324,
                    },
                },
            ],
        }
    }
    
    for(let i = 0; i < 5; i++){
        if(data.stats[i].name === emission.name){
            data.stats[i].emissions.value += emission.emissions.value;
            data.stats[i].emissions.price += emission.emissions.price;
            data.stats[i].emissions.CO2 += emission.emissions.CO2;
            break;
        }   
    }
    await storage.set("greenCartData", data);

    hiddenInput.value = "";

};


const SetupBasedOnUserOptions = async () => {
    const storage = new Storage()
    
    const greenCartData :any = await storage.get("greenCartData"); // "value"
    let data :any;
    if(greenCartData){
        data = {...greenCartData};
    } else {
        data = {
            userId: "",
            name: "",
            token: "",
            preference: "",
            stats: [
                {
                    name: "tree",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "Trees",
                        value: 0,
                    },
                },
                {
                    name: "solar",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "kWh",
                        value: 12324,
                    },
                },
                {
                    name: "wind",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "kWh",
                        value: 12324,
                    },
                },
                {
                    name: "methane",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "Kgs",
                        value: 12324,
                    },
                },
                {
                    name: "carbon",
                    emissions: {
                        CO2: 0.1,
                        price: 0.2,
                        text: "Kgs",
                        value: 12324,
                    },
                },
            ],
        }
        await storage.set("greenCartData", data);
    };
    const pref = data.preference ?? "tree";
    // this should return the users preference if available, otherwise return tree
};




const hiddenInput : any = document.getElementById('greencart_offset');

if(hiddenInput){
    if(hiddenInput.value != ""){
        let emissionA :any = JSON.parse(hiddenInput.value);
        console.log(emissionA);
        ScanForCheck(emissionA);
    }
}

