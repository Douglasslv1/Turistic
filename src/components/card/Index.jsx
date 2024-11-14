import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Style from "./Style.module.css";

export default function MediaCard(props) {
  return (
    <Card className={Style.container} sx={{ width: 245 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.image}
          title={props.titlee}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.titlee}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.description}
          </Typography>
        </CardContent>
      <CardActions className={Style.justify}>
        <Button size="small">Galeria</Button>
        <Button size="small">Saiba mais</Button>
      </CardActions>
    </Card>
  );
}
