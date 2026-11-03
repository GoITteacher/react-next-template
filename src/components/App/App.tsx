import TaskList from "../TaskList/TaskList";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox />
        <SortFilter />
        <button className={css.createButton}>Create task</button>
      </header>
      <strong className={css.loading}>Loading tasks...</strong>
      <TaskList tasks={[]} />
    </div>
  );
}
