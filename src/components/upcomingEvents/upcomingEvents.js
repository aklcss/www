import React from "react";
import "./upcomingEvents.css";
import Eventimage from "../eventimage/eventimage";
import dayjs from "dayjs";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import InfoIcon from "@material-ui/icons/Info";
import Emoji from "../emoji/emoji";

const useStyles = makeStyles(theme => ({
  gridListTile: {
    borderRadius: 20,
    overflow: "hidden",
    padding: 0,
  },
  gridListTileHeader: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    color: "white",
    backgroundImage: "none",
  },
}));


const UpcomingEvents = (props) => {
  const styles = useStyles();

  return (
    <div className="section events">
      <Container maxWidth="md">
        <h1 className={"section-header"}><Emoji symbol={"🗓"} /> Upcoming and Past meetups</h1>
        <div>
          <GridList cols={3} spacing={10}>
            {props.events.map((event, index) => (
              <GridListTile
                className={styles.gridListTile}
                key={event.img}
                cols={index % 4 === 0 ? 3 : 1}
                rows={index % 4 === 0 ? 2 : 1}
              >
                <Eventimage image={event.featured_photo} name={event.name}/>
                <GridListTileBar
                  className={styles.gridListTileHeader}
                  title={event.name}
                  subtitle={
                    <span>{dayjs(event.time).format("ddd, DD MMM 'YY hh:mm a")}</span>
                  }
                  actionIcon={
                    <IconButton
                      className={styles.button}
                      href={event.link}
                      aria-label={`info about ${event.name}`}
                    >
                      <InfoIcon/>
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </div>
  );
};

export default UpcomingEvents;