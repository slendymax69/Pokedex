import {useEffect} from "react";
import {Text, View} from "react-native";

export default function index(){
    useEffect(() => {
        console.log("entra en pantalla")
    }, []);

    const getPokemons = async () => { 
        const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
    };
    return(
        <View>
            <Text>Angel</Text>
        </View>

    )
}