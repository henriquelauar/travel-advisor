import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Input,
} from "@mui/material";
import { useState } from "react";
import styles from "../List/styles.module.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = () => {
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const places = [
    { name: "Cool place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
  ];

  return (
    <div className={styles.container}>
      <Typography variant="h5" className={styles.title}>
        Restaurants, Hotels & Attractions around you
      </Typography>
      <div className={styles.form}>
        <FormControl className={styles.formControl}>
          <InputLabel className={styles.input}>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants hotels and attractions">All</MenuItem>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={styles.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.places}>
        <Grid container spacing={3} className={styles.list}>
          {places?.map((place, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default List;
