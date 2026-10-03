import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  return seconds;
}

function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Practice Tracker</Text>

      <Text style={styles.solved}>
        Solved: {solved}
      </Text>

      <View style={styles.button}>
        <Button
          title="Solve +1"
          onPress={onSolve}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={onReset}
        />
      </View>

      {solved >= 5 && (
        <Text style={styles.message}>
          Great job!
        </Text>
      )}
    </View>
  );
}

function Stopwatch({
  seconds,
}: {
  seconds: number;
}) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Stopwatch</Text>

      <Text style={styles.timer}>
        {String(minutes).padStart(2, "0")}:
        {String(remainingSeconds).padStart(2, "0")}
      </Text>
    </View>
  );
}

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  function handleSolve() {
    setSolved((s) => s + 1);
  }

  function handleReset() {
    setSolved(0);
  }

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        LAB 5
      </Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
      />

      <View style={styles.button}>
        <Button
          title="START"
          onPress={handleStart}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="STOP"
          onPress={handleStop}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
  },

  section: {
    alignItems: "center",
    marginBottom: 25,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  solved: {
    fontSize: 20,
    marginBottom: 15,
  },

  timer: {
    fontSize: 40,
    fontWeight: "bold",
  },

  button: {
    width: 200,
    marginVertical: 5,
  },

  message: {
    fontSize: 18,
    marginTop: 10,
  },
});