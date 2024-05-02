import { StyleSheet, Text, View } from "react-native";

// Local components
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        {/* Today's Tasks */}
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        {/* Tasks Container */}
        <View style={styles.items}>
          {/* This is where the tasks will go */}
          <Task text="Task 1" />
          <Task text="Task 2" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
