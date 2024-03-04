import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/contacts/filtersSlice";
import { TextField } from "@mui/material";

const css = {
  containerDiv: ["flex", "justify-center", "mt-4"].join(" "),
  filterForm: [
    "flex",
    "justify-center",
    "flex-col",
    "border-2",
    "p-8",
    "bg-white",
    "rounded-2xl",
    "shadow-lg",
  ].join(" "),
  textH3: ["text-center", "mb-5"].join(" "),
  label: "mb-5",
};

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    event.preventDefault();
    const name = event.target.value;
    dispatch(filterContact(name));
  };

  return (
    <div className={css.containerDiv}>
      <form className={css.filterForm}>
        <h3 className={css.textH3}>Find contacts by name</h3>
        <label className={css.label}>
          <TextField onChange={handleFilter} size="small" label="Enter name" />
        </label>
      </form>
    </div>
  );
};
