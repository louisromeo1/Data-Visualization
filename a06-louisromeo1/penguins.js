// 
// penguins.js
// Dataset for CSC444 Assignment 06, Fall 2024
// Joshua A. Levine <josh@arizona.edu>
//
// This is the "penguins" dataset.  Credit goes to:
// Horst AM, Hill AP, Gorman KB (2020). palmerpenguins: Palmer Archipelago
// (Antarctica) penguin data. R package version 0.1.0.
// https://allisonhorst.github.io/palmerpenguins/. doi: 10.5281/zenodo.3960218.
//
// I created this file from a csv clone of the original, found here: 
// https://gist.github.com/slopp/ce3b90b9168f2f921784de84fa445651
//
// This well known dataset contains measurements of 342 penguins.  I have
// simplified its contents slightly for this class, removing two of the entries
// with NA values as well as the columns for "rowid" and "year".  I have
// retained the species, island, and sex nominal categories
//
// The remaining for continuous values correspond to length and depth of each
// penguin's bill, length of the flippers, and total body mass.  Lengths are
// measured in millimeters and weight is in grams.

var penguins = [
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 39.1,
    "bill_depth": 18.7,
    "flipper_length": 181.0,
    "body_mass": 3750.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 39.5,
    "bill_depth": 17.4,
    "flipper_length": 186.0,
    "body_mass": 3800.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 40.3,
    "bill_depth": 18.0,
    "flipper_length": 195.0,
    "body_mass": 3250.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 36.7,
    "bill_depth": 19.3,
    "flipper_length": 193.0,
    "body_mass": 3450.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 39.3,
    "bill_depth": 20.6,
    "flipper_length": 190.0,
    "body_mass": 3650.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 38.9,
    "bill_depth": 17.8,
    "flipper_length": 181.0,
    "body_mass": 3625.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 39.2,
    "bill_depth": 19.6,
    "flipper_length": 195.0,
    "body_mass": 4675.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 34.1,
    "bill_depth": 18.1,
    "flipper_length": 193.0,
    "body_mass": 3475.0,
    "sex": "NA"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 42.0,
    "bill_depth": 20.2,
    "flipper_length": 190.0,
    "body_mass": 4250.0,
    "sex": "NA"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 37.8,
    "bill_depth": 17.1,
    "flipper_length": 186.0,
    "body_mass": 3300.0,
    "sex": "NA"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 37.8,
    "bill_depth": 17.3,
    "flipper_length": 180.0,
    "body_mass": 3700.0,
    "sex": "NA"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 41.1,
    "bill_depth": 17.6,
    "flipper_length": 182.0,
    "body_mass": 3200.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 38.6,
    "bill_depth": 21.2,
    "flipper_length": 191.0,
    "body_mass": 3800.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 34.6,
    "bill_depth": 21.1,
    "flipper_length": 198.0,
    "body_mass": 4400.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 36.6,
    "bill_depth": 17.8,
    "flipper_length": 185.0,
    "body_mass": 3700.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 38.7,
    "bill_depth": 19.0,
    "flipper_length": 195.0,
    "body_mass": 3450.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 42.5,
    "bill_depth": 20.7,
    "flipper_length": 197.0,
    "body_mass": 4500.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 34.4,
    "bill_depth": 18.4,
    "flipper_length": 184.0,
    "body_mass": 3325.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 46.0,
    "bill_depth": 21.5,
    "flipper_length": 194.0,
    "body_mass": 4200.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 37.8,
    "bill_depth": 18.3,
    "flipper_length": 174.0,
    "body_mass": 3400.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 37.7,
    "bill_depth": 18.7,
    "flipper_length": 180.0,
    "body_mass": 3600.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 35.9,
    "bill_depth": 19.2,
    "flipper_length": 189.0,
    "body_mass": 3800.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 38.2,
    "bill_depth": 18.1,
    "flipper_length": 185.0,
    "body_mass": 3950.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 38.8,
    "bill_depth": 17.2,
    "flipper_length": 180.0,
    "body_mass": 3800.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 35.3,
    "bill_depth": 18.9,
    "flipper_length": 187.0,
    "body_mass": 3800.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 40.6,
    "bill_depth": 18.6,
    "flipper_length": 183.0,
    "body_mass": 3550.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 40.5,
    "bill_depth": 17.9,
    "flipper_length": 187.0,
    "body_mass": 3200.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 37.9,
    "bill_depth": 18.6,
    "flipper_length": 172.0,
    "body_mass": 3150.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 40.5,
    "bill_depth": 18.9,
    "flipper_length": 180.0,
    "body_mass": 3950.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 39.5,
    "bill_depth": 16.7,
    "flipper_length": 178.0,
    "body_mass": 3250.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 37.2,
    "bill_depth": 18.1,
    "flipper_length": 178.0,
    "body_mass": 3900.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 39.5,
    "bill_depth": 17.8,
    "flipper_length": 188.0,
    "body_mass": 3300.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 40.9,
    "bill_depth": 18.9,
    "flipper_length": 184.0,
    "body_mass": 3900.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.4,
    "bill_depth": 17.0,
    "flipper_length": 195.0,
    "body_mass": 3325.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 39.2,
    "bill_depth": 21.1,
    "flipper_length": 196.0,
    "body_mass": 4150.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 38.8,
    "bill_depth": 20.0,
    "flipper_length": 190.0,
    "body_mass": 3950.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 42.2,
    "bill_depth": 18.5,
    "flipper_length": 180.0,
    "body_mass": 3550.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 37.6,
    "bill_depth": 19.3,
    "flipper_length": 181.0,
    "body_mass": 3300.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 39.8,
    "bill_depth": 19.1,
    "flipper_length": 184.0,
    "body_mass": 4650.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.5,
    "bill_depth": 18.0,
    "flipper_length": 182.0,
    "body_mass": 3150.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 40.8,
    "bill_depth": 18.4,
    "flipper_length": 195.0,
    "body_mass": 3900.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.0,
    "bill_depth": 18.5,
    "flipper_length": 186.0,
    "body_mass": 3100.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 44.1,
    "bill_depth": 19.7,
    "flipper_length": 196.0,
    "body_mass": 4400.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 37.0,
    "bill_depth": 16.9,
    "flipper_length": 185.0,
    "body_mass": 3000.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 39.6,
    "bill_depth": 18.8,
    "flipper_length": 190.0,
    "body_mass": 4600.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 41.1,
    "bill_depth": 19.0,
    "flipper_length": 182.0,
    "body_mass": 3425.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 37.5,
    "bill_depth": 18.9,
    "flipper_length": 179.0,
    "body_mass": 2975.0,
    "sex": "NA"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.0,
    "bill_depth": 17.9,
    "flipper_length": 190.0,
    "body_mass": 3450.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 42.3,
    "bill_depth": 21.2,
    "flipper_length": 191.0,
    "body_mass": 4150.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 39.6,
    "bill_depth": 17.7,
    "flipper_length": 186.0,
    "body_mass": 3500.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 40.1,
    "bill_depth": 18.9,
    "flipper_length": 188.0,
    "body_mass": 4300.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 35.0,
    "bill_depth": 17.9,
    "flipper_length": 190.0,
    "body_mass": 3450.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 42.0,
    "bill_depth": 19.5,
    "flipper_length": 200.0,
    "body_mass": 4050.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 34.5,
    "bill_depth": 18.1,
    "flipper_length": 187.0,
    "body_mass": 2900.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 41.4,
    "bill_depth": 18.6,
    "flipper_length": 191.0,
    "body_mass": 3700.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 39.0,
    "bill_depth": 17.5,
    "flipper_length": 186.0,
    "body_mass": 3550.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 40.6,
    "bill_depth": 18.8,
    "flipper_length": 193.0,
    "body_mass": 3800.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 36.5,
    "bill_depth": 16.6,
    "flipper_length": 181.0,
    "body_mass": 2850.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 37.6,
    "bill_depth": 19.1,
    "flipper_length": 194.0,
    "body_mass": 3750.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 35.7,
    "bill_depth": 16.9,
    "flipper_length": 185.0,
    "body_mass": 3150.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 41.3,
    "bill_depth": 21.1,
    "flipper_length": 195.0,
    "body_mass": 4400.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 37.6,
    "bill_depth": 17.0,
    "flipper_length": 185.0,
    "body_mass": 3600.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 41.1,
    "bill_depth": 18.2,
    "flipper_length": 192.0,
    "body_mass": 4050.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 36.4,
    "bill_depth": 17.1,
    "flipper_length": 184.0,
    "body_mass": 2850.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 41.6,
    "bill_depth": 18.0,
    "flipper_length": 192.0,
    "body_mass": 3950.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 35.5,
    "bill_depth": 16.2,
    "flipper_length": 195.0,
    "body_mass": 3350.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 41.1,
    "bill_depth": 19.1,
    "flipper_length": 188.0,
    "body_mass": 4100.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 35.9,
    "bill_depth": 16.6,
    "flipper_length": 190.0,
    "body_mass": 3050.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 41.8,
    "bill_depth": 19.4,
    "flipper_length": 198.0,
    "body_mass": 4450.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 33.5,
    "bill_depth": 19.0,
    "flipper_length": 190.0,
    "body_mass": 3600.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 39.7,
    "bill_depth": 18.4,
    "flipper_length": 190.0,
    "body_mass": 3900.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 39.6,
    "bill_depth": 17.2,
    "flipper_length": 196.0,
    "body_mass": 3550.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 45.8,
    "bill_depth": 18.9,
    "flipper_length": 197.0,
    "body_mass": 4150.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 35.5,
    "bill_depth": 17.5,
    "flipper_length": 190.0,
    "body_mass": 3700.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 42.8,
    "bill_depth": 18.5,
    "flipper_length": 195.0,
    "body_mass": 4250.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 40.9,
    "bill_depth": 16.8,
    "flipper_length": 191.0,
    "body_mass": 3700.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 37.2,
    "bill_depth": 19.4,
    "flipper_length": 184.0,
    "body_mass": 3900.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 36.2,
    "bill_depth": 16.1,
    "flipper_length": 187.0,
    "body_mass": 3550.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 42.1,
    "bill_depth": 19.1,
    "flipper_length": 195.0,
    "body_mass": 4000.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 34.6,
    "bill_depth": 17.2,
    "flipper_length": 189.0,
    "body_mass": 3200.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 42.9,
    "bill_depth": 17.6,
    "flipper_length": 196.0,
    "body_mass": 4700.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 36.7,
    "bill_depth": 18.8,
    "flipper_length": 187.0,
    "body_mass": 3800.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 35.1,
    "bill_depth": 19.4,
    "flipper_length": 193.0,
    "body_mass": 4200.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 37.3,
    "bill_depth": 17.8,
    "flipper_length": 191.0,
    "body_mass": 3350.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 41.3,
    "bill_depth": 20.3,
    "flipper_length": 194.0,
    "body_mass": 3550.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.3,
    "bill_depth": 19.5,
    "flipper_length": 190.0,
    "body_mass": 3800.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.9,
    "bill_depth": 18.6,
    "flipper_length": 189.0,
    "body_mass": 3500.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 38.3,
    "bill_depth": 19.2,
    "flipper_length": 189.0,
    "body_mass": 3950.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 38.9,
    "bill_depth": 18.8,
    "flipper_length": 190.0,
    "body_mass": 3600.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 35.7,
    "bill_depth": 18.0,
    "flipper_length": 202.0,
    "body_mass": 3550.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 41.1,
    "bill_depth": 18.1,
    "flipper_length": 205.0,
    "body_mass": 4300.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 34.0,
    "bill_depth": 17.1,
    "flipper_length": 185.0,
    "body_mass": 3400.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 39.6,
    "bill_depth": 18.1,
    "flipper_length": 186.0,
    "body_mass": 4450.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.2,
    "bill_depth": 17.3,
    "flipper_length": 187.0,
    "body_mass": 3300.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 40.8,
    "bill_depth": 18.9,
    "flipper_length": 208.0,
    "body_mass": 4300.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 38.1,
    "bill_depth": 18.6,
    "flipper_length": 190.0,
    "body_mass": 3700.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 40.3,
    "bill_depth": 18.5,
    "flipper_length": 196.0,
    "body_mass": 4350.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 33.1,
    "bill_depth": 16.1,
    "flipper_length": 178.0,
    "body_mass": 2900.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 43.2,
    "bill_depth": 18.5,
    "flipper_length": 192.0,
    "body_mass": 4100.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 35.0,
    "bill_depth": 17.9,
    "flipper_length": 192.0,
    "body_mass": 3725.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 41.0,
    "bill_depth": 20.0,
    "flipper_length": 203.0,
    "body_mass": 4725.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 37.7,
    "bill_depth": 16.0,
    "flipper_length": 183.0,
    "body_mass": 3075.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 37.8,
    "bill_depth": 20.0,
    "flipper_length": 190.0,
    "body_mass": 4250.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 37.9,
    "bill_depth": 18.6,
    "flipper_length": 193.0,
    "body_mass": 2925.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 39.7,
    "bill_depth": 18.9,
    "flipper_length": 184.0,
    "body_mass": 3550.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 38.6,
    "bill_depth": 17.2,
    "flipper_length": 199.0,
    "body_mass": 3750.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 38.2,
    "bill_depth": 20.0,
    "flipper_length": 190.0,
    "body_mass": 3900.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 38.1,
    "bill_depth": 17.0,
    "flipper_length": 181.0,
    "body_mass": 3175.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 43.2,
    "bill_depth": 19.0,
    "flipper_length": 197.0,
    "body_mass": 4775.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 38.1,
    "bill_depth": 16.5,
    "flipper_length": 198.0,
    "body_mass": 3825.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 45.6,
    "bill_depth": 20.3,
    "flipper_length": 191.0,
    "body_mass": 4600.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 39.7,
    "bill_depth": 17.7,
    "flipper_length": 193.0,
    "body_mass": 3200.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 42.2,
    "bill_depth": 19.5,
    "flipper_length": 197.0,
    "body_mass": 4275.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 39.6,
    "bill_depth": 20.7,
    "flipper_length": 191.0,
    "body_mass": 3900.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Biscoe",
    "bill_length": 42.7,
    "bill_depth": 18.3,
    "flipper_length": 196.0,
    "body_mass": 4075.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 38.6,
    "bill_depth": 17.0,
    "flipper_length": 188.0,
    "body_mass": 2900.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 37.3,
    "bill_depth": 20.5,
    "flipper_length": 199.0,
    "body_mass": 3775.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 35.7,
    "bill_depth": 17.0,
    "flipper_length": 189.0,
    "body_mass": 3350.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 41.1,
    "bill_depth": 18.6,
    "flipper_length": 189.0,
    "body_mass": 3325.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 36.2,
    "bill_depth": 17.2,
    "flipper_length": 187.0,
    "body_mass": 3150.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 37.7,
    "bill_depth": 19.8,
    "flipper_length": 198.0,
    "body_mass": 3500.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 40.2,
    "bill_depth": 17.0,
    "flipper_length": 176.0,
    "body_mass": 3450.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 41.4,
    "bill_depth": 18.5,
    "flipper_length": 202.0,
    "body_mass": 3875.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 35.2,
    "bill_depth": 15.9,
    "flipper_length": 186.0,
    "body_mass": 3050.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 40.6,
    "bill_depth": 19.0,
    "flipper_length": 199.0,
    "body_mass": 4000.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 38.8,
    "bill_depth": 17.6,
    "flipper_length": 191.0,
    "body_mass": 3275.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 41.5,
    "bill_depth": 18.3,
    "flipper_length": 195.0,
    "body_mass": 4300.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 39.0,
    "bill_depth": 17.1,
    "flipper_length": 191.0,
    "body_mass": 3050.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 44.1,
    "bill_depth": 18.0,
    "flipper_length": 210.0,
    "body_mass": 4000.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 38.5,
    "bill_depth": 17.9,
    "flipper_length": 190.0,
    "body_mass": 3325.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Torgersen",
    "bill_length": 43.1,
    "bill_depth": 19.2,
    "flipper_length": 197.0,
    "body_mass": 3500.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.8,
    "bill_depth": 18.5,
    "flipper_length": 193.0,
    "body_mass": 3500.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 37.5,
    "bill_depth": 18.5,
    "flipper_length": 199.0,
    "body_mass": 4475.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 38.1,
    "bill_depth": 17.6,
    "flipper_length": 187.0,
    "body_mass": 3425.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 41.1,
    "bill_depth": 17.5,
    "flipper_length": 190.0,
    "body_mass": 3900.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 35.6,
    "bill_depth": 17.5,
    "flipper_length": 191.0,
    "body_mass": 3175.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 40.2,
    "bill_depth": 20.1,
    "flipper_length": 200.0,
    "body_mass": 3975.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 37.0,
    "bill_depth": 16.5,
    "flipper_length": 185.0,
    "body_mass": 3400.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 39.7,
    "bill_depth": 17.9,
    "flipper_length": 193.0,
    "body_mass": 4250.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 40.2,
    "bill_depth": 17.1,
    "flipper_length": 193.0,
    "body_mass": 3400.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 40.6,
    "bill_depth": 17.2,
    "flipper_length": 187.0,
    "body_mass": 3475.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 32.1,
    "bill_depth": 15.5,
    "flipper_length": 188.0,
    "body_mass": 3050.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 40.7,
    "bill_depth": 17.0,
    "flipper_length": 190.0,
    "body_mass": 3725.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 37.3,
    "bill_depth": 16.8,
    "flipper_length": 192.0,
    "body_mass": 3000.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 39.0,
    "bill_depth": 18.7,
    "flipper_length": 185.0,
    "body_mass": 3650.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 39.2,
    "bill_depth": 18.6,
    "flipper_length": 190.0,
    "body_mass": 4250.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.6,
    "bill_depth": 18.4,
    "flipper_length": 184.0,
    "body_mass": 3475.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.0,
    "bill_depth": 17.8,
    "flipper_length": 195.0,
    "body_mass": 3450.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 37.8,
    "bill_depth": 18.1,
    "flipper_length": 193.0,
    "body_mass": 3750.0,
    "sex": "male"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 36.0,
    "bill_depth": 17.1,
    "flipper_length": 187.0,
    "body_mass": 3700.0,
    "sex": "female"
  },
  {
    "species": "Adelie",
    "island": "Dream",
    "bill_length": 41.5,
    "bill_depth": 18.5,
    "flipper_length": 201.0,
    "body_mass": 4000.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.1,
    "bill_depth": 13.2,
    "flipper_length": 211.0,
    "body_mass": 4500.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.0,
    "bill_depth": 16.3,
    "flipper_length": 230.0,
    "body_mass": 5700.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.7,
    "bill_depth": 14.1,
    "flipper_length": 210.0,
    "body_mass": 4450.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.0,
    "bill_depth": 15.2,
    "flipper_length": 218.0,
    "body_mass": 5700.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.6,
    "bill_depth": 14.5,
    "flipper_length": 215.0,
    "body_mass": 5400.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.5,
    "bill_depth": 13.5,
    "flipper_length": 210.0,
    "body_mass": 4550.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.4,
    "bill_depth": 14.6,
    "flipper_length": 211.0,
    "body_mass": 4800.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.7,
    "bill_depth": 15.3,
    "flipper_length": 219.0,
    "body_mass": 5200.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 43.3,
    "bill_depth": 13.4,
    "flipper_length": 209.0,
    "body_mass": 4400.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.8,
    "bill_depth": 15.4,
    "flipper_length": 215.0,
    "body_mass": 5150.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 40.9,
    "bill_depth": 13.7,
    "flipper_length": 214.0,
    "body_mass": 4650.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.0,
    "bill_depth": 16.1,
    "flipper_length": 216.0,
    "body_mass": 5550.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.5,
    "bill_depth": 13.7,
    "flipper_length": 214.0,
    "body_mass": 4650.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.4,
    "bill_depth": 14.6,
    "flipper_length": 213.0,
    "body_mass": 5850.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.8,
    "bill_depth": 14.6,
    "flipper_length": 210.0,
    "body_mass": 4200.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.3,
    "bill_depth": 15.7,
    "flipper_length": 217.0,
    "body_mass": 5850.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 42.0,
    "bill_depth": 13.5,
    "flipper_length": 210.0,
    "body_mass": 4150.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.2,
    "bill_depth": 15.2,
    "flipper_length": 221.0,
    "body_mass": 6300.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.2,
    "bill_depth": 14.5,
    "flipper_length": 209.0,
    "body_mass": 4800.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.7,
    "bill_depth": 15.1,
    "flipper_length": 222.0,
    "body_mass": 5350.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.2,
    "bill_depth": 14.3,
    "flipper_length": 218.0,
    "body_mass": 5700.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.1,
    "bill_depth": 14.5,
    "flipper_length": 215.0,
    "body_mass": 5000.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.5,
    "bill_depth": 14.5,
    "flipper_length": 213.0,
    "body_mass": 4400.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.3,
    "bill_depth": 15.8,
    "flipper_length": 215.0,
    "body_mass": 5050.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 42.9,
    "bill_depth": 13.1,
    "flipper_length": 215.0,
    "body_mass": 5000.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.1,
    "bill_depth": 15.1,
    "flipper_length": 215.0,
    "body_mass": 5100.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 44.5,
    "bill_depth": 14.3,
    "flipper_length": 216.0,
    "body_mass": 4100.0,
    "sex": "NA"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.8,
    "bill_depth": 15.0,
    "flipper_length": 215.0,
    "body_mass": 5650.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.2,
    "bill_depth": 14.3,
    "flipper_length": 210.0,
    "body_mass": 4600.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.0,
    "bill_depth": 15.3,
    "flipper_length": 220.0,
    "body_mass": 5550.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.3,
    "bill_depth": 15.3,
    "flipper_length": 222.0,
    "body_mass": 5250.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 42.8,
    "bill_depth": 14.2,
    "flipper_length": 209.0,
    "body_mass": 4700.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.1,
    "bill_depth": 14.5,
    "flipper_length": 207.0,
    "body_mass": 5050.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 59.6,
    "bill_depth": 17.0,
    "flipper_length": 230.0,
    "body_mass": 6050.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.1,
    "bill_depth": 14.8,
    "flipper_length": 220.0,
    "body_mass": 5150.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.4,
    "bill_depth": 16.3,
    "flipper_length": 220.0,
    "body_mass": 5400.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 42.6,
    "bill_depth": 13.7,
    "flipper_length": 213.0,
    "body_mass": 4950.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 44.4,
    "bill_depth": 17.3,
    "flipper_length": 219.0,
    "body_mass": 5250.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 44.0,
    "bill_depth": 13.6,
    "flipper_length": 208.0,
    "body_mass": 4350.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.7,
    "bill_depth": 15.7,
    "flipper_length": 208.0,
    "body_mass": 5350.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 42.7,
    "bill_depth": 13.7,
    "flipper_length": 208.0,
    "body_mass": 3950.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.6,
    "bill_depth": 16.0,
    "flipper_length": 225.0,
    "body_mass": 5700.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.3,
    "bill_depth": 13.7,
    "flipper_length": 210.0,
    "body_mass": 4300.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.6,
    "bill_depth": 15.0,
    "flipper_length": 216.0,
    "body_mass": 4750.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.5,
    "bill_depth": 15.9,
    "flipper_length": 222.0,
    "body_mass": 5550.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 43.6,
    "bill_depth": 13.9,
    "flipper_length": 217.0,
    "body_mass": 4900.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.5,
    "bill_depth": 13.9,
    "flipper_length": 210.0,
    "body_mass": 4200.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.5,
    "bill_depth": 15.9,
    "flipper_length": 225.0,
    "body_mass": 5400.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 44.9,
    "bill_depth": 13.3,
    "flipper_length": 213.0,
    "body_mass": 5100.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.2,
    "bill_depth": 15.8,
    "flipper_length": 215.0,
    "body_mass": 5300.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.6,
    "bill_depth": 14.2,
    "flipper_length": 210.0,
    "body_mass": 4850.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.5,
    "bill_depth": 14.1,
    "flipper_length": 220.0,
    "body_mass": 5300.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.1,
    "bill_depth": 14.4,
    "flipper_length": 210.0,
    "body_mass": 4400.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.1,
    "bill_depth": 15.0,
    "flipper_length": 225.0,
    "body_mass": 5000.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.5,
    "bill_depth": 14.4,
    "flipper_length": 217.0,
    "body_mass": 4900.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.0,
    "bill_depth": 15.4,
    "flipper_length": 220.0,
    "body_mass": 5050.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 43.8,
    "bill_depth": 13.9,
    "flipper_length": 208.0,
    "body_mass": 4300.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.5,
    "bill_depth": 15.0,
    "flipper_length": 220.0,
    "body_mass": 5000.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 43.2,
    "bill_depth": 14.5,
    "flipper_length": 208.0,
    "body_mass": 4450.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.4,
    "bill_depth": 15.3,
    "flipper_length": 224.0,
    "body_mass": 5550.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.3,
    "bill_depth": 13.8,
    "flipper_length": 208.0,
    "body_mass": 4200.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.2,
    "bill_depth": 14.9,
    "flipper_length": 221.0,
    "body_mass": 5300.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.7,
    "bill_depth": 13.9,
    "flipper_length": 214.0,
    "body_mass": 4400.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 54.3,
    "bill_depth": 15.7,
    "flipper_length": 231.0,
    "body_mass": 5650.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.8,
    "bill_depth": 14.2,
    "flipper_length": 219.0,
    "body_mass": 4700.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.8,
    "bill_depth": 16.8,
    "flipper_length": 230.0,
    "body_mass": 5700.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.2,
    "bill_depth": 14.4,
    "flipper_length": 214.0,
    "body_mass": 4650.0,
    "sex": "NA"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.5,
    "bill_depth": 16.2,
    "flipper_length": 229.0,
    "body_mass": 5800.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 43.5,
    "bill_depth": 14.2,
    "flipper_length": 220.0,
    "body_mass": 4700.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.7,
    "bill_depth": 15.0,
    "flipper_length": 223.0,
    "body_mass": 5550.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.7,
    "bill_depth": 15.0,
    "flipper_length": 216.0,
    "body_mass": 4750.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.4,
    "bill_depth": 15.6,
    "flipper_length": 221.0,
    "body_mass": 5000.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.2,
    "bill_depth": 15.6,
    "flipper_length": 221.0,
    "body_mass": 5100.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.5,
    "bill_depth": 14.8,
    "flipper_length": 217.0,
    "body_mass": 5200.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.4,
    "bill_depth": 15.0,
    "flipper_length": 216.0,
    "body_mass": 4700.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.6,
    "bill_depth": 16.0,
    "flipper_length": 230.0,
    "body_mass": 5800.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.5,
    "bill_depth": 14.2,
    "flipper_length": 209.0,
    "body_mass": 4600.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 51.1,
    "bill_depth": 16.3,
    "flipper_length": 220.0,
    "body_mass": 6000.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.2,
    "bill_depth": 13.8,
    "flipper_length": 215.0,
    "body_mass": 4750.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.2,
    "bill_depth": 16.4,
    "flipper_length": 223.0,
    "body_mass": 5950.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.1,
    "bill_depth": 14.5,
    "flipper_length": 212.0,
    "body_mass": 4625.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 52.5,
    "bill_depth": 15.6,
    "flipper_length": 221.0,
    "body_mass": 5450.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.4,
    "bill_depth": 14.6,
    "flipper_length": 212.0,
    "body_mass": 4725.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.0,
    "bill_depth": 15.9,
    "flipper_length": 224.0,
    "body_mass": 5350.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 44.9,
    "bill_depth": 13.8,
    "flipper_length": 212.0,
    "body_mass": 4750.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.8,
    "bill_depth": 17.3,
    "flipper_length": 228.0,
    "body_mass": 5600.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 43.4,
    "bill_depth": 14.4,
    "flipper_length": 218.0,
    "body_mass": 4600.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 51.3,
    "bill_depth": 14.2,
    "flipper_length": 218.0,
    "body_mass": 5300.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.5,
    "bill_depth": 14.0,
    "flipper_length": 212.0,
    "body_mass": 4875.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 52.1,
    "bill_depth": 17.0,
    "flipper_length": 230.0,
    "body_mass": 5550.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.5,
    "bill_depth": 15.0,
    "flipper_length": 218.0,
    "body_mass": 4950.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 52.2,
    "bill_depth": 17.1,
    "flipper_length": 228.0,
    "body_mass": 5400.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.5,
    "bill_depth": 14.5,
    "flipper_length": 212.0,
    "body_mass": 4750.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.5,
    "bill_depth": 16.1,
    "flipper_length": 224.0,
    "body_mass": 5650.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 44.5,
    "bill_depth": 14.7,
    "flipper_length": 214.0,
    "body_mass": 4850.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.8,
    "bill_depth": 15.7,
    "flipper_length": 226.0,
    "body_mass": 5200.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.4,
    "bill_depth": 15.8,
    "flipper_length": 216.0,
    "body_mass": 4925.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.9,
    "bill_depth": 14.6,
    "flipper_length": 222.0,
    "body_mass": 4875.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.4,
    "bill_depth": 14.4,
    "flipper_length": 203.0,
    "body_mass": 4625.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 51.1,
    "bill_depth": 16.5,
    "flipper_length": 225.0,
    "body_mass": 5250.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.5,
    "bill_depth": 15.0,
    "flipper_length": 219.0,
    "body_mass": 4850.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 55.9,
    "bill_depth": 17.0,
    "flipper_length": 228.0,
    "body_mass": 5600.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.2,
    "bill_depth": 15.5,
    "flipper_length": 215.0,
    "body_mass": 4975.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.1,
    "bill_depth": 15.0,
    "flipper_length": 228.0,
    "body_mass": 5500.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.3,
    "bill_depth": 13.8,
    "flipper_length": 216.0,
    "body_mass": 4725.0,
    "sex": "NA"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.8,
    "bill_depth": 16.1,
    "flipper_length": 215.0,
    "body_mass": 5500.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 41.7,
    "bill_depth": 14.7,
    "flipper_length": 210.0,
    "body_mass": 4700.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 53.4,
    "bill_depth": 15.8,
    "flipper_length": 219.0,
    "body_mass": 5500.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 43.3,
    "bill_depth": 14.0,
    "flipper_length": 208.0,
    "body_mass": 4575.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.1,
    "bill_depth": 15.1,
    "flipper_length": 209.0,
    "body_mass": 5500.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.5,
    "bill_depth": 15.2,
    "flipper_length": 216.0,
    "body_mass": 5000.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.8,
    "bill_depth": 15.9,
    "flipper_length": 229.0,
    "body_mass": 5950.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 43.5,
    "bill_depth": 15.2,
    "flipper_length": 213.0,
    "body_mass": 4650.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 51.5,
    "bill_depth": 16.3,
    "flipper_length": 230.0,
    "body_mass": 5500.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.2,
    "bill_depth": 14.1,
    "flipper_length": 217.0,
    "body_mass": 4375.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 55.1,
    "bill_depth": 16.0,
    "flipper_length": 230.0,
    "body_mass": 5850.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 44.5,
    "bill_depth": 15.7,
    "flipper_length": 217.0,
    "body_mass": 4875.0,
    "sex": "NA"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 48.8,
    "bill_depth": 16.2,
    "flipper_length": 222.0,
    "body_mass": 6000.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 47.2,
    "bill_depth": 13.7,
    "flipper_length": 214.0,
    "body_mass": 4925.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 46.8,
    "bill_depth": 14.3,
    "flipper_length": 215.0,
    "body_mass": 4850.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 50.4,
    "bill_depth": 15.7,
    "flipper_length": 222.0,
    "body_mass": 5750.0,
    "sex": "male"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 45.2,
    "bill_depth": 14.8,
    "flipper_length": 212.0,
    "body_mass": 5200.0,
    "sex": "female"
  },
  {
    "species": "Gentoo",
    "island": "Biscoe",
    "bill_length": 49.9,
    "bill_depth": 16.1,
    "flipper_length": 213.0,
    "body_mass": 5400.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.5,
    "bill_depth": 17.9,
    "flipper_length": 192.0,
    "body_mass": 3500.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.0,
    "bill_depth": 19.5,
    "flipper_length": 196.0,
    "body_mass": 3900.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 51.3,
    "bill_depth": 19.2,
    "flipper_length": 193.0,
    "body_mass": 3650.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 45.4,
    "bill_depth": 18.7,
    "flipper_length": 188.0,
    "body_mass": 3525.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 52.7,
    "bill_depth": 19.8,
    "flipper_length": 197.0,
    "body_mass": 3725.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 45.2,
    "bill_depth": 17.8,
    "flipper_length": 198.0,
    "body_mass": 3950.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.1,
    "bill_depth": 18.2,
    "flipper_length": 178.0,
    "body_mass": 3250.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 51.3,
    "bill_depth": 18.2,
    "flipper_length": 197.0,
    "body_mass": 3750.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.0,
    "bill_depth": 18.9,
    "flipper_length": 195.0,
    "body_mass": 4150.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 51.3,
    "bill_depth": 19.9,
    "flipper_length": 198.0,
    "body_mass": 3700.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.6,
    "bill_depth": 17.8,
    "flipper_length": 193.0,
    "body_mass": 3800.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 51.7,
    "bill_depth": 20.3,
    "flipper_length": 194.0,
    "body_mass": 3775.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 47.0,
    "bill_depth": 17.3,
    "flipper_length": 185.0,
    "body_mass": 3700.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 52.0,
    "bill_depth": 18.1,
    "flipper_length": 201.0,
    "body_mass": 4050.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 45.9,
    "bill_depth": 17.1,
    "flipper_length": 190.0,
    "body_mass": 3575.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.5,
    "bill_depth": 19.6,
    "flipper_length": 201.0,
    "body_mass": 4050.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.3,
    "bill_depth": 20.0,
    "flipper_length": 197.0,
    "body_mass": 3300.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 58.0,
    "bill_depth": 17.8,
    "flipper_length": 181.0,
    "body_mass": 3700.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.4,
    "bill_depth": 18.6,
    "flipper_length": 190.0,
    "body_mass": 3450.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 49.2,
    "bill_depth": 18.2,
    "flipper_length": 195.0,
    "body_mass": 4400.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 42.4,
    "bill_depth": 17.3,
    "flipper_length": 181.0,
    "body_mass": 3600.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 48.5,
    "bill_depth": 17.5,
    "flipper_length": 191.0,
    "body_mass": 3400.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 43.2,
    "bill_depth": 16.6,
    "flipper_length": 187.0,
    "body_mass": 2900.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.6,
    "bill_depth": 19.4,
    "flipper_length": 193.0,
    "body_mass": 3800.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.7,
    "bill_depth": 17.9,
    "flipper_length": 195.0,
    "body_mass": 3300.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 52.0,
    "bill_depth": 19.0,
    "flipper_length": 197.0,
    "body_mass": 4150.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.5,
    "bill_depth": 18.4,
    "flipper_length": 200.0,
    "body_mass": 3400.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 49.5,
    "bill_depth": 19.0,
    "flipper_length": 200.0,
    "body_mass": 3800.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.4,
    "bill_depth": 17.8,
    "flipper_length": 191.0,
    "body_mass": 3700.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 52.8,
    "bill_depth": 20.0,
    "flipper_length": 205.0,
    "body_mass": 4550.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 40.9,
    "bill_depth": 16.6,
    "flipper_length": 187.0,
    "body_mass": 3200.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 54.2,
    "bill_depth": 20.8,
    "flipper_length": 201.0,
    "body_mass": 4300.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 42.5,
    "bill_depth": 16.7,
    "flipper_length": 187.0,
    "body_mass": 3350.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 51.0,
    "bill_depth": 18.8,
    "flipper_length": 203.0,
    "body_mass": 4100.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 49.7,
    "bill_depth": 18.6,
    "flipper_length": 195.0,
    "body_mass": 3600.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 47.5,
    "bill_depth": 16.8,
    "flipper_length": 199.0,
    "body_mass": 3900.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 47.6,
    "bill_depth": 18.3,
    "flipper_length": 195.0,
    "body_mass": 3850.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 52.0,
    "bill_depth": 20.7,
    "flipper_length": 210.0,
    "body_mass": 4800.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.9,
    "bill_depth": 16.6,
    "flipper_length": 192.0,
    "body_mass": 2700.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 53.5,
    "bill_depth": 19.9,
    "flipper_length": 205.0,
    "body_mass": 4500.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 49.0,
    "bill_depth": 19.5,
    "flipper_length": 210.0,
    "body_mass": 3950.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.2,
    "bill_depth": 17.5,
    "flipper_length": 187.0,
    "body_mass": 3650.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.9,
    "bill_depth": 19.1,
    "flipper_length": 196.0,
    "body_mass": 3550.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 45.5,
    "bill_depth": 17.0,
    "flipper_length": 196.0,
    "body_mass": 3500.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.9,
    "bill_depth": 17.9,
    "flipper_length": 196.0,
    "body_mass": 3675.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.8,
    "bill_depth": 18.5,
    "flipper_length": 201.0,
    "body_mass": 4450.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.1,
    "bill_depth": 17.9,
    "flipper_length": 190.0,
    "body_mass": 3400.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 49.0,
    "bill_depth": 19.6,
    "flipper_length": 212.0,
    "body_mass": 4300.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 51.5,
    "bill_depth": 18.7,
    "flipper_length": 187.0,
    "body_mass": 3250.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 49.8,
    "bill_depth": 17.3,
    "flipper_length": 198.0,
    "body_mass": 3675.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 48.1,
    "bill_depth": 16.4,
    "flipper_length": 199.0,
    "body_mass": 3325.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 51.4,
    "bill_depth": 19.0,
    "flipper_length": 201.0,
    "body_mass": 3950.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 45.7,
    "bill_depth": 17.3,
    "flipper_length": 193.0,
    "body_mass": 3600.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.7,
    "bill_depth": 19.7,
    "flipper_length": 203.0,
    "body_mass": 4050.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 42.5,
    "bill_depth": 17.3,
    "flipper_length": 187.0,
    "body_mass": 3350.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 52.2,
    "bill_depth": 18.8,
    "flipper_length": 197.0,
    "body_mass": 3450.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 45.2,
    "bill_depth": 16.6,
    "flipper_length": 191.0,
    "body_mass": 3250.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 49.3,
    "bill_depth": 19.9,
    "flipper_length": 203.0,
    "body_mass": 4050.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.2,
    "bill_depth": 18.8,
    "flipper_length": 202.0,
    "body_mass": 3800.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 45.6,
    "bill_depth": 19.4,
    "flipper_length": 194.0,
    "body_mass": 3525.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 51.9,
    "bill_depth": 19.5,
    "flipper_length": 206.0,
    "body_mass": 3950.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 46.8,
    "bill_depth": 16.5,
    "flipper_length": 189.0,
    "body_mass": 3650.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 45.7,
    "bill_depth": 17.0,
    "flipper_length": 195.0,
    "body_mass": 3650.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 55.8,
    "bill_depth": 19.8,
    "flipper_length": 207.0,
    "body_mass": 4000.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 43.5,
    "bill_depth": 18.1,
    "flipper_length": 202.0,
    "body_mass": 3400.0,
    "sex": "female"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 49.6,
    "bill_depth": 18.2,
    "flipper_length": 193.0,
    "body_mass": 3775.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.8,
    "bill_depth": 19.0,
    "flipper_length": 210.0,
    "body_mass": 4100.0,
    "sex": "male"
  },
  {
    "species": "Chinstrap",
    "island": "Dream",
    "bill_length": 50.2,
    "bill_depth": 18.7,
    "flipper_length": 198.0,
    "body_mass": 3775.0,
    "sex": "female"
  }
];
