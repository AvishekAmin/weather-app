import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import hot_img from "./assets/hot_img.jpg";
import cold_img from "./assets/cold_img.jpg";
import rain_img from "./assets/rain_img.jpg";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? rain_img
                : info.temp > 20
                  ? hot_img
                  : cold_img
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <p>
                {info.city}{" "}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 20 ? (
                  <SunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </p>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Max Temperature = {info.tempMax}&deg;C</p>
              <p>Min Temperature = {info.tempMin}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>
                Weather can be described as <i>{info.weather}</i> and feels like{" "}
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
