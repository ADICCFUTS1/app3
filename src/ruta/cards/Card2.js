import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Buttons from "../Componentes/Buttons";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function Card2() {
  const classes = useStyles();

  const url = "Datos.json";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {!todos
        ? "Cargando..."
        : todos.map((todo, index) => {
            var dta = [];
            var date = new Date(todo.dt * 1000);
            var hours = "0" + date.getHours();
            var minutes = "0" + date.getMinutes();
            var formattedTime =
              hours.substr(-2) +
              ":" +
              minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
            dta.push(formattedTime);
            return (
              <div>
                <Typography gutterBottom variant="h5" component="h2">
                  Viernes 28/05/2022 {dta}
                </Typography>

                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={todo.EnlaceMatchs.valor5}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {todo.Partido}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Buttons {...todo} />
                  </CardActions>
                </Card>
              </div>
            );
          })}
    </div>
  );
}
