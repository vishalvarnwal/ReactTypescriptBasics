import { useState } from "react";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };
  const onDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={onDeleteGoal} />
    </main>
  );
}
