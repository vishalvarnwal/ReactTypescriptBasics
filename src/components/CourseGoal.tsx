import { type ReactNode, type PropsWithChildren, FC } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
};

// type CourseGoalProps = PropsWithChildren<{
//   title: string;
//   description: string;
// }>;
// interface CourseGoalProps {
//   title: string;
//   description: string;
//   children: ReactNode;
// }

export default function CourseGoal({
  id,
  title,
  description,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, description, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
