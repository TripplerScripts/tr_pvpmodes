import { InputOptions } from "../types";

export default ({
    parent,
    className = "bg-stone-800 outline-none p-2 rounded text-white",
    defaultValue = "",
    placeholder = "press tab to jump in",
    type = "text",
    onJoin,
    onChange,
    onSubmit,
  }: InputOptions): typeof input => {

  const input = document.createElement("input");

  input.type = type;
  input.value = defaultValue;
  input.placeholder = placeholder;
  input.className = className;

  if (onSubmit) input.addEventListener("change", onSubmit);
  if (onChange) input.addEventListener("input", onChange);
  if (onJoin) input.addEventListener("click", onJoin);

  document.getElementById(parent)?.appendChild(input);

  return input;
}