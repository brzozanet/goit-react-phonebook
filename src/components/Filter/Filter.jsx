import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/contacts/filtersSlice";
import { TextField } from "@mui/material";

const styles = {
  containerDiv: ["flex", "justify-center", "mt-4"].join(" "),
  filterForm: [
    "flex",
    "justify-center",
    "flex-col",
    "border-2",
    "p-3",
    "rounded-3xl",
    "shadow-lg",
  ].join(" "),
  textH3: ["text-center", "mb-5"].join(" "),
  label: "mb-5",
};

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => dispatch(filterContact(e.target.value));

  return (
    <div className={styles.containerDiv}>
      <form className={styles.filterForm}>
        <h3 className={styles.textH3}>Find contacts by name</h3>
        <label className={styles.label}>
          <TextField onChange={handleFilter} size="small" label="Enter name" />
        </label>
      </form>
    </div>
  );
};
