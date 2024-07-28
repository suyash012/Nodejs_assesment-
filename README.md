# Firebase SMS Project

This project interacts with the Firebase Realtime Database to fetch, format, and process SMS data. Due to the limitations of the Firebase Spark plan, this application is designed to run locally without deploying Cloud Functions.

## Project Overview

This application does the following:
1. Fetches SMS data from Firebase Realtime Database
2. Formats the timestamp into a human-readable form
3. Calculate the total amount from all SMS entries
4. Provides a simple API endpoint for these operations (runs locally)

## Prerequisites

- Node.js (v14 or later)
- npm (comes with Node.js)
- Firebase project on the Spark (free) plan

## Setup

1. Clone this repository:
2. Install dependencies:
3. Create a `.env` file in the project root and add your Firebase configuration:

## Note on Deployment

This project is designed to run locally due to the limitations of the Firebase Spark plan, which does not support Cloud Functions. If you'd like to deploy this application, you must upgrade to the Blaze (pay-as-you-go) plan and adjust the code to use Firebase Cloud Functions.
