import { ImageSourcePropType } from "react-native";

export interface Weather {
  city: string;
  temparature: number;
  condition: string;
  high: number;
  low: number;
}

export enum WeatherType {
  Rainy,
  Windy,
  Stormy,
  Clear,
  Cloudy,
  Showers,
  Sunny,
  Tornado,
}

export enum ForecastType {
  Hourly = "Hourly",
  Weekly = "Weekly",
}

export interface Forecast {
  date: Date;
  weather: WeatherType;
  probabilty: number;
  temperature: number;
}
