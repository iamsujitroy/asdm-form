import styles from "./SelectField.module.css";

export default function SelectField({Title, selectedOption, setOption, optionsArr=[]}) {

  function handleOptionChange(event) {
    setOption(event.target.value);
  }

  return (
    <div>
      <label className={styles.label}>
        {Title}
        <select value={selectedOption} onChange={handleOptionChange} className={styles.select}>
          <option value="-- Select --">-- Select --</option>
          {optionsArr.map((option) => (
            <option value={option.id1}>
              {option.name1}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
