# IT313 - React State and Hooks

## Student Information

**Name:** Jhyle D. Tagapulot  
**Subject:** IT313 - React  
**Laboratory:** Lab 5  
**Topic:** React State and Hooks

## Description

This laboratory demonstrates the use of React state and hooks in a simple application.

The application includes a Practice Tracker and a Stopwatch. The Practice Tracker allows the user to increase the solved count and reset the count. The Stopwatch can be started and stopped.

## Features

- React `useState` for managing state
- React `useEffect` for handling the stopwatch timer
- Custom hook for the stopwatch
- Practice Tracker component
- Solve +1 button
- Reset button
- Start and Stop buttons
- Conditional message when the solved count reaches 5

## Technologies Used

- React
- React Native
- Expo
- TypeScript
- React Hooks

## Main Components

### Practice Tracker

The Practice Tracker uses state to keep track of the number of solved problems.

The `Solve +1` button increases the count, while the `Reset` button returns the count to zero.

### Stopwatch

The Stopwatch uses a custom hook and `useEffect` to update the timer every second.

The Start button begins the timer and the Stop button pauses it.

## Testing

The application was tested by performing the following:

1. Clicking the `Solve +1` button to increase the solved count.
2. Clicking the `Reset` button to return the count to zero.
3. Clicking `START` to begin the stopwatch.
4. Clicking `STOP` to pause the stopwatch.
5. Checking that the `Great job!` message appears when the solved count reaches 5.

## Repository

GitHub Repository:

https://github.com/Jhyle30/IT313_Tagapulot_JhyleD_ReactStateHooks.git