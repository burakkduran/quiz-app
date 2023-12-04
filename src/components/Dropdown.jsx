/* eslint-disable react/prop-types */

const Dropdown = ({ label, options, setChange }) => {

  const handleChange = (e) => {
    setChange(e.target.value);
  }
  

  return (
    <div>
      <label className="block mb-2 text-lg font-medium  text-purple">
        {label}
      </label>
      <select onChange={handleChange} className="border text-lg rounded-lg  block w-24 sm:w-40  p-2.5 bg-violet-950 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-white">
        {options.map((option, i) => (
          <option className="bg-violet-500 text-white" key={i} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
