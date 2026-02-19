import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather";

export const useWeather = async() => {
    const temperatura = getTemperatura();
    const weatherStore = useWeatherStore();
    weatherStore.temperatura = temperatura;

}
